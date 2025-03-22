import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the request body
    const { name, email, message } = JSON.parse(event.body || '{}') as ContactFormData;

    // Validate the input
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Initialize Resend
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error: Missing API key' }),
      };
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Prepare and send the email
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'hello@dylansharp.dev',
      to: process.env.TO_EMAIL || '',
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error sending email' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', id: data?.id }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
};

export { handler }; 
import { useState } from 'react';
import { Github, Linkedin, Mail, Send, AlertCircle, Twitter, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useTooltip } from '@/hooks/use-tooltip';

const ContactSection = () => {
  const { toast } = useToast();
  const { tooltipProps, TooltipComponent } = useTooltip();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormState({ name: '', email: '', message: '' });
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        toast({
          title: "Copied to clipboard",
          description: "Email address has been copied to clipboard",
          duration: 2000,
        });
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
        toast({
          title: "Failed to copy",
          description: "Please try again",
          variant: "destructive",
          duration: 2000,
        });
      });
  };

  return (
    <section id="contact" className="bg-secondary/30">
      <TooltipComponent content="Click to copy" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="skill-pill inline-block mb-4">Contact</span>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-muted-foreground">
            I'm currently available for freelance work and full-time positions.
            Based in South Africa, I'm open to remote opportunities worldwide.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="glass-container p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-5">
                <div 
                  className="flex items-center cursor-pointer group"
                  onClick={() => copyToClipboard('hello@dylansharp.dev')}
                  {...tooltipProps}
                  aria-label="Click to copy email address"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 transition-colors group-hover:bg-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-medium">Email</p>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      hello@dylansharp.dev
                    </span>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <p className="text-sm font-medium mb-3">Social Profiles</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/DylanSharp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 text-primary transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dylansharp89/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 text-primary transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <p className="text-sm font-medium mb-2">Location</p>
                  <p className="text-muted-foreground">Garden Route, South Africa</p>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <p className="text-sm font-medium mb-2">Citizenship</p>
                  <p className="text-muted-foreground">Dual-citizen of South Africa and the United Kingdom</p>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <p className="text-sm font-medium mb-3">Availability</p>
                  <div className="flex flex-col space-y-2">
                    <p className="text-muted-foreground text-sm">Available from: Now</p>
                    <p className="text-muted-foreground text-sm">Experience: 6+ years</p>
                    <p className="text-muted-foreground text-sm">Relocation: No</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-container p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={cn(
                        "w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                        errors.name ? "border-destructive" : "border-border",
                        isSubmitting && "opacity-60 cursor-not-allowed"
                      )}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <AlertCircle className="w-5 h-5 text-destructive" />
                      </div>
                    )}
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={cn(
                        "w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                        errors.email ? "border-destructive" : "border-border",
                        isSubmitting && "opacity-60 cursor-not-allowed"
                      )}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <AlertCircle className="w-5 h-5 text-destructive" />
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      rows={6}
                      className={cn(
                        "w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none",
                        errors.message ? "border-destructive" : "border-border",
                        isSubmitting && "opacity-60 cursor-not-allowed"
                      )}
                      placeholder="Your message..."
                    />
                    {errors.message && (
                      <div className="absolute top-3 right-0 flex items-start pr-3 pointer-events-none">
                        <AlertCircle className="w-5 h-5 text-destructive" />
                      </div>
                    )}
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
                    "bg-primary text-primary-foreground font-medium transition-all",
                    "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
                    isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

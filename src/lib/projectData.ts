/**
 * Represents a project in the portfolio
 * @interface Project
 * @property {number} id - Unique identifier for the project
 * @property {string} title - The name of the project
 * @property {string} description - A brief description of the project and its purpose
 * @property {string} dateRange - The time period during which the project was built
 * @property {string} image - URL or path to the project's preview image
 * @property {string[]} technologies - Array of technologies, frameworks, or tools used in the project
 * @property {string} [demo] - Optional URL to the live demo of the project
 * @property {string} [github] - Optional URL to the project's GitHub repository
 * @property {string} [details] - Optional additional details about the project
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  dateRange: string;
  image: string;
  technologies: string[];
  demo?: string;
  github?: string;
  details?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Windsock",
    description: "A simple mobile app that scrapes relevant weather data and displays it in a convenient format for paragliders and model flyers in Port Elizabeth, South Africa.",
    dateRange: "04/2022 - Present",
    image: "/assets/windsock.png",
    technologies: ["Capacitor", "Supabase", "Tailwind CSS", "TypeScript", "React"],
    demo: "https://play.google.com/store/apps/details?id=com.dmsapps.windsock",
    github: "https://github.com/DylanSharp/windsock",
    details: "I built this because I wanted it for myself and also wanted a project to practice on. I rebuild this app periodically to test new technologies. Most recently I built it as a React app which I wrapped with Capacitor to build a cross-platform mobile app."
  },
  {
    id: 2,
    title: "BitSwitch",
    description: "An arbitrage trading bot and platform that auto-captures the spread on the USD/ZAR/BTC market.",
    dateRange: "05/2024 - 08/2024",
    image: "/assets/bitswitch.png",
    technologies: ["Python", "Django", "React", "Tailwind CSS", "TypeScript", "Netlify", "Fly.io", "Celery", "Docker", "PostgreSQL", "Supabase"],
    demo: "https://bitswitch.netlify.app",
    github: "https://github.com/DylanSharp/bitswitch",
    details: "I turned off the BE server in January because I wasn't using it. I built out the app with a nice UI in case I decided to charge for it (I didn't in the end). The app placed and monitored multiple orders across crypto platforms in order to profit. I used Supabase for collating data and real-time updates. The backend is a Django app with Celery to run tasks. I hosted the backend using Docker on Fly.io."
  },
  {
    id: 3,
    title: "Portfolio",
    description: "This portfolio website, built with React and Tailwind CSS.",
    dateRange: "2023 - Present",
    image: "/assets/portfolio.png",
    technologies: ["React", "Tailwind", "TypeScript"],
    demo: "https://dylansharp.dev",
    github: "https://github.com/DylanSharp/portfolio",
  }
];

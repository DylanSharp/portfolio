/**
 * Represents a project in the portfolio
 * @interface Project
 * @property {number} id - Unique identifier for the project
 * @property {string} title - The name of the project
 * @property {string} description - A brief description of the project and its purpose
 * @property {string} image - URL or path to the project's preview image
 * @property {string[]} technologies - Array of technologies, frameworks, or tools used in the project
 * @property {string} [demo] - Optional URL to the live demo of the project
 * @property {string} [github] - Optional URL to the project's GitHub repository
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Windsock",
    description: "A simple mobile app that scrapes relevant weather data and displays it in a convenient format for paragliders and model flyers in Port Elizabeth, South Africa.",
    image: "/assets/windsock.png",
    technologies: ["Capacitor", "Supabase", "Tailwind CSS", "TypeScript"],
    demo: "https://play.google.com/store/apps/details?id=com.dmsapps.windsock",
    github: "https://github.com/DylanSharp/windsock",
  },
  {
    id: 2,
    title: "BitSwitch",
    description: "An arbitrage trading bot and platform that auto-captures the spread on the USD/ZAR/BTC market.",
    image: "/assets/bitswitch.png",
    technologies: ["Python", "Pandas", "CCXT", "CCXT-Binance", "CCXT-Kraken", "CCXT-Bitfinex", "CCXT-Bitstamp", "CCXT-Coinbase Pro", "CCXT-Gemini", "CCXT-Huobi", "CCXT-Kucoin", "CCXT-OKX", "CCXT-Poloniex", "CCXT-Reddit", "CCXT-Twitter", "CCXT-Yahoo Finance"],
    demo: "https://bitswitch.netlify.app",
    github: "https://github.com/DylanSharp/bitswitch",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "This portfolio website, built with React and Tailwind CSS.",
    image: "/assets/portfolio.png",
    technologies: ["React", "Tailwind", "TypeScript"],
    demo: "https://dylansharp.dev",
    github: "https://github.com/DylanSharp/portfolio",
  }
];

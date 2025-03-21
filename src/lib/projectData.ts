
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "eWage",
    description: "A full-featured e-commerce platform with product listings, shopping cart, and payment processing.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2670&auto=format&fit=crop",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/example",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspace features.",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?q=80&w=2669&auto=format&fit=crop",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    demo: "https://example.com",
    github: "https://github.com/example"
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    description: "A comprehensive health and fitness tracking application with visualization and goal-setting features.",
    image: "https://images.unsplash.com/photo-1615859131861-052f0641a60e?q=80&w=2574&auto=format&fit=crop",
    technologies: ["React Native", "GraphQL", "TypeScript", "D3.js"],
    demo: "https://example.com",
    github: "https://github.com/example",
    featured: true
  },
  {
    id: 4,
    title: "Real Estate Marketplace",
    description: "A property listing and search platform with interactive maps and filtering capabilities.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2896&auto=format&fit=crop",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Mapbox"],
    demo: "https://example.com",
    github: "https://github.com/example"
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "An educational platform for creating and managing online courses with student progress tracking.",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=2670&auto=format&fit=crop",
    technologies: ["React", "Express", "MongoDB", "AWS S3"],
    demo: "https://example.com",
    github: "https://github.com/example"
  },
  {
    id: 6,
    title: "AI Image Generator",
    description: "A creative tool that generates unique images based on text prompts using machine learning.",
    image: "https://images.unsplash.com/photo-1655721528985-c491cc2ecb7c?q=80&w=2574&auto=format&fit=crop",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    demo: "https://example.com",
    github: "https://github.com/example",
    featured: true
  }
];


import { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Project, projects } from '@/lib/projectData';

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isInView, setIsInView] = useState(false);
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Featured', value: 'featured' }
  ];

  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredProjects(projects);
    } else if (selectedFilter === 'featured') {
      setFilteredProjects(projects.filter((project) => project.featured));
    }
  }, [selectedFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const showMoreProjects = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="skill-pill inline-block mb-4">Portfolio</span>
          <h2 className="section-heading">My Recent Projects</h2>
          <p className="text-muted-foreground">
            Here are some of my recent work that showcases my skills and experience.
            Each project reflects my ability to solve complex problems and work with different technologies.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-secondary border border-border">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  selectedFilter === filter.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-background/50"
                )}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group rounded-xl overflow-hidden bg-card border border-border transition-all duration-500",
                "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 p-3 flex gap-2 z-20">
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-md">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="skill-pill bg-secondary/70 text-xs px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="skill-pill bg-secondary/70 text-xs px-2 py-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Code
                    <Github className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={showMoreProjects}
              className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium bg-secondary hover:bg-secondary/80 transition-colors"
            >
              Load More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

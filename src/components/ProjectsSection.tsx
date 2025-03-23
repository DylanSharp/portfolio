import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { projects } from '@/lib/projectData';

const ProjectsSection = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(4);
    const [isInView, setIsInView] = useState(false);
    const [expandedTechs, setExpandedTechs] = useState<number[]>([]);
    const [expandedDetails, setExpandedDetails] = useState<number[]>([]);

    const filters = [
        { name: 'All', value: 'all' },
        { name: 'Featured', value: 'featured' }
    ];

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
        setVisibleCount((prev) => Math.min(prev + 3, projects.length));
    };

    const toggleTechsExpanded = (projectId: number) => {
        setExpandedTechs(prev =>
            prev.includes(projectId)
                ? prev.filter(id => id !== projectId)
                : [...prev, projectId]
        );
    };

    const toggleDetailsExpanded = (projectId: number) => {
        setExpandedDetails(prev =>
            prev.includes(projectId)
                ? prev.filter(id => id !== projectId)
                : [...prev, projectId]
        );
    };

    return (
        <section id="projects" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <span className="skill-pill inline-block mb-4">Portfolio</span>
                    <h2 className="section-heading">My Recent Projects</h2>
                    <p className="text-muted-foreground">
                        Here are some of my recent work that showcases my skills and experience.
                        Each project reflects my ability to solve complex problems and work with different technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, visibleCount).map((project, index) => (
                        <div
                            key={project.id}
                            className={cn(
                                "group rounded-xl overflow-hidden bg-card border border-border transition-all duration-500 flex flex-col h-full",
                                "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
                                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 transition-colors group-hover:text-primary">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs text-muted-foreground mb-2 block">{project.dateRange}</span>
                                    <p className="text-muted-foreground text-sm mb-2">
                                        {project.description}
                                    </p>
                                    {project.details && (
                                        <>
                                            <p className={cn(
                                                "text-muted-foreground text-sm mt-2",
                                                !expandedDetails.includes(project.id) && "line-clamp-2"
                                            )}>
                                                {project.details}
                                            </p>
                                            <button 
                                                onClick={() => toggleDetailsExpanded(project.id)}
                                                className="text-primary text-xs mt-2 flex items-center hover:underline"
                                            >
                                                {expandedDetails.includes(project.id) ? (
                                                    <>Read less <ChevronUp className="ml-1 h-3 w-3" /></>
                                                ) : (
                                                    <>Read more <ChevronDown className="ml-1 h-3 w-3" /></>
                                                )}
                                            </button>
                                        </>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-2 my-4">
                                    {(expandedTechs.includes(project.id)
                                        ? project.technologies
                                        : project.technologies.slice(0, 3)).map((tech) => (
                                            <span
                                                key={tech}
                                                className="skill-pill bg-secondary/70 text-xs px-2 py-1"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    {!expandedTechs.includes(project.id) && project.technologies.length > 3 && (
                                        <span
                                            className="skill-pill bg-secondary/70 text-xs px-2 py-1 cursor-pointer hover:bg-secondary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleTechsExpanded(project.id);
                                            }}
                                        >
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="mt-auto pt-2 border-t">
                                    <div className="flex justify-between items-center w-full pt-2" id="project-links">
                                        <div>
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                                >
                                                    Live Demo
                                                    <ExternalLink className="w-4 h-4 ml-1" />
                                                </a>
                                            )}
                                        </div>
                                        
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
                        </div>
                    ))}
                </div>

                {visibleCount < projects.length && (
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

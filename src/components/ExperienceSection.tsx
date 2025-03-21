import {useEffect, useState} from 'react';
import {Award, Briefcase, Calendar, Clock, ExternalLink, GraduationCap, MapPin} from 'lucide-react';
import {cn} from '@/lib/utils';
import {ExperienceItem, experiences} from '@/lib/experienceData';

const ExperienceSection = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [filteredExperiences, setFilteredExperiences] = useState<ExperienceItem[]>(experiences);
    const [isInView, setIsInView] = useState(false);

    const typeIcons = {
        'work': Briefcase,
        'education': GraduationCap,
        'certification': Award,
        'achievement': Award
    };

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredExperiences(experiences);
        } else {
            setFilteredExperiences(
                experiences.filter((exp) => exp.type === activeFilter)
            );
        }
    }, [activeFilter]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsInView(true);
                }
            },
            {threshold: 0.1}
        );

        const section = document.getElementById('experience');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section id="experience">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <span className="skill-pill inline-block mb-4">Experience</span>
                    <h2 className="section-heading">Professional Journey</h2>
                    <p className="text-muted-foreground">
                        My professional path combines industry experience, education, and continuous learning.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div
                        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:transform md:-translate-x-px"/>

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {filteredExperiences.map((exp, index) => {
                            const Icon = typeIcons[exp.type];

                            return (
                                <div
                                    key={exp.id}
                                    className={cn(
                                        "relative flex flex-col md:flex-row md:items-center",
                                        isInView ? "opacity-100" : "opacity-0",
                                        index % 2 === 0
                                            ? "md:flex-row-reverse"
                                            : ""
                                    )}
                                    style={{
                                        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                                        transitionDelay: `${index * 150}ms`,
                                        transform: isInView
                                            ? "translateY(0)"
                                            : index % 2 === 0
                                                ? "translateX(20px)"
                                                : "translateX(-20px)"
                                    }}
                                >
                                    {/* Timeline Node */}
                                    <div
                                        className="absolute left-0 md:left-1/2 -ml-3.5 md:-ml-3.5 md:transform md:-translate-x-1/2 flex items-center justify-center">
                                        <div
                                            className="w-7 h-7 rounded-full bg-primary z-10 flex items-center justify-center text-primary-foreground">
                                            <Icon className="w-3.5 h-3.5"/>
                                        </div>
                                    </div>

                                    {/* Date Section (Left on desktop) */}
                                    <div className={cn(
                                        "pl-10 md:pl-0 md:pr-10 md:w-1/2 mb-4 md:mb-0",
                                        index % 2 === 0 ? "md:pl-10 md:pr-0 md:text-left" : "md:text-right"
                                    )}>
                                        <div
                                            className="text-sm font-medium text-primary flex items-center md:justify-end">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <Clock className="w-4 h-4 mr-1 inline md:hidden"/>
                                                    <span>{exp.startDate} - {exp.endDate}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>{exp.startDate} - {exp.endDate}</span>
                                                    <Clock className="w-4 h-4 ml-1 inline md:hidden"/>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Section (Right on desktop) */}
                                    <div className={cn(
                                        "pl-10 md:w-1/2",
                                        index % 2 === 0 ? "md:pr-10 md:pl-0" : ""
                                    )}>
                                        <div className={cn(
                                            "p-5 bg-secondary/30 border border-border rounded-lg shadow-sm",
                                            "hover:shadow-md hover:bg-secondary/50 transition-all"
                                        )}>
                                            <div className="flex items-start gap-4">
                                                {exp.logo && (
                                                    <img
                                                        src={exp.logo}
                                                        alt={`${exp.organization} logo`}
                                                        className="w-12 h-12 object-contain rounded-md"
                                                    />
                                                )}
                                                <div>
                                                    <h3 className="text-lg font-semibold text-foreground">
                                                        {exp.title}
                                                    </h3>
                                                    <h4 className="text-base font-medium">{exp.organization}</h4>
                                                    <div
                                                        className="flex items-center text-sm text-muted-foreground mb-3 mt-1">
                                                        <MapPin className="w-3.5 h-3.5 mr-1"/>
                                                        {exp.location}
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="space-y-1 mt-3 text-sm text-muted-foreground">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="list-disc ml-4">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            {exp.skills && (
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {exp.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="skill-pill bg-secondary/70 text-xs px-2 py-1"
                                                        >
                              {skill}
                            </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="/dylan_sharp_resume.pdf"
                        download
                        className="inline-flex items-center px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                        <Calendar className="w-4 h-4 mr-2"/>
                        <span className="font-medium">Download Full Resume</span>
                        <ExternalLink className="w-4 h-4 ml-2"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

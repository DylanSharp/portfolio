import { BookOpen, Code, Lightbulb, Users } from 'lucide-react';

const AboutSection = () => {
    const skills = [
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 80 },
        { name: 'React Native', level: 65 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Node.js', level: 65 }
    ];

    const softSkills = [
        { name: 'Problem Solving', icon: Lightbulb },
        { name: 'Communication', icon: Users },
        { name: 'Adaptability', icon: BookOpen },
        { name: 'Leadership', icon: Code }
    ];

    const supplementarySkills = [
        'Django',
        'Flask',
        'Docker',
        'AWS',
        'EC2',
    ];
    return (
        <section id="about" className="">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <span className="skill-pill inline-block mb-4">About Me</span>
                    <h2 className="section-heading">My Background</h2>
                    <p className="text-muted-foreground">
                        Mechanical Engineer turned Software Engineer with 6+ years of experience building web
                        applications
                        that balance beautiful design with optimal performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6 animate-slide-up opacity-0" style={{ animationDelay: "100ms" }}>
                        <div className="glass-container p-6 md:p-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Code className="w-5 h-5 mr-2 text-primary/70" />
                                Professional Journey
                            </h3>
                            <p className="text-muted-foreground">
                                I thrive on learning new things and solving challenging problems. My journey from
                                mechanical engineering
                                to software development has given me a unique perspective on problem-solving and system
                                design.
                            </p>
                        </div>

                        <div className="glass-container p-6 md:p-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Lightbulb className="w-5 h-5 mr-2 text-primary/70" />
                                Personal Life
                            </h3>
                            <p className="text-muted-foreground">
                                I'm married to an amazing woman and father to 2 wonderful boys. When I'm not coding,
                                I spend most of my time with my family and enjoying the outdoors. I absolutely love pineapples on pizza. 🍍🍕
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8 animate-slide-up opacity-0" style={{ animationDelay: "200ms" }}>
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Core Skills</h3>
                            <div className="space-y-4">
                                {skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">{skill.name}</span>
                                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-full"
                                                style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6">Supplementary Skills</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {supplementarySkills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center p-4 rounded-xl bg-secondary/50 border border-border transition-transform hover:scale-105"
                                    >
                                        <Code className="w-5 h-5 text-primary/70 mr-3" />
                                        <span className="text-sm font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div>
                            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {softSkills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="flex items-center p-4 rounded-xl bg-secondary/50 border border-border transition-transform hover:scale-105"
                                        >
                                            <Icon className="w-5 h-5 text-primary/70 mr-3" />
                                            <span className="text-sm font-medium">{skill.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

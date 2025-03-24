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
                                I thrive on learning new things and solving challenging problems. This led me to study mechanical engineering but I later realised that I much preferred building and problem solving with software.
                                <br />
                                <br />
                                I was fortunate to find someone that took a chance on me and gave me the opportunity to learn and grow as a developer when I had no experience. I've never looked back.
                            </p>
                        </div>

                        <div className="glass-container p-6 md:p-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Lightbulb className="w-5 h-5 mr-2 text-primary/70" />
                                Personal Life
                            </h3>
                            <p className="text-muted-foreground">
                                I'm fortunate to have been married to the same amazing woman for 9 years and father to 2 wonderful little boys.
                                <br />
                                <br />
                                When I'm not coding, I spend most of my time with them and enjoying the outdoors. We currently live on a beautiful piece of land surrounded by nature. We have a huge veggie garden
                                <br />
                                <br />
                                I love to build things with software but I also love to build things with my hands. Sometimes it's woodwork other times it's sourdough bread. When something breaks I reach for my toolbox.
                                <br />
                                <br />
                                We love to travel and experience new things. We love a bit of adventure and occassionally some adrenaline.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8 animate-slide-up opacity-0" style={{ animationDelay: "200ms" }}>
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Core Skills</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center p-4 rounded-xl bg-primary/10 border border-border transition-transform hover:scale-105"
                                    >
                                        <Code className="w-5 h-5 text-primary/70 mr-3" />
                                        <span className="text-sm font-medium">{skill.name}</span>
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

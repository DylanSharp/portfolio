import {ArrowDown} from 'lucide-react';
import useTypewriter from '@/hooks/useTypewriter';
import {cn} from '@/lib/utils';

const HeroSection = () => {
    const {displayText, isTyping} = useTypewriter({
        texts: [
            'Full Stack Developer',
            'Problem Solver',
            'Engineer at Heart',
            'Learning Addict',
            'Tech Enthusiast',
            'Serial Tinkerer',
            'Gadget Guru'
        ],
        speed: 100,
        delay: 2000
    });

    return (
        <section
            id="home"
            className="min-h-screen relative flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 dark:from-background dark:via-background dark:to-background/80"/>
                <div
                    className="absolute top-0 right-0 bg-primary/5 dark:bg-primary/10 w-1/2 h-1/2 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"/>
                <div
                    className="absolute bottom-0 left-0 bg-primary/5 dark:bg-primary/10 w-1/2 h-1/2 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"/>
            </div>
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-8 z-10">
                <div
                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/10 shadow-xl animate-fade-in">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10"/>
                    <img
                        src="/assets/profile_photo.jpg"
                        alt="Developer Portrait"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="animate-slide-up space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground">
                        Dylan Sharp
                    </h1>

                    <div className="h-8 md:h-10">
                        <h2 className={cn(
                            "text-xl md:text-2xl font-medium text-primary/90 inline-block",
                            isTyping ? "after:content-['|'] after:ml-1 after:animate-blink after:text-primary" : ""
                        )}>
                            {displayText}
                        </h2>
                    </div>

                    <p className="text-muted-foreground max-w-md mx-auto text-balance">
                        Fullstack Software Engineer with 6+ years of experience building robust and scalable web
                        applications.
                    </p>

                    <div className="flex justify-center space-x-4 mt-8">
                        <a
                            href="/dylan_sharp_resume.pdf"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-slide-up animate-delay-100">
                    <a
                        href="#projects"
                        className="btn-hover px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="btn-hover px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium border border-border"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
                <a href="#about" aria-label="Scroll to About section">
                    <ArrowDown className="h-6 w-6 text-primary/80"/>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;

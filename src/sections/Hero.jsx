import { ArrowRight, Github, Linkedin, Download } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "../components/Button"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"


export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
{/* Background */}
            <div className="absolute inset-0">
                <img src="/hero.jpg" alt="Hero Image" className="w-full h-full object-cover opacity-40"/>
                <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/70 to-background"/>
            </div>
{/* dots */}
            <div className="absolute inset-0 overflow-hidden pointer-none">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="absolute w-1 h-1 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#6f68c4",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                    />
                ))}
            </div>
{/* Content */}
                <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center lg:px-15">
{/* left part (text)*/}
                    <div className="space-y-8 ">
                        <div className="animation-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Software Engineer • Project Manager & FullStack Developer
                            </span>
                        </div>
{/* headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in nimation-delay-100">
                                Bridging <span className="text-primary glow-text">technical </span>
                                <br />execution with 
                                <br />
                                <span className="font-serif italic font-normal text-black">project leadership.</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I’m Laila Dumra. I am a software engineer 
                                with experience in full-stack development and 
                                project coordination, focused on delivering high-quality, 
                                maintainable software.
                            </p>
                        </div>
{/* call to action buttons */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 ">
                            <Button size="md" onClick={() =>document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                                Get in Touch <ArrowRight className="w-5 h-5"/>
                            </Button>
                            
                            <AnimatedBorderButton href="/Laila_Dumra_CV.pdf" download="Laila_Dumra_CV.pdf"> 
                                <Download /> Download CV
                            </AnimatedBorderButton>
                        </div>
{/* socila links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Let’s Connect: </span>
                            {[{icon: Github, href: "https://github.com/lailaDumra"},
                            {icon: Linkedin, href: "https://www.linkedin.com/in/lailadumra/"},
                            {icon: FaWhatsapp,  href: "https://wa.me/962798593124"}
                            ].map((socila, index) => (
                                <a key={index} href={socila.href}className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transiktion-all duration-300">
                                    {<socila.icon className="w-5 h-5"/>}
                                </a>
                            ))}
                        </div>
                    </div>
{/* right part (image) */}
                        <div className="relative animate-fade-in animation-delay-300">

                            <div className="relative max-w-md mx-auto">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 blur-2xl animate-pulse"/>
                                <div className="relative glass rounded-3xl p-2 glow-border">
                                    <img src="/profile_img.png" alt="Laila Dumra" className="w-full aspect-[4/5] object-cover rounded-2xl"/>

                                    <div className=" absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                        <div className=" flex items-center gap-3">
                                            <div className="w-3 h-3 bg-green-700 rounded-full animate-pulse"/>
                                                <span className="text-sm font-medium">
                                                    Available for work
                                                </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
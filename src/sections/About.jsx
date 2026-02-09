import { GraduationCap, Globe, Target, Heart } from "lucide-react"


const highlites = [
    {
    icon: GraduationCap,
    title: "Education",
    description:
        "Bachelor's Degree in Software Engineering."
    },
    {
    icon: Globe,
    title: "Languages",
    description:
        "Arabic (Native), English (Fluent)."
    },
    {
    icon: Target,
    title: "Career Goals",
    description:
        "Seeking roles in tech leadership, project management, or full-stack development."
    },
    {
    icon: Heart,
    title: "Location",
    description:
        "Amman, Jordan (Open to relocate)."
    }

]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center lg:px-15">
{/* left part */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className=" text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
                            Where engineering execution,
                            <span className=" font-serif italic font-normal text-black"> meets structured project leadership.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I’m a Software Engineer and Project Manager with 
                                experience delivering software in fast-paced, real-world environments. 
                                My work sits at the intersection of engineering execution, 
                                structured planning, and team collaboration, 
                                allowing me to contribute both technically and operationally.
                            </p>
                            <p>
                                I’ve worked with modern web technologies including Angular, Ionic, PHP, Java, and Spring Boot, 
                                developing scalable applications while following clean architecture and maintainability best practices. 
                                Alongside development, I actively contribute to sprint planning, documentation, QA verification, 
                                and delivery tracking, ensuring that projects stay aligned with both technical and business goals.
                            </p>
                            <p>
                                My background in project coordination has strengthened my ability to communicate clearly across technical 
                                and non-technical teams, manage priorities, and take ownership of outcomes. 
                                Whether leading a student initiative, contributing to a commercial product, 
                                or presenting a project on an international stage, I focus on delivering work that is reliable, 
                                structured, and impactful.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 ">
                            <p className="text-lg font-medium italic text-foreground">
                                My mission is to deliver well-engineered software through 
                                clear planning, strong collaboration, and purposeful execution.
                            </p>
                        </div>
                    </div>
{/* right part */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlites.map((item, Index) => (
                                <div key={Index} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(Index + 1) * 100}ms`}}>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                        <item.icon  className="h-6 w-6 text-primary"/>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </section>
    )
}
import { ArrowRight, ArrowUpRight, Github } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"


const projects = [
    {
        title: "SheTravels",
        description: "A community-focused web platform connecting women through safe, organized travel experiences, built with a modern, responsive, component-based frontend.",
        image: "/shetravels.png",
        tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
        link: "https://shetravel.vercel.app/",
        github:"https://github.com/lailaDumra/shetravels.git"
    },
    {
        title: "SOLA (Static Online Analyzer)",
        description: "An award-winning static code analysis tool that detects code smells and improves software quality through structured analysis and actionable insights.",
        image: "sola2.png",
        tags: ["Java", "Spring Boot", "Static Code Analysis", "Agile"],
        link: "",
        github:"https://github.com/lailaDumra/solapro.git"
    },
    {
        title: "MerathArt",
        description: "A full-featured e-commerce platform with an administrative dashboard for managing products, orders, and content in a commercial environment.",
        image: "merathar.jpg",
        tags: ["Bootstrap", "Laravel", "PHP", "MySQL", "MVC"],
        link: "",
        github:"https://github.com/lailaDumra/MerathArt/"
    }

]

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relative z-10">
{/* header */}
                    <div className=" text-center mx-auto max-w-3xl mb-16">
                        <span className=" text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">My Projects</span>
                        <h2 className=" text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in animate-delay-100 text-primary">
                            Real world software, 
                            <span className="font-serif italic font-normal text-black"> thoughtfully built</span>
                        </h2>
                        <p className=" text-muted-foreground animate-fade-in animation-delay-200">
                            This is a selection of my work that highlights my experience in building, coordinating, and delivering real-world software projects.
                        </p>
                    </div>
{/* projects table */}
                    <div className=" grid md:grid-cols-2 gap-8 ">
                        {projects.map((project, Index) => (
                            <div key={Index} className=" group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(Index + 1) * 100}ms`}}>
                                <div className=" relative overflow-hidden aspect-video">
                                    <img src={project.image} alt={project.title} className=" w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"/>
                                    <div className=" absolute inset-0 bg-gradient-to-t from-card/50 via-card/10 to-transparent opacity-60"/>
                                        <div className=" absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {/* the only live link i have is for the first pro so i will put this condition */}
                                            {Index === 0 && project.link && ( 
                                            <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                                <ArrowUpRight className=" w-5 h-5"/>
                                            </a>
                                            )}
                                            <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                                <Github className=" w-5 h-5"/>
                                            </a>
                                        </div>
                                </div>
                                <div className=" p-6 space-y-4">
                                    <div className=" flex items-start justify-between">
                                        <h3 className=" text-xl font-semibold group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight className=" w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                                    </div>
                                    <p className=" text-muted-foreground text-sm">
                                        {project.description}
                                    </p>
                                    <div className=" flex flex-wrap gap-2">
                                        {project.tags.map((tags, tagIndex)=>(
                                            <span key={tagIndex} className=" px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 ">{tags}</span>
                                        ))}
                                    </div>
                                </div>
                        </div>
                        ))}
                    </div>
{/* view more call to action */}
                                        <div className=" text-center mt-12 animate-fade-in animation-delay-500">
                                            <p className=" mb-5 text-muted-foreground text-sm">
                                                Explore more experiments and side projects on GitHub
                                            </p>
                                            <AnimatedBorderButton  onClick={() => window.open("https://github.com/lailaDumra", "_blank")}>
                                                My GitHub <ArrowUpRight className="w-5 h-5" />
                                            </AnimatedBorderButton>
                                        </div>
                </div>
        </section>
    )
}
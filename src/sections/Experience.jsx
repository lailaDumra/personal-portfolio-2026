

const experiences =[
    {
        period:"Jul 2025 - Present",
        role:"Technical Support Specialist",
        company:"KamaGames",
        description:"Deliver technical support by troubleshooting application-level issues, reproducing bugs, and collaborating with engineering teams to ensure timely resolution and improved system reliability.",
        current:true
    },
    {
    period: "2024 - Present",
    role: "Freelance Software Engineer",
    company: "Self-Employed",
    description:"Working with clients on web and mobile applications, delivering scalable frontend solutions using Angular, Ionic, and modern UI practices.",
    current: true,
    type: "freelance"
    },
    {
        period:"Aug 2024 - Aug 2025",
        role:"SoftWare Engineer",
        company:"BH Hub",
        description:"Led Angular & Ionic development projects, collaborated with clients and sales teams, and ensured quality through manual testing and QA processes.",
        current:false
    },
    {
        period:"Jun 2022 - Jul 2023",
        role:"Telemarketer & Customer Service Specialist",
        company:"CSC beyond",
        description:"Provided excellent customer service and handled telemarketing operations, developing strong communication and interpersonal skills.",
        current:false
    },
    
]

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className=" absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
                <div className="container mx-auto px-6 lg:px-15 relative z-10">
{/* header */}
                    <div className=" max-w-3xl mb-16">
                        <span className=" text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">My Career Journy</span>
                        <h2 className=" text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in animate-delay-100 text-primary">
                            Experience proven, 
                            <span className="font-serif italic font-normal text-black"> through real environments</span>
                        </h2>
                        <p className=" text-muted-foreground animate-fade-in animation-delay-200">
                            This is a timeline of my professional journey, from hands-on development to technical leadership.
                        </p>
                    </div>
{/* timeline */}
                    <div className=" relative">
                        <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
{/* experiences sequance */}
                        <div className=" space-y-12">
                            {experiences.map((xp, Index) => (
                                <div key={Index} className=" relative grid md:grid-cols-2 gap-2 animate-fade-in"  style={{animationDelay: `${(Index + 1) * 100}ms`}}>
{/* timeline dots */}
                                    <div className=" absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {xp.current && (<span className=" absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)}
                                    </div>
{/* content */}     
                                    <div className={`pl-8 md:pl-0 ${Index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                        <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                            <span className=" text-sm text-primary font-medium">{xp.period}</span>
                                            <h3 className=" text-xl font-semibold mt-2">{xp.role}</h3>
                                            <p className=" text-muted-foreground">{xp.company}</p>
                                            <p className=" text-sm text-muted-foreground mt-4">{xp.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    )
}
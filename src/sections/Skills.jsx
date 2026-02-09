import { Code, Layers, Wrench } from "lucide-react";

const skillGroups = [
    {
        title: "Development",
        icon: Code,
        skills: [
        "JavaScript / TypeScript",
        "React",
        "Angular & Ionic",
        "PHP & Laravel",
        "Java & Spring Boot",
        "HTML, CSS",
        "REST APIs",
        "Clean Code & Refactoring",
        ],
    },
    {
        title: "Project Coordination",
        icon: Layers,
        skills: [
        "Agile & SCRUM",
        "Sprint Planning & Task Breakdown",
        "Project Coordination",
        "Technical Documentation",
        "Cross-Team Communication",
        "Quality Assurance & Manual Testing",
        "Risk & Scope Management",
        ],
    },
    {
        title: "Tools & Platforms",
        icon: Wrench,
        skills: [
        "Git & GitHub",
        "Jira",
        "Trello",
        "MySQL & SQL",
        "Firebase",
        "Bootstrap",
        ],
    },
    ];

    export const Skills = () => {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">
        {/* background accents */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
            {/* header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                My Skills
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
                <span className="font-serif italic font-normal">
                What I bring to the table
                </span>
            </h2>

            <p className="mt-4 text-muted-foreground animate-fade-in animation-delay-200">
                A balanced mix of engineering, product thinking, and delivery skills
                shaped by hands-on project work.
            </p>
            </div>

            {/* skills grid */}
            <div className="grid md:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => {
                const Icon = group.icon;

                return (
                <div
                    key={index}
                    className="glass p-6 rounded-2xl animate-fade-in transition-transform "
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                    {/* icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* title */}
                    <h3 className="text-lg font-semibold mb-3">
                    {group.title}
                    </h3>

                    {/* skills */}
                    <ul className="space-y-2 text-sm text-muted-foreground">
                    {group.skills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{skill}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                );
            })}
            </div>
        </div>
        </section>
    );
    };

import { Trophy, Globe, Lightbulb, Rocket, Award, Star, Section } from 'lucide-react';


const achievements = [
  {
    id: 1,
    title: "Leadership Hackathon Winner",
    description: "Won first place in a national leadership and innovation hackathon in Jordan, demonstrating technical excellence and team leadership.",
    icon: Trophy,
    color: "bg-gold",
    location: "Jordan",
    year: "2024",
  },
  {
    id: 2,
    title: "Future Solve Hackathon - 1st Place",
    description: "Achieved first place in an international hackathon competing against participants from 9 different countries with an innovative software solution.",
    icon: Globe,
    color: "bg-navy",
    location: "International (9 Countries)",
    year: "2024",
  },
  {
    id: 3,
    title: "Falling Walls Lab Jordan - 5th Place",
    description: "Secured 5th place in the prestigious Falling Walls Lab competition, presenting innovative ideas to break down walls in science and society.",
    icon: Lightbulb,
    color: "bg-gold",
    location: "Jordan",
    year: "2024",
  },
  {
    id: 4,
    title: "6-Month Incubation Program",
    description: "Selected for a 6-month incubation program sponsored by the Ministry of Digital Economy, receiving mentorship and resources to develop tech solutions.",
    icon: Rocket,
    color: "bg-navy",
    location: "Ministry of Digital Economy",
    year: "2024",
  },
];

export const Achievements = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relative z-10">
{/* header */}
                    <div className=" text-center mx-auto max-w-3xl mb-16">
                        <span className=" text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Achievements & Awards</span>
                        <h2 className=" text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in animate-delay-100 text-primary">
                            Built with purpose, 
                            <span className="font-serif italic font-normal text-black"> recognized for impact</span>
                        </h2>
                        <p className=" text-muted-foreground animate-fade-in animation-delay-200">
                            Milestones that reflect my dedication to excellence and innovation.
                        </p>
                    </div>
  <div className=" grid md:grid-cols-2 gap-8 ">
  {achievements.map((achievement, Index) => {
    const Icon = achievement.icon;

    return (
      <div
        key={achievement.id}
        className="glass p-6 rounded-2xl animate-fade-in"
        style={{ animationDelay: `${(Index + 1) * 100}ms` }}
      >
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2">
          {achievement.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">
          {achievement.description}
        </p>

        {/* Meta (subtle, optional but clean) */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Award className="w-3 h-3" />
            {achievement.location}
          </span>
          <span>• {achievement.year}</span>
        </div>
      </div>
    );
  })}
</div>

      </div>
      </section>
      )
      }
      
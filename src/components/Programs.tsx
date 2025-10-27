import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import judoIcon from "@/assets/judo-icon.png";
import karateIcon from "@/assets/karate-icon.png";
import taekwondoIcon from "@/assets/taekwondo-icon.png";

const programs = [
  {
    icon: judoIcon,
    title: "Judo",
    description: "Master the art of throwing and grappling with Olympic-standard training programs.",
    features: [
      "Olympic-level coaching",
      "International competition prep",
      "Belt progression system",
      "Physical conditioning",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: karateIcon,
    title: "Karate",
    description: "Develop precision, power, and mental discipline through traditional and sport karate.",
    features: [
      "Kata & Kumite training",
      "Championship preparation",
      "Self-defense techniques",
      "Mental discipline",
    ],
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: taekwondoIcon,
    title: "Taekwondo",
    description: "Experience dynamic kicking techniques and competitive sparring in a world-class environment.",
    features: [
      "Olympic sparring",
      "Poomsae excellence",
      "Flexibility training",
      "Tournament coaching",
    ],
    color: "from-primary/20 to-primary/5",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            World-class training in three Olympic martial arts disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-zoom-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-48 bg-gradient-to-br ${program.color} flex items-center justify-center p-8`}>
                <img
                  src={program.icon}
                  alt={`${program.title} icon`}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Inclusive Training for All</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            We welcome athletes of all abilities, including specially-abled individuals. Our programs are 
            designed to accommodate different skill levels and physical requirements, ensuring everyone 
            can pursue excellence in martial arts.
          </p>
          <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Join Our Academy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;

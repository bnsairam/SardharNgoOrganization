import { Award, Users, Trophy, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    value: "150+",
    label: "Athletes",
    description: "Training across India",
  },
  {
    icon: Trophy,
    value: "50+",
    label: "Medals",
    description: "National & International",
  },
  {
    icon: Target,
    value: "18",
    label: "States",
    description: "Pan-India presence",
  },
  {
    icon: Award,
    value: "2023",
    label: "Rashtriya Award",
    description: "Khel Protsahan Puruskar",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">SVP Academy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's premier martial arts training institute dedicated to developing world-class athletes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sardar Vallabhbhai Patel Academy is committed to nurturing martial arts talent across India. 
              We provide world-class training facilities and expert coaching to athletes from all backgrounds, 
              including specially-abled individuals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our comprehensive programs in Judo, Karate, and Taekwondo have produced numerous national and 
              international champions, making us a cornerstone of Indian sports development.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become India's leading martial arts institution, creating Olympic-level athletes and 
              promoting the values of discipline, respect, and excellence in sports.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a future where Indian martial artists dominate international competitions, 
              bringing glory to the nation while inspiring the next generation of champions.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-zoom-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

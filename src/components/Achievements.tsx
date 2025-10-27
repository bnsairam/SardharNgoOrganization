import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: Award,
    year: "2023",
    title: "Rashtriya Khel Protsahan Puruskar",
    description: "Awarded by the President of India for outstanding contribution to sports development",
    color: "text-primary",
  },
  {
    icon: Trophy,
    year: "2022-23",
    title: "National Champions",
    description: "Multiple gold medals in National Judo, Karate, and Taekwondo Championships",
    color: "text-secondary",
  },
  {
    icon: Medal,
    year: "2021",
    title: "International Recognition",
    description: "Athletes represented India at Asian Championships and World Cups",
    color: "text-primary",
  },
  {
    icon: Star,
    year: "Ongoing",
    title: "Paralympic Excellence",
    description: "Leading institution in training para-athletes in martial arts",
    color: "text-secondary",
  },
];

const highlights = [
  "150+ athletes training across 18 Indian states",
  "50+ national and international medals",
  "Olympic-standard training facilities",
  "Expert coaching team with international experience",
  "Comprehensive support for para-athletes",
  "Regular participation in international tournaments",
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognized excellence in developing India's martial arts champions
          </p>
        </div>

        {/* Major Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-full bg-muted ${achievement.color}`}>
                  <achievement.icon size={32} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-primary mb-1">{achievement.year}</div>
                  <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Key Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-lg">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Banner */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary to-secondary text-white">
            <h3 className="text-3xl font-bold mb-4">Nationally Recognized Excellence</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The only academy in India to receive the prestigious Rashtriya Khel Protsahan Puruskar 
              for inclusive sports development and producing world-class martial artists.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

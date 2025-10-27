import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Users, Trophy, GraduationCap, Zap, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const donationAmounts = [500, 1000, 2500, 5000, 10000];

const impactAreas = [
  {
    icon: Users,
    title: "Training Equipment",
    description: "Provide world-class training gear for 10 athletes",
    amount: "₹5,000",
  },
  {
    icon: Trophy,
    title: "Competition Support",
    description: "Sponsor an athlete for national tournaments",
    amount: "₹10,000",
  },
  {
    icon: GraduationCap,
    title: "Coaching Excellence",
    description: "Fund advanced coaching sessions for 3 months",
    amount: "₹25,000",
  },
  {
    icon: Shield,
    title: "Para-Athlete Program",
    description: "Support inclusive training for specially-abled athletes",
    amount: "₹50,000",
  },
];

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    if (!amount) {
      toast.error("Please select or enter a donation amount");
      return;
    }
    toast.success(`Thank you for your generous donation of ₹${amount}! Redirecting to payment...`);
    // Payment integration would go here
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
            <Heart className="w-10 h-10 text-primary" fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Support Our <span className="text-primary">Mission</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Your contribution helps us train the next generation of Olympic champions and provide 
            opportunities to athletes from all backgrounds
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Donation Form */}
          <Card className="p-8 md:p-12 shadow-2xl animate-fade-in">
            <h3 className="text-3xl font-bold mb-6">Make a Difference Today</h3>
            
            {/* Quick Amount Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-4 text-muted-foreground">
                Select Amount
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${
                      selectedAmount === amount
                        ? "border-primary bg-primary text-white shadow-lg scale-105"
                        : "border-border hover:border-primary hover:bg-primary/5"
                    }`}
                  >
                    ₹{amount.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label htmlFor="custom-amount" className="block text-sm font-semibold mb-3 text-muted-foreground">
                Or Enter Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold">₹</span>
                <Input
                  id="custom-amount"
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Enter amount"
                  className="pl-8 h-14 text-lg"
                />
              </div>
            </div>

            {/* Donate Button */}
            <Button 
              size="lg" 
              className="w-full h-14 text-lg font-bold shadow-lg hover:shadow-xl"
              onClick={handleDonate}
            >
              <Heart className="mr-2" size={20} fill="currentColor" />
              Donate Now
            </Button>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Tax Benefits</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Impact Areas */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Your Impact</h3>
            {impactAreas.map((area, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold">{area.title}</h4>
                      <span className="text-lg font-bold text-primary">{area.amount}</span>
                    </div>
                    <p className="text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Banner */}
        <Card className="p-8 md:p-12 bg-gradient-to-r from-primary to-secondary text-white text-center animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Together We've Achieved So Much
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">₹50L+</div>
              <div className="text-lg opacity-90">Raised This Year</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Donors</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Athletes Supported</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Medals Won</div>
            </div>
          </div>
        </Card>

        {/* Tax Benefits Info */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Tax Benefits:</strong> Donations to Sardar Vallabhbhai Patel Academy 
            are eligible for 80G tax deduction under Income Tax Act. You'll receive an official donation receipt 
            for tax purposes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donation;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Sardar Vallabhai Patel Sports Academy", "No 29, Canal Street, Triplicane, Chennai - 600005"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 95439 99042"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["svpsportsacademy@gmail.com"],
  },
  {
    icon: Clock,
    title: "Training Hours",
    details: ["Mon-Sat: 6:00 AM - 8:00 PM", "Sunday: 7:00 AM - 2:00 PM"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the academy or contact us for training & development programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest…"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Right Section */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}

            {/* GOOGLE MAP */}
            <Card className="p-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.614181067454!2d80.2801!3d13.0607..."
                className="w-full h-72 rounded"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
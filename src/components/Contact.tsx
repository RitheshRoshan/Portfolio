import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ritheshroshanr@gmail.com",
      href: "mailto:ritheshroshanr@gmail.com",
      color: "neon-cyan"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/RitheshRoshan",
      href: "https://github.com/RitheshRoshan",
      color: "neon-cyan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rithesh-roshan-r",
      href: "https://www.linkedin.com/in/rithesh-roshan-r-163276224/",
      color: "neon-purple"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );

  // Gmail compose URL
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ritheshroshanr@gmail.com&su=${subject}&body=${body}`;

  // Open Gmail in new tab
  window.open(gmailLink, "_blank");

  // Show toast
  toast({
    title: "Redirecting to Gmail",
    description: "A new tab has opened with your message ready to send.",
  });

  // Reset form
  setFormData({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
};
  return (
    <section id="contact" className="py-20 px-6 bg-card/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={info.label}
                    className="bg-card/80 border-border hover:border-neon-cyan/30 hover:shadow-lg transition-all duration-300 group animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group-hover:text-neon-cyan transition-colors"
                      >
                        <div className={`p-3 bg-gradient-primary rounded-lg group-hover:animate-glow`}>
                          <Icon className="h-5 w-5 text-background" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                            {info.label}
                          </p>
                          <p className="text-lg font-medium">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <MapPin className="h-5 w-5 text-neon-purple" />
              <span>Hosur, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/80 border-border hover:border-neon-purple/30 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-neon-purple">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-neon-cyan focus:ring-neon-cyan/20"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-neon-cyan focus:ring-neon-cyan/20"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-neon-purple focus:ring-neon-purple/20"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border focus:border-neon-cyan focus:ring-neon-cyan/20 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-neon-cyan/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 p-4 bg-muted/20 rounded-lg border border-border/50">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="text-neon-cyan">💡 Quick Response:</span> I typically respond within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
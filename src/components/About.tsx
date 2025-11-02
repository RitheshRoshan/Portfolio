import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Lightbulb, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const cardMotion = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Experienced in building scalable web applications and RESTful APIs"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Passionate about delivering efficient, optimized solutions"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Eager to contribute to dynamic software development teams"
    }
  ];

  const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  }

  return (
    <section id="about" className="py-20 px-6">
      <motion.div
        className="container mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div className="space-y-6" variants={fadeUp}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-neon-cyan font-semibold">Full Stack Developer</span> skilled in 
              React, Node.js, MongoDB, and Angular. With experience in building scalable web apps and RESTful APIs, 
              I focus on delivering efficient, user-centric solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through various projects and internships, I've gained hands-on experience in 
              <span className="text-neon-purple font-semibold"> frontend development</span>, 
              <span className="text-neon-cyan font-semibold"> backend architecture</span>, and 
              <span className="text-neon-purple font-semibold"> database design</span>. 
              I'm eager to contribute to dynamic software development teams and continue growing in this ever-evolving field.
            </p>
          </motion.div>

          {/* Highlights Cards */}
          <div className="space-y-6 relative" style={{ animationDelay: "0.2s" }}>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div variants={cardMotion} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} key={highlight.title}>
                  <Card 
                    className="bg-card/50 border-border hover:border-neon-cyan/30 hover:shadow-lg transition-all duration-300 group animate-scale-in"
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-primary rounded-lg group-hover:animate-glow">
                          <Icon className="h-6 w-6 text-background" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
                            {highlight.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
            <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-gradient-to-br from-neon-purple to-neon-cyan"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
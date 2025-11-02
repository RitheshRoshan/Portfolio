import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/RitheshRoshan",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rithesh-roshan-r-163276224/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:ritheshroshanr@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative bg-card/30 border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-neon-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold font-mono mb-2">
              <span className="text-foreground">&lt;RitheshRoshan</span>
              <span className="text-neon-purple animate-pulse"> /&gt;</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:border-neon-cyan hover:shadow-neon-cyan/30 hover:shadow-lg transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4 group-hover:text-neon-cyan transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 group"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Rithesh Roshan R. Made with 
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            and lots of ☕
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
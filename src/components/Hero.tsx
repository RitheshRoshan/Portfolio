import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Database, GitBranch, Globe, Lightbulb, MousePointerClickIcon, MoveRight, Server, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import image6 from '@/assets/law-3.jpg';
import image2 from '@/assets/react-2.jpg';
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Reports Dashboard",
    description: " Built a dynamic and interactive dashboard to view sales and reports using React.js.",
    images: [image2],
    technologies: ["React", "Hooks", "RESTful APIs", "State Management"],
    // live: "#",
    featured: true
  },
  {
    title: "LawBoard",
    description: "Built a web platform for advocates to manage clients and cases efficiently.",
    images: [image6],
    technologies: ["React", "Node.js", "RESTful APIs", "Client Management"],
    github: "https://github.com/RitheshRoshan",
    live: "https://law-board.onrender.com/",
    featured: true
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardMotion = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend",
      skills: ["React", "Angular", "JavaScript", "HTML/CSS", "TypeScript"],
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "REST APIs", "Authentication"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      icon: GitBranch,
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Postman", "Agile", "CI/CD"],
    },
  ];

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

  return (
    <><section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">

      {/* Starfield Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(60,60,120,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
        <div className="absolute inset-0">
          {Array.from({ length: 120 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -4, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }} />
          ))}
        </div>
      </div>

      {/* Planet Arc Glow */}
      <div className="absolute bottom-[200vh] left-1/2 -translate-x-1/2 w-[900vh] h-[900vh] rounded-full pointer-events-none overflow-hidden">
        <div
          className="w-full h-full rounded-full border-[5px] border-transparent"
          style={{
            borderImage: "linear-gradient(to top, rgba(251, 163, 163, 0.78), rgba(255, 255, 255, 0.42)) 1",
            maskImage: "radial-gradient(square at center, transparent 45%, black 75%)",
          }}
        ></div>

        {/* Soft Glow Bloom */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(150,150,255,0.4),transparent_70%)] blur-[120px] opacity-60"></div>
      </div>

      {/* Horizon Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250%] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(200,200,255,0.25),transparent_80%)] blur-[120px] opacity-80" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-6 px-4 py-2 text-sm rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md animate-float"
      >
        🟢 Open for Opportunities
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl md:text-7xl font-serif text-white tracking-tight animate-float"
      >
        Hey, I'm <span className="italic text-white/90">Rithesh.</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-6 max-w-2xl text-base md:text-lg text-neutral-400 animate-float"
      >
        Full-stack oriented Software Engineer experienced in developing modern front-end interfaces and high-performing backend
        systems
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex gap-4 mt-10"
      >
        <Button
          size="lg"
          className="rounded-full bg-white/10 text-white border border-white/20 px-8 py-6 hover:bg-white/20 transition animate-float"
          onClick={() => window.open("https://drive.google.com/file/d/1Ea5YYU8Yvs5Zq_dK_75BDf22tWAUQugz/view?usp=sharing", "_blank")}
        >
          Resume <MousePointerClickIcon />
        </Button>
      </motion.div>

      {/* Floating Spark Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[6px] h-[6px] rounded-full bg-white/40 blur-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }} />
        ))}
      </div>
    </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center mb-16">
          <p className="text-text-low tracking-widest text-sm mb-3">+ ABOUT ME +</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-high">
            A Little About Me
          </h2>
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

              );
            })}
            <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-gradient-to-br from-neon-purple to-neon-cyan"></div>
          </div>
          <div className="container mx-auto max-w-7xl text-center">
            <p className="text-text-low tracking-widest text-sm mb-3">+ PROJECTS +</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-high">
              What I’ve been up to
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 px-48"
            >
              <Button
                size="lg"
                className="rounded-full bg-white/10 text-white border border-white/20 px-8 py-6 hover:bg-white/20 transition animate-float"
                onClick={() => navigate("/projects")}
              >
                See More <MoveRight />
              </Button>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <a
                key={project.title}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative w-full h-72 md:h-80 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-100 transition-transform duration-[900ms] ease-out"
                  />

                  {/* Soft Fade Bottom Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent pointer-events-none" />
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-sm text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section><section id="skills" className="py-24 px-6 relative overflow-hidden">
        <div className="container  max-w-10xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-text-low tracking-widest text-sm mb-3">+ SKILLS & TOOLS +</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-high">
              Technologies I work with
            </h2>
          </motion.div>

          <div
            className="overflow-hidden py-6 group"
            onMouseMove={(e) => {
              const inner = e.currentTarget.querySelector('.marquee-inner') as HTMLElement | null;
              if (inner) {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const shift = (x - 0.5) * 20; // soft parallax shift
                inner.style.transform = `translateX(${shift}px)`;
              }
            }}
            onMouseLeave={(e) => {
              const inner = e.currentTarget.querySelector('.marquee-inner') as HTMLElement | null;
              if (inner) {
                inner.style.transform = `translateX(0px)`;
              }
            }}
          >
            <div className="marquee-inner inline-flex items-center gap-12 animate-marquee whitespace-nowrap min-w-max">
              {skillCategories.flatMap(({ icon: Icon, skills }) =>
                skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex-none flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-neon-purple/40 transition"
                  >
                    <Icon className="w-5 h-5 text-neon-purple" />
                    <span className="text-white">{skill}</span>
                  </div>
                ))
              )}
              {skillCategories.flatMap(({ icon: Icon, skills }) =>
                skills.map((skill) => (
                  <div
                    key={skill + "-clone"}
                    className="flex-none flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-neon-purple/40 transition"
                  >
                    <Icon className="w-5 h-5 text-neon-purple" />
                    <span className="text-white">{skill}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section></>
  );
};

export default Hero;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, GraduationCap, BookOpen, Award, Calendar, MapPin, Building } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import image1 from '@/assets/react-1.jpg';
import image2 from '@/assets/react-2.jpg';
import image3 from '@/assets/react-3.jpg';
import image4 from '@/assets/puck-1.jpg';
import image5 from '@/assets/puck-2.jpg';
import image6 from '@/assets/law-3.jpg';
import image7 from '@/assets/law-1.jpg';
import image8 from '@/assets/law-2.jpg';
import image9 from '@/assets/DE.jpg';
import image10 from '@/assets/inventory.jpg';
import image11 from '@/assets/nourisho.jpg';

const projects = [
  {
    title: "Reports Dashboard",
    description: " Built a dynamic and interactive dashboard to view sales and reports using React.js.",
    images: [image2, image1, image3],
    technologies: ["React", "Hooks", "RESTful APIs", "State Management"],
    // live: "#",
    featured: true
  },
  {
    title: "Delivery Partner",
    description: "Developed and optimized backend APIs enabling seamless delivery partner rate cards, incentive and bonus.",
    images: [image9],
    technologies: ["Node.js", "MongoDB", "REST APIs"],
    featured: true
  },
  {
    title: "Nourisho – Organic Marketplace",
    description:
      "Designed product availability logic, pricing workflows, and dynamic inventory loading based on nearby satellite stores.",
    images: [image11],
    technologies: [
      "Node.js",
      "MongoDB"
    ],
    live: "nourisho.com", // add if deployed
    featured: true
  },
  {
    title: "Inventory",
    description: "Implemented real-time stock and GRN processing with accurate inventory adjustments.",
    images: [image10],
    technologies: ["Node.js", "MongoDB", "REST APIs", "Data Validation", "Error Handling"],
    featured: true
  },
  {
    title: "Createio",
    description: "Developed a website for creators to showcase their work and build their personal branding.",
    images: [image4, image5],
    technologies: ["React", "Tailwind CSS", "Responsive Design", "Component Architecture"],
    github: "https://github.com/RitheshRoshan",
    // live: "#",
    featured: true
  },
  {
    title: "LawBoard",
    description: "Built a web platform for advocates to manage clients and cases efficiently.",
    images: [image6, image7, image8],
    technologies: ["React", "Node.js", "RESTful APIs", "Client Management"],
    github: "https://github.com/RitheshRoshan",
    live: "https://law-board.onrender.com/",
    featured: true
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company: "Cloudify Technologies",
    location: "On-site",
    period: "June 2024 – Present",
    type: "Full-time",
    responsibilities: [
      "Develop and maintain dynamic web applications using Angular for seamless frontend development",
      "Build scalable backend services with Node.js, implementing RESTful APIs and robust business logic",
      "Built a dynamic and interactive dashboard using React.js, implementing reusable components and state management",
      "Integrated RESTful APIs to display real-time data and ensured optimal rendering performance across devices"
    ],
    current: true
  },
  {
    title: "Full Stack Intern",
    company: "Cloudify Technologies",
    location: "On-site",
    period: "Feb 2024 – Apr 2024",
    type: "Internship",
    responsibilities: [
      "Develop and maintain dynamic web applications using Angular for seamless frontend development",
      "Integrated RESTful APIs to display real-time data and ensured optimal rendering performance across devices"
    ],
    current: false
  },
  {
    title: "Web Development Intern",
    company: "Nexus Info",
    location: "Remote",
    period: "2024",
    type: "Internship",
    responsibilities: [
      "Completed a three-month internship gaining hands-on experience in Web Development",
      "Worked on frontend development projects using modern web technologies",
      "Collaborated with development team to deliver high-quality web solutions"
    ],
    current: false
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Pantech Solutions",
    location: "Remote",
    period: "2023",
    type: "Internship",
    responsibilities: [
      "Completed a one-month internship exploring Artificial Intelligence concepts",
      "Gained practical experience in AI/ML technologies and applications",
      "Worked on AI-based projects and learned industry best practices"
    ],
    current: false
  },
  {
    title: "Java Development Intern",
    company: "Amsteel Castings Pvt Ltd",
    location: "On-site",
    period: "2022",
    type: "Internship",
    responsibilities: [
      "Completed a one-week implant training focusing on Java Servlets",
      "Gained foundational knowledge in enterprise Java development",
      "Learned backend development principles and server-side programming"
    ],
    current: false
  }
];

const achievements = [
  {
    title: "Second Place Winner",
    event: "KGI Cybercrats Hackathon-2K23",
    organization: "Krishnagiri Cyber Wing",
    year: "2023",
    description: "Secured second place in prestigious cybersecurity hackathon"
  },
  {
    title: "Cloud Computing Certification",
    event: "Cloud Computing Practitioner Essentials",
    organization: "Coursera",
    year: "2022",
    description: "Certified in cloud computing fundamentals and best practices"
  },
  {
    title: "Research Paper Presentation",
    event: "NLP for Tamil using CRF-BERT",
    organization: "Kanitamil24 Conference, Tamil Virtual Academy",
    year: "Feb 2024",
    description: "Presented research paper on Natural Language Processing for Tamil language"
  }
];

const educationData = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Adhiyamaan College of Engineering, Hosur",
    period: "2020 – 2024",
    grade: "CGPA: 8.89",
    level: "undergraduate",
    description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and system design.",
    highlights: [
      "Strong foundation in programming languages",
      "Software development methodologies",
      "Database management systems",
      "Computer networks and security"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sri Vijay Vidyalaya, Hosur",
    period: "2020",
    grade: "Percentage: 76.8%",
    level: "secondary",
    description: "Completed higher secondary education with focus on mathematics and computer science.",
    highlights: [
      "Mathematics and Computer Science focus",
      "Strong analytical skills foundation",
      "Problem-solving methodologies"
    ]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Sri Vijay Vidyalaya, Hosur",
    period: "2018",
    grade: "Percentage: 91.2%",
    level: "primary",
    description: "Completed secondary education with excellent academic performance across all subjects.",
    highlights: [
      "Well-rounded academic performance",
      "Strong foundation in core subjects",
      "Excellent academic discipline"
    ]
  }
];

const getIcon = (level: string) => {
  switch (level) {
    case 'undergraduate':
      return GraduationCap;
    case 'secondary':
      return BookOpen;
    default:
      return Award;
  }
};

const Projects = () => {
  return (
    <><>
      <section id="projects" className="py-10 px-6">
        <div className="container mx-auto max-w-6xl text-center mb-16">
          <p className="text-text-low tracking-widest text-sm mb-3">+ PROJECTS +</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-high">
            What I’ve been up to
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 sm:h-60 md:h-72 overflow-hidden">
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
      </section><section id="experience" className="py-20 px-6 bg-card/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-text-low tracking-widest text-sm mb-3">+ EXPERIENCE & ACHEIVEMENTS +</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-high">
              Professional Experience
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={`${exp.company}-${exp.period}`}
                  className={`bg-card/80 border-border transition-all duration-500 animate-slide-up group transform hover:-translate-y-1 hover:rotate-[0.5deg] hover:shadow-xl ${exp.current ? 'ring-2 ring-neon-cyan/20' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
                      {/* Company Info */}
                      <div className="w-full lg:flex-shrink-0 lg:w-80">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-gradient-primary rounded-lg">
                            <Building className="h-5 w-5 text-background" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-neon-cyan">{exp.title}</h3>
                            {exp.current && (
                              <span className="inline-block px-2 py-1 text-xs bg-neon-cyan/20 text-neon-cyan rounded-full mt-1">
                                Current
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-4 text-neon-purple">Key Responsibilities:</h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base transition-transform duration-300 group-hover:translate-x-1"
                              style={{ animationDelay: `${index * 0.1 + respIndex * 0.05}s` }}
                            >
                              <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-high mb-8 text-center">
              Achievements & Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={achievement.title}
                  className="bg-card/80 border-border hover:border-neon-purple/30 hover:shadow-lg transition-all duration-500 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="p-3 bg-gradient-primary rounded-full w-fit mx-auto mb-4 group-hover:animate-glow">
                        <Award className="h-6 w-6 text-background" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-neon-purple transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm font-medium text-neon-cyan mb-2">
                        {achievement.event}
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        {achievement.organization} • {achievement.year}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section></><section id="education" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-text-low tracking-widest text-sm mb-3">+ EDUCATIONS BACKGROUND +</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-high">
              My academic journey and continuous learning
            </h2>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => {
              const Icon = getIcon(edu.level);
              return (
                <Card
                  key={edu.degree}
                  className="bg-card/80 border-border transition-all duration-500 group transform hover:-translate-y-1 hover:rotate-[0.5deg] hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
                      {/* Icon and Period */}
                      <div className="lg:col-span-1 text-center lg:text-left">
                        <div className="inline-flex p-4 bg-gradient-primary rounded-xl mb-4 group-hover:animate-glow">
                          <Icon className="h-8 w-8 text-background" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-mono text-neon-cyan">{edu.period}</p>
                          <p className="text-lg font-bold text-neon-purple">{edu.grade}</p>
                        </div>
                      </div>

                      {/* Education Details */}
                      <div className="lg:col-span-3">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-muted-foreground font-medium">
                            {edu.institution}
                          </p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {edu.description}
                        </p>

                        {/* Highlights */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-neon-purple">Key Highlights:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {edu.highlights.map((highlight, highlightIndex) => (
                              <div
                                key={highlightIndex}
                                className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1"
                                style={{ animationDelay: `${index * 0.15 + highlightIndex * 0.05}s` }}
                              >
                                <div className="w-2 h-2 bg-neon-cyan rounded-full flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-muted-foreground">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Academic Information */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Card className="bg-gradient-dark border-border hover:border-neon-cyan/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-neon-cyan/20 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-6 w-6 text-neon-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Maintained strong academic performance throughout my educational journey with consistent high grades
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-dark border-border hover:border-neon-purple/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-neon-purple/20 rounded-full w-fit mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-neon-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Actively pursuing additional certifications and staying updated with latest technologies and industry trends
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section></>
  );
};

export default Projects;
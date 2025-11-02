import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper';
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
import { useEffect } from 'react';
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

const Project = () => {
     useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
    return (
        <section id="projects" className="py-10 px-6">
            <div className="container mx-auto max-w-6xl text-center mb-16">
                <p className="text-text-low tracking-widest text-sm mb-3">+ PROJECTS +</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-text-high">
                    What I’ve been up to
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.live || project.github}
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
        </section>
    )
};

export default Project;
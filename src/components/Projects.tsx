'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import natureLogo from '../../public/nature-logo.jpg';
import fhLogo from '../../public/fh-logo.jpg';
import oritaoLogo from '../../public/oritao-logo.jpg';
import lesLogo from '../../public/lesch-logo.jpg';
import ncLogo from '../../public/nc-logo.jpg';
import pixelateImg from '../../public/pixelate-img.jpg';
import chitChatImg from '../../public/chitchat-img.jpg';
import trackFunds from '../../public/trackfunds-img.jpg';

const Projects = () => {

    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
        title: "NativeCamp",
        description: "Online English learning platform with real-time video conferencing, lesson scheduling, and payment processing.",
        category: "Full Stack",
        imageSrc: ncLogo,
        technologies: ["PHP", "HTML", "CSS", "JavaScript", "SQL", "jQuery", "CakePHP", "Memcached", "Redis", "Postman", "Git", "Github"],
        features: [
            "Real-time video conferencing",
            "Lesson scheduling and management",
            "Payment processing integration",
            "Admin dashboard for analytics"
        ],
        liveUrl: "https://nativecamp.net/",
        githubUrl: "#",
        status: "In Progress",
        disableGithub: true,
        disableUrl: false,
    },
    {
      title: "Nature Bijoux",
      description: "A full-stack e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.",
      category: "Full Stack",
      imageSrc: natureLogo,
      technologies: ["PHP", "Wordpress", "SQL", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Git", "Gitlab"],
      features: [
        "Real-time inventory tracking",
        "Advanced search and filtering",
        "Payment gateway integration",
        "Admin analytics dashboard"
      ],
      liveUrl: "https://www.nature.fr/en/",
      githubUrl: "#",
      status: "In Progress",
      disableGithub: true,
      disableUrl: false,
    },
    {
        title: "Franck Herval",
        description: "A full-stack e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.",
        category: "Full Stack",
        imageSrc: fhLogo,
        technologies: ["PHP", "Wordpress", "SQL", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Git", "Gitlab"],
        features: [
          "Real-time inventory tracking",
          "Advanced search and filtering",
          "Payment gateway integration",
          "Admin analytics dashboard"
        ],
        liveUrl: "https://www.franckherval.com/",
        githubUrl: "#",
        status: "In Progress",
        disableGithub: true,
        disableUrl: false,
    },
    {
        title: "Oritao",
        description: "A full-stack e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.",
        category: "Full Stack",
        imageSrc: oritaoLogo,
        technologies: ["PHP", "Wordpress", "SQL", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Git", "Gitlab"],
        features: [
          "Real-time inventory tracking",
          "Advanced search and filtering",
          "Payment gateway integration",
          "Admin analytics dashboard"
        ],
        liveUrl: "https://www.oritao.com/fr/",
        githubUrl: "#",
        status: "In Progress",
        disableGithub: true,
        disableUrl: false,
    },
    {
        title: "Les Chamanes",
        description: "A company based on France that offers a wide range of products involving jewelries, all inspired by nature.",
        category: "Frontend",
        imageSrc: lesLogo,
        technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Git", "Gitlab"],
        features: [
            "Responsive design",
            "Frontend development",
            "SEO optimization",
            "User-friendly interface"
        ],
        liveUrl: "https://www.leschamanes.com/en/",
        githubUrl: "#",
        status: "Completed",
        disableGithub: true,
        disableUrl: false,
    },
    {
        title: "Pixelate",
        description: "A web application that lets users create custom selections on images using square, circle, or free-draw tools, then apply pixelation or blur effects for quick content masking and redaction.",
        category: "Frontend",
        imageSrc: pixelateImg,
        technologies: ["Next.js", "ReactJS", "Typescript", "Node JS", "Framer", "Tailwind CSS", "Shadcn UI", "Git", "Github"],
        features: [
            "Pixelation and blur effects",
            "Image upload and processing",
            "Real-time preview",
            "Downloadable results",
        ],
        liveUrl: "",
        githubUrl: "#",
        status: "Completed",
        disableGithub: true,
        disableUrl: true,
    },
    {
        title: "Chitchat",
        description: "A migration project requested by a client. Made with Laravel, Blade, Livewire, and Tailwind CSS.",
        category: "Full Stack",
        imageSrc: chitChatImg,
        technologies: ["Laravel", "PHP", "SQL", "Blade", "Livewire", "Tailwind CSS", "Git", "Github"],
        features: [
            "Real-time chat functionality",
            "User authentication",
            "File sharing",
            "Search functionality"
        ],
        liveUrl: "https://www.chitchatconfessions.com/",
        githubUrl: "#",
        status: "In Progress",
        disableGithub: true,
        disableUrl: false,
    },
    {
        title: "Trackfunds",
        description: "A web application designed to unify investment tracking for stocks, crypto, real estate, and more.",
        category: "Full Stack",
        imageSrc: trackFunds,
        technologies: ["Next.js", "ReactJS", "Typescript", "Clerk", "Framer", "Tailwind CSS", "Shadcn UI", "Git", "Github"],
        features: [
            "User authentication",
            "Investment tracking",
            "Portfolio management",
            "Real-time data updates",
            "Data visualization",
        ],
        liveUrl: "",
        githubUrl: "#",
        status: "Completed",
        disableGithub: true,
        disableUrl: true,
    },
  ];

//   const categories = ["All", "Full-Stack", "Frontend", "Backend"];

    return (
    <section id="projects" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I&#39;m passionate about
            </p>
          </motion.div>

          {/* Category Filter */}
          {/* <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="transition-smooth hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </motion.div> */}

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-card rounded-xl overflow-hidden border border-border shadow-card h-full">
                  {/* Project Image/Icon */}
                  <div className="relative h-48 bg-muted/10 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                        <Image 
                            src={project.imageSrc}
                            alt={project.title}
                            width={150}
                            height={100}
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-muted/80 text-muted-foreground rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-xs text-muted-foreground ml-3">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded-md hover:bg-primary/20 hover:text-primary transition-smooth"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <a 
                            href={`${project.disableUrl ? undefined : project.liveUrl}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={project.disableUrl ? "pointer-events-none opacity-50" : "flex items-center justify-center text-white cursor-pointer"}
                            aria-disabled={project.disableUrl}
                        >
                            <Button
                                size="sm"
                                className="flex-1 bg-primary hover:shadow-glow transition-all duration-300 group/btn cursor-pointer"
                            >
                        
                                <Play className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                                Live Demo
                            </Button>
                        </a>

                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/40 text-primary hover:bg-primary/10"
                        disabled={project.disableGithub}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      
                      <a 
                        href={project.disableUrl ? undefined : project.liveUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => project.disableUrl && e.preventDefault()}
                        className={project.disableUrl ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      >
                        <Button
                            variant="outline"
                            size="sm"
                            className={`border text-primary hover:bg-primary/10 cursor-pointer ${project.disableUrl ? "border-primary/50" : "border-primary "}`}
                        >
                                <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          {/* <motion.div className="text-center mt-12" variants={itemVariants}>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary/10 transition-smooth group"
              disabled
            >
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
    )
}

export default Projects;
'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Forty Degrees Celsius Inc.",
      location: "Cebu Business Park, Cebu City, Philippines",
      period: "2024 - Present",
      type: "Full-time",
      description: "Working on a web platform for a Japanese company, focusing on feature development and bug resolution.",
      achievements: [
        "Develop and maintain new features for the platform using PHP, SQL, HTML, CSS, JavaScript, Angular, and Vue.js",
        "Resolve technical issues and implement fixes based on support and development tickets",
        "Serve as a member of the dedicated bug team, focused on identifying and resolving critical bugs across the system",
        "Collaborate with senior developers and cross-functional teams through daily stand-up meetings and progress reports",
        "Communicate regularly with Japanese senior engineers for reporting and task coordination"
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "Software Developer",
      company: "Korlanda Corp.",
      location: "MEZ 1, Lapu-Lapu City 6015 Cebu, Philippines",
      period: "2023",
      type: "Full Time",
      description: "Started my professional journey building websites and learning web development fundamentals.",
      achievements: [
        "Developed custom WordPress themes and plugins for small to medium businesses",
        "Learned modern web development practices including version control and testing",
        "Assisted senior developers with debugging and feature implementation",
        "Gained experience with responsive design and cross-browser compatibility"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "WordPress", "SQL"]
    },
    {
      title: "Software Engineer",
      company: "DNA Micro",
      location: "Remote",
      period: "2023",
      type: "Intern",
      description: "Gained hands-on experience in software development through an internship program.",
      achievements: [
        "Participated in real-world software development projects as an intern",
        "Worked with technologies such as React, JavaScript, XState, MongoDB, Tailwind CSS, Axios, and GitLab",
        "Collaborated with team members to complete tasks and solve technical challenges",
        "Learned and applied new tools, frameworks, and best practices in development"
      ],
      technologies: ["JavaScript", "React", "Tailwind CSS", "MongoDB", "XState", "GitLab"]
    },
    {
      title: "Software Developer",
      company: "Korlanda Corp.",
      location: "MEZ 1, Lapu-Lapu City 6015 Cebu, Philippines",
      period: "2020 - 2023",
      type: "Part Time",
      description: "Started my professional journey building websites and learning web development fundamentals.",
      achievements: [
        "Developed custom WordPress themes and plugins for small to medium businesses",
        "Learned modern web development practices including version control and testing",
        "Assisted senior developers with debugging and feature implementation",
        "Gained experience with responsive design and cross-browser compatibility"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "WordPress", "SQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey through the companies and projects that shaped my career
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  variants={itemVariants}
                  custom={index}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1] 
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: 1 + index * 0.2 
                      }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div 
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary`}>
                            {exp.type}
                          </span>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        
                        <div className="flex items-center text-primary font-medium mb-2">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                        
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: 0.8 + index * 0.2 + achIndex * 0.1 }}
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded-md hover:bg-primary/20 hover:text-primary transition-smooth"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ delay: 1 + index * 0.2 + techIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
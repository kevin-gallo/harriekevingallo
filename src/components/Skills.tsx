'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      };
    
      const skillCategories = [
        {
          title: "Frontend",
          skills: [
            { name: "React/Next.js", icon: "⚛️" },
            { name: "TypeScript", icon: "🔷" },
            { name: "Tailwind CSS", icon: "🎨" },
            { name: "Vue.js", icon: "💚" },
            {name: "HTML", icon: "🌐" },
            {name: "SASS", icon: "💅" },
            { name: "JavaScript", icon: "🟡" },
            { name: "CSS", icon: "🎨" },
            { name: "Bootstrap", icon: "📦" },
            { name: "jQuery", icon: "🔗" },
          ],
        },
        {
          title: "Backend",
          skills: [
            { name: "PHP", icon: "🐘" },
            { name: "Node.js", icon: "🟢" },
            { name: "SQL", icon: "📊" },
            { name: "Express.js", icon: "🚀" },
            { name: "REST APIs", icon: "🔗" },
            { name: "PostgreSQL", icon: "🐘" },
            { name: "Laravel", icon: "🛠️" },
            { name: "CakePHP", icon: "🍰" },
            { name: "PHPMyAdmin", icon: "🗃️" },
          ],
        },
        {
          title: "Tools & Cloud",
          skills: [
            { name: "Docker", icon: "🐳" },
            { name: "Git", icon: "📝" },
            { name: "CI/CD", icon: "🔄" },
            { name: "GitHub", icon: "🐙" },
            { name: "GitLab", icon: "🦊" },
            { name: "Vercel", icon: "🚀" },
            { name: "Postman", icon: "📬" },
            { name: "Figma", icon: "🎨" },
            { name: "Visual Studio Code", icon: "💻" },
            { name: "Linux", icon: "🐧" },
            { name: "Windows", icon: "🪟" },
            { name: "MacOS", icon: "🍏" },
            { name: "Memcached", icon: "🟦" },
          ],
        },
      ];
    
      const softSkills = [
        { name: "Problem Solving" },
        { name: "Team Collaboration" },
        { name: "Communication" },
        { name: "Leadership" },
        { name: "Adaptability" },
        { name: "Creative Thinking" },
      ];

    return (
    <section id="skills" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-center mb-12">Technical Expertise</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="bg-card rounded-xl p-6 border border-border shadow-card"
                  whileHover={{ y: -5 }}
                  variants={itemVariants}
                  custom={categoryIndex}
                >
                  <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
                    {category.title}
                  </h4>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium text-foreground">{skill.name}</span>
                          </div>
                          {/* <span className="text-sm text-muted-foreground">{skill.level}%</span> */}
                        </div>
                        
                        {/* progress bar */}
                        {/* <div className="relative">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-primary rounded-full"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05,
                                duration: 1,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </div> */}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-center mb-12">Soft Skills</h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-card rounded-lg p-4 border border-border shadow-card group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground group-hover:text-primary transition-smooth">
                        {skill.name}
                      </span>
                      {/* <span className="text-sm text-muted-foreground">{skill.level}%</span> */}
                    </div>
                    
                    {/* soft skills - progress bar */}
                    {/* <div className="relative">
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: 0.6 + index * 0.1,
                            duration: 1.2,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-card rounded-xl p-8 border border-border shadow-card max-w-3xl mx-auto">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Continuous Learning Journey
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                methodologies, and best practices to stay at the forefront of web development. 
                My passion for learning drives me to tackle challenging projects and grow 
                alongside the ever-changing tech landscape.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    )
}

export default Skills;
'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Rocket, Users, Coffee } from "lucide-react";

const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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
  
    const stats = [
      { icon: Code, label: "Projects Completed", value: "10+" },
      { icon: Rocket, label: "Years Experience", value: "3+" },
      { icon: Users, label: "Companies", value: "5+" },
      { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    ];
  
    const interests = [
      { name: "Exploring latests techs", icon: "🚀" },
      { name: "Watching vlogs and podcasts", icon: "✍️" },
      { name: "Farming", icon: "🏔️" },
      { name: "Simply just chilling", icon: "💤" },
    ];

    return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate full-stack developer with a love for creating innovative solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-foreground">
                Building the Future, One Line of Code at a Time
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&#39;m a dedicated full-stack developer with over 3 years of experience 
                  crafting digital solutions that bridge the gap between design and functionality. 
                  My journey began with a curiosity for how things work and evolved into a 
                  passion for building applications that make a real impact.
                </p>
                
                <p>
                  I thrive in collaborative environments where creativity meets technical 
                  excellence. Whether it&#39;s architecting scalable backend systems or 
                  creating intuitive user interfaces, I bring enthusiasm and precision 
                  to every project.
                </p>

                <p>
                  When I&#39;m not coding, you&#39;ll find me exploring the latest tech trends, 
                  watching podcasts and vlogs, or farming to unwind and reset my mind.
                </p>
              </div>

              {/* Core Values */}
              <motion.div 
                className="bg-card rounded-xl p-6 border border-border shadow-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-3">Core Values</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Clean, maintainable code</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>User-centered design thinking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Continuous learning and growth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Collaborative problem solving</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats & Interests */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-card rounded-xl p-6 text-center border border-border shadow-card group"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:text-primary transition-smooth" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Interests */}
              <motion.div
                className="bg-card rounded-xl p-6 border border-border shadow-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">When I&#39;m Not Coding</h4>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.name}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-smooth"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-lg">{interest.icon}</span>
                      <span className="text-sm text-muted-foreground">{interest.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    )
}

export default About;
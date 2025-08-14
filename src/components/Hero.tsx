'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import professionalHeadshot from "@/assets/hero-img.jpg";
import Image from "next/image";

const Hero = () => {
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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
    <section className="min-h-screen flex items-center justify-center bg-secondary relative overflow-hidden pt-[140px] lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="text-center lg:text-left space-y-6" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-lg text-primary font-medium mb-2">Hello, I&#39;m</h2>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="text-gradient">Harrie Kevin Gallo</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Full-Stack Developer
              </p>
            </motion.div>

            <motion.p 
              className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              I build exceptional digital experiences with modern technologies. 
              Passionate about creating scalable applications that make a difference.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button size="lg" className="bg-primary hover:shadow-glow transition-all duration-300 group cursor-pointer">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                <a href="/Harrie Kevin Gallo - Resume.pdf" target="_blank">Download Resume</a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 transition-smooth cursor-pointer">
                <Mail className="mr-2 h-4 w-4" />
                <a href="mailto:gallo.harriekevin.official@gmail.com">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div 
              className="flex justify-center lg:justify-start space-x-6"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/kevin-gallo"
                className="text-muted-foreground hover:text-primary transition-smooth"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/harrie-kevin-gallo-b2491325a/"
                className="text-muted-foreground hover:text-primary transition-smooth"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-100 h-100 rounded-full bg-primary p-1 shadow-glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <Image
                    src={professionalHeadshot}
                    alt="Alex Johnson - Full Stack Developer"
                    className="w-full h-full object-cover"
                    width={520}
                    height={520}
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4] 
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            animate={{ 
              borderColor: ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--primary))"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    );
}

export default Hero;
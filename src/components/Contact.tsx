'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, Facebook } from "lucide-react";

const Contacts = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gallo.harriekevin.official@gmail.com",
      href: "mailto:gallo.harriekevin.official@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 994-583-3976",
      href: "tel:09945833976"
    },
    {
        icon: Download,
        label: "Get a copy of my Resume",
        href: "/Harrie Kevin Gallo - Resume.pdf",
        color: "hover:text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cebu City, Cebu, Philippines",
      href: "https://maps.app.goo.gl/1CMnKP9mQNoJGkfJ6"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kevin-gallo",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harrie-kevin-gallo-b2491325a/",
      color: "hover:text-blue-400"
    },
    {
        icon: Facebook,
        label: "Facebook",
        href: "https://www.facebook.com/kevinjhay.gallo.3/",
        color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
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
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&#39;s discuss your next project and 
              explore how we can work together.
            </p>
          </motion.div>

          <div className="grid gap-12">
            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let&#39;s Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I&#39;m always interested in new opportunities, collaborations, and 
                  challenging projects. Whether you have a question about my work, 
                  want to discuss a potential project, or just want to say hello, 
                  I&#39;d love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:shadow-card transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    target={`${info.label === 'Resume' || info.label == 'Location' ? '_blank' : ''}`}
                  >
                    <div className="w-12 h-12 p-3 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors wrap-anywhere">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <h4 className="text-lg font-medium text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:shadow-card`}
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <div className="bg-card rounded-xl p-8 border border-border shadow-card max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I&#39;m currently available for freelance work and exciting full-time opportunities. 
                Let&#39;s discuss how we can bring your vision to life with cutting-edge technology 
                and creative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:09945833976" className="cursor-pointer">
                    <Button size="lg" className="bg-primary hover:shadow-glow transition-all duration-300 cursor-pointer">
                        <Send className="h-4 w-4 mr-2" />
                    Schedule an Appointment
                    </Button>
                </a>
                <a href="/Harrie Kevin Gallo - Resume.pdf" className="cursor-pointer" target="_blank">
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 cursor-pointer">
                        <Download className="h-4 w-4 mr-2" />
                    Download Resume
                    </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    );
}

export default Contacts;
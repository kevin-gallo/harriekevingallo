'use client'

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/kevin-gallo", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/harrie-kevin-gallo-b2491325a/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/kevinjhay.gallo.3/", label: "Twitter" },
    { icon: Mail, href: "mailto:gallo.harriekevin.official@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">Harrie Kevin Gallo</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Full-stack developer passionate about creating innovative solutions 
              that make a difference. Always ready to tackle new challenges and 
              learn cutting-edge technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gradient-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-card transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>gallo.harriekevin.official@gmail.com</p>
              <p>+63 994 583-3976</p>
              <p>Cebu, Philippines, 6000</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>© 2025 Harrie Kevin Gallo. Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                color: ["hsl(var(--muted-foreground))", "hsl(var(--primary))", "hsl(var(--muted-foreground))"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 fill-current text-red-400" />
            </motion.div>
            <span>and lots of coffee</span>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            <p>Built with NextJS, TypeScript & Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
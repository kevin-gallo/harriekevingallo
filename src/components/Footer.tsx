'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const pageLinks = [
  { label: "About me", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Tools", href: "/tools" },
  { label: "Services", href: "/services" },
];

const socials = [
  { icon: Github, href: "https://github.com/kevin-gallo", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/harrie-kevin-gallo-b2491325a/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/kevinjhay.gallo.3/",
    label: "Facebook",
  },
  {
    icon: Mail,
    href: "mailto:gallo.harriekevin.official@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="px-space pt-space bg-black text-white">
      <div className="mx-container space-y-12 lg:space-y-20">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-x-5">
          <div className="lg:col-span-5 lg:space-y-2">
            <h2 className="h5 text-primary">Get in touch</h2>
            <p className="display-2">
              Ready for a website that grows your business?
            </p>
          </div>
          <div className="space-y-4 lg:col-span-5 lg:col-start-8 lg:space-y-7 lg:pt-6">
            <p className="body-1">
              Let&apos;s start a conversation about your next project. One
              dedicated partner from your first message to launch day, and
              beyond.
            </p>
            <a
              href="mailto:gallo.harriekevin.official@gmail.com"
              className="btn btn-primary"
            >
              Get in touch
            </a>
          </div>
        </div>

        <motion.hr
          className="origin-left border-white/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.45, 0, 0.55, 1] }}
        />

        <div className="grid gap-8 pb-10 lg:grid-cols-12 lg:pb-28">
          <ul className="grid gap-5 lg:col-span-7 lg:grid-cols-3 lg:gap-2">
            <li className="space-y-5">
              <a
                href="tel:+639945833976"
                className="body-1 block"
                aria-label="Phone number"
              >
                +63 994 583 3976
              </a>
              <ul className="flex items-center gap-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="hover:bg-primary flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors duration-300"
                    >
                      <social.icon className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <address className="not-italic">
                <a
                  href="https://maps.app.goo.gl/1CMnKP9mQNoJGkfJ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Cebu City Philippines on map"
                  className="body-4 block"
                >
                  Based in
                  <br />
                  Cebu City, Philippines
                  <br />
                  Working worldwide
                </a>
              </address>
            </li>
            <li>
              <a
                href="mailto:gallo.harriekevin.official@gmail.com"
                className="body-4 block break-words"
              >
                gallo.harriekevin.official
                <br />
                @gmail.com
              </a>
            </li>
          </ul>

          <div className="space-y-5 lg:col-span-5 lg:col-start-8">
            <h3 className="text-[22px] lg:text-[18px]">
              Available for new projects, ongoing partnerships, and
              white-label work for agencies.
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="body-3 underline-link hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="mx-container pb-14 lg:pb-10">
        <div className="flex w-full items-end justify-between gap-4">
          <div className="flex flex-col gap-3 leading-none lg:flex-row lg:items-center">
            <small>
              &copy; {new Date().getFullYear()} Harrie Kevin Gallo
            </small>
            <small>
              Inspired by <a href="https://platocreative.co.nz/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Plato
              </a>
            </small>
          </div>
          <a
            href="#top"
            className="font-headline text-3xl font-medium lg:text-4xl"
            aria-label="Back to top"
          >
            Harrie Kevin Gallo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

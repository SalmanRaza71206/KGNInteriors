'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const footerLinks = {
    services: [
        { name: 'Terrace Awnings', href: '#services' },
        { name: 'Tensile Structures', href: '#services' },
        { name: 'Roller Blinds', href: '#services' },
        { name: 'Car Parking Shades', href: '#services' },
        { name: 'Drop Awnings', href: '#services' },
        { name: 'Window Awnings', href: '#services' },
    ],
    company: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Projects', href: '#projects' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ],
};

const socialLinks = [
    {
        name: 'facebook',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
        ),
    },
    {
        name: 'instagram',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        ),
    },
    {
        name: 'twitter',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        ),
    },
    {
        name: 'linkedin',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        ),
    },
];

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(footerRef, { once: true, margin: '-100px' });

    const scrollToTop = () => {
        const lenis = (window as unknown as { lenis?: { scrollTo: (target: number) => void } }).lenis;
        if (lenis) {
            lenis.scrollTo(0);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const lenis = (window as unknown as { lenis?: { scrollTo: (target: Element) => void } }).lenis;
            if (lenis) {
                lenis.scrollTo(element);
            } else {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer ref={footerRef} className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>

            <div className="container relative z-10">
                {/* Top CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="py-16 border-b border-white/10"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2">
                                Ready to Transform Your Space?
                            </h3>
                            <p className="text-gray-400 max-w-md">
                                Get in touch with our experts for a free consultation and quote.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:+919711595758"
                                className="group flex items-center gap-3 px-6 py-4 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>Call Now</span>
                            </a>
                            <button
                                onClick={() => scrollToSection('#contact')}
                                className="group flex items-center gap-3 px-6 py-4 border border-white/20 hover:border-accent text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Send Message</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-1"
                    >
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center rounded-xl shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-300">
                                <span className="text-white font-display font-bold text-xl">K</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-semibold text-xl tracking-tight text-white leading-none">
                                    KGN
                                </span>
                                <span className="text-[10px] tracking-[0.15em] text-gray-400 uppercase font-medium">
                                    Awnings & Blinds
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Premium shading solutions designed for durability and style.
                            Protecting your spaces with excellence since 2010.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-2">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={social.name}
                                    href={`#${social.name}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-accent text-gray-400 hover:text-white transition-all duration-300 rounded-lg border border-white/10 hover:border-accent hover:scale-110"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-white font-display font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-accent rounded-full" />
                            Products
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                                >
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300 rounded-full" />
                                        {link.name}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-white font-display font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-accent rounded-full" />
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                                >
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300 rounded-full" />
                                        {link.name}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="text-white font-display font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-accent rounded-full" />
                            Contact Info
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
                                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        RZ-3111,Gali No-35,Basement,Tughlakabad Extn,New Delhi-19<br />India
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
                                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <a href="tel:+919711595758" className="text-white hover:text-accent transition-colors font-medium text-sm">
                                    +91 97115 95758
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
                                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a href="mailto:info@kgnawnings.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    info@kgnawnings.com
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 border-t border-white/10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4"
                    >
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} KGN Awnings & Blinds.
                        </p>
                        <span className="hidden sm:block text-gray-700">•</span>
                        <p className="text-gray-500 text-sm">All rights reserved.</p>
                    </motion.div>

                    {/* Back to Top */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-accent text-gray-400 hover:text-white rounded-lg border border-white/10 hover:border-accent transition-all duration-300"
                    >
                        <span className="text-sm font-medium">Back to Top</span>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <svg
                                className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </div>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}

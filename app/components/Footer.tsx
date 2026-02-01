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
        <footer ref={footerRef} className="bg-foreground text-white pt-20 pb-8">
            <div className="container">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-accent flex items-center justify-center rounded-sm">
                                <span className="text-white font-display font-bold text-xl">K</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-semibold text-xl tracking-tight text-white leading-none">
                                    KGN
                                </span>
                                <span className="text-[10px] tracking-[0.1em] text-gray-400 uppercase font-medium">
                                    Awnings & Blinds
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm mb-6 max-w-xs">
                            Premium shading solutions designed for durability and style.
                            Protecting your spaces since 2010.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {['facebook', 'instagram', 'twitter', 'linkedin'].map((social, i) => (
                                <motion.a
                                    key={social}
                                    href={`#${social}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-accent text-white transition-all duration-300 rounded-sm"
                                    aria-label={social}
                                >
                                    {/* Icons - Simplified for brevity */}
                                    <span className="capitalize text-xs">{social[0]}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-white font-display font-semibold mb-6">Products</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                                >
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
                                    >
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
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-white font-display font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                                >
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-white font-display font-semibold mb-6">Get a Quote</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Contact us today for a free consultation and quote.
                        </p>
                        <div className="flex flex-col gap-2">
                            <a href="tel:+919876543210" className="text-white hover:text-accent transition-colors font-medium">
                                +91 98765 43210
                            </a>
                            <a href="mailto:info@kgnawnings.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                                info@kgnawnings.com
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-gray-500 text-sm"
                    >
                        © {new Date().getFullYear()} KGN Awnings & Blinds. All rights reserved.
                    </motion.p>

                    {/* Back to Top */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-gray-500 hover:text-accent transition-colors duration-300"
                    >
                        <span className="text-sm">Back to Top</span>
                        <div className="w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-accent rounded-sm transition-colors duration-300">
                            <svg
                                className="w-3 h-3 transform group-hover:-translate-y-1 transition-transform duration-300"
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

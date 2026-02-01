'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3' : 'py-3'
                    }`}
            >
                <div className="flex items-center justify-between gap-6 px-6 py-2 md:px-10 md:py-1 lg:px-14">
                    {/* Brand + Desktop Navigation */}
                    <div className="flex items-center gap-6 md:gap-8">
                        {/* Brand */}
                        <Link href="/" className="flex items-center gap-3 mr-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent text-sm font-display font-semibold text-background shadow-sm">
                                K
                            </div>
                            <div className="hidden flex-col leading-tight sm:flex">
                                <span className="text-sm font-display font-semibold tracking-tight text-foreground">
                                    KGN Awnings & Blinds
                                </span>
                                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground-muted">
                                    Shades • Tensile • Blinds
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center gap-4 lg:flex lg:gap-6 lg:ml-2">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, y: -16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                                    onClick={() => scrollToSection(link.href)}
                                    className="relative py-2 px-1 text-xs font-medium uppercase tracking-[0.16em] text-foreground-muted transition-colors duration-300 hover:text-foreground"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                                </motion.button>
                            ))}
                        </nav>
                    </div>

                    {/* Desktop CTAs */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="hidden items-center gap-4 lg:flex lg:ml-6"
                    >
                        <a
                            href="tel:+919876543210"
                            className="inline-flex items-center gap-2 py-2 pl-2 pr-3 text-xs font-medium uppercase tracking-[0.16em] text-foreground-muted hover:text-foreground"
                        >
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background-secondary text-xs">
                                📞
                            </span>
                            <span>+91 98765 43210</span>
                        </a>
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="btn btn-primary text-xs py-3 px-6 ml-2"
                        >
                            Get a Free Quote
                        </button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 lg:hidden ml-4"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5">
                            <motion.span
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 6 : 0,
                                }}
                                className="block h-0.5 w-5 origin-center bg-foreground"
                            />
                            <motion.span
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                    x: isMobileMenuOpen ? 20 : 0,
                                }}
                                className="block h-0.5 w-5 bg-foreground"
                            />
                            <motion.span
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? -6 : 0,
                                }}
                                className="block h-0.5 w-5 origin-center bg-foreground"
                            />
                        </div>
                    </motion.button>
                </div>
            </motion.header >

            {/* Mobile Menu */}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-40 lg:hidden"
                        >
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-background/95 backdrop-blur-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            />

                            {/* Menu Content */}
                            <motion.nav
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="absolute right-0 top-0 bottom-0 flex w-full max-w-sm flex-col justify-center bg-background-secondary px-10 py-8"
                            >
                                <div className="mb-8 mt-4">
                                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground-muted">
                                        Menu
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    {navLinks.map((link, i) => (
                                        <motion.button
                                            key={link.name}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 50 }}
                                            transition={{ delay: i * 0.1 }}
                                            onClick={() => scrollToSection(link.href)}
                                            className="py-3 pl-0 pr-4 text-left text-2xl font-display font-semibold text-foreground transition-colors duration-300 hover:text-accent"
                                        >
                                            {link.name}
                                        </motion.button>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-10 flex flex-col gap-3"
                                >
                                    <a
                                        href="tel:+919876543210"
                                        className="flex items-center justify-center gap-2 rounded-none border border-border bg-background py-3 px-4 text-sm font-medium text-foreground"
                                    >
                                        <span>Call Us</span>
                                        <span className="text-xs text-foreground-muted">+91 98765 43210</span>
                                    </a>
                                    <button
                                        onClick={() => scrollToSection('#contact')}
                                        className="btn btn-primary w-full mt-1"
                                    >
                                        Get a Free Quote
                                    </button>
                                </motion.div>
                            </motion.nav>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
}

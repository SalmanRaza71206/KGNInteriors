'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const HERO_IMAGES = [
    '/hero-awning.jpg',
    '/drop-awning-Bh4vaVvq.jpg',
    '/34144013ab7d113c4e037a0484e63501.jpg',
    '/7e31007bc736071394c701f23d3c7c26.jpg',
    '/service-pergola.webp',
];

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate decorative elements
            gsap.fromTo(
                '.hero-line',
                { scaleX: 0 },
                { scaleX: 1, duration: 1.5, ease: 'power3.inOut', delay: 1 }
            );

            gsap.fromTo(
                '.hero-stat',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, delay: 1.2, ease: 'power3.out' }
            );
        }, heroRef);

        return () => ctx.revert();
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
    };

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 md:pt-32"
        >
           {/* Background Carousel */}
<div className="absolute inset-0 z-0">
    {HERO_IMAGES.map((src, i) => (
        <motion.div
            key={src}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
            initial={false}
            animate={{
                opacity: i === currentSlide ? 1 : 0,
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
    ))}
</div>

{/* ✅ PERMANENT WHITE OVERLAY */}
<div className="absolute inset-0 z-[-2] bg-white/40 pointer-events-none" />

{/* ✅ OPTIONAL GRADIENT FOR DEPTH */}
<div className="absolute inset-0 z-[-0.5] bg-linear-to-r from-background/95 via-background/80 to-background/30 pointer-events-none" />


            {/* Main Content */}
            <div className="relative flex w-full flex-col px-6 mt-[-10vh] md:px-10 lg:px-14">

                <div className="flex max-w-4xl flex-col gap-2">
                    {/* Overline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="section-label"
                    >
                        <span>Professional Shading Solutions</span>
                    </motion.div>

                    {/* Main Headline */}
                    <div className="overflow-hidden mt-[-30px]">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-foreground leading-tight"
                        >
                            Premium Awnings
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-accent leading-tight"
                        >
                            & Tensile Structures
                        </motion.h1>
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className=" max-w-4xl text-base md:text-lg text-foreground-muted"
                    >
                        Transform your outdoor spaces with our high-quality retractable awnings,
                        tensile car parking shades, and modern blinds. Installed by experts
                        for durability and style.
                    </motion.p>

                    {/* CTA Buttons */}
                    

<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.9 }}
    className="flex flex-col items-start mt-4 sm:flex-row sm:items-center"
>
    <button
        onClick={() => scrollToSection('#contact')}
        className="btn btn-primary mb-2 sm:mb-0 sm:mr-3 w-full sm:w-auto"
    >
        <span>Get a Free Quote</span>
        <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
        </svg>
    </button>
    <a
    href="tel:+919876543210"
    className="btn btn-outline bg-background/80 backdrop-blur-sm w-full sm:w-auto "
>
        <span>Call Now</span>
    </a>
</motion.div>

                    {/* Secondary contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className="flex flex-col gap-1 text-sm text-foreground-muted sm:flex-row sm:items-center sm:gap-3"
                    >
                        <span className="font-medium text-foreground">Quick support:</span>
                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
                            >
                                <span>WhatsApp</span>
                            </a>
                            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
                            <span>Mon–Sat, 9:00 AM – 7:00 PM</span>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-8 flex max-w-3xl flex-wrap gap-6 md:mt-10 md:gap-8"
                >
                    {[
                        { value: '15+', label: 'Years Experience' },
                        { value: '500+', label: 'Projects Completed' },
                        { value: '98%', label: 'Client Satisfaction' },
                        { value: '50+', label: 'Expert Craftsmen' },
                    ].map((stat, i) => (
                        <div key={i} className="hero-stat flex flex-col basis-[calc(50%-0.75rem)] md:basis-[calc(25%-1.5rem)]">
                            <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-foreground-muted tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="scroll-indicator"
            >
                <div className="mouse" />
                <span>Scroll</span>
            </motion.div>

            {/* Decorative Lines */}
            <div className="absolute bottom-0 left-8 h-32 flex items-end pointer-events-none">
                <div
                    className="hero-line w-px h-full bg-linear-to-t from-accent to-transparent"
                    style={{ transformOrigin: 'bottom' }}
                />
            </div>
        </section>
    );
}

'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const images = [
    '/slides/1.jpg',
    '/slides/2.webp',
    '/slides/3.jpg',
    '/slides/4.jpg',
];

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 for infinite loop
    const [direction, setDirection] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const extendedImages = [
        images[images.length - 1], // Last image at the start
        ...images,
        images[0], // First image at the end
    ];


    const startAutoPlay = () => {
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 5000);
    };

    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    }, []);

    const handlePrev = () => {
        if (isTransitioning) return;
        stopAutoPlay();
        setIsTransitioning(true);
        setDirection(-1);
        setCurrentIndex((prev) => prev - 1);
        startAutoPlay();
    };

    const handleNext = () => {
        if (isTransitioning) return;
        stopAutoPlay();
        setIsTransitioning(true);
        setDirection(1);
        setCurrentIndex((prev) => prev + 1);
        startAutoPlay();
    };
    // Handle infinite loop wrap-around
    useEffect(() => {
        if (!isTransitioning) return;

        const timer = setTimeout(() => {
            setIsTransitioning(false);
            
            // Jump to the real position without animation
            if (currentIndex === 0) {
                setCurrentIndex(images.length);
            } else if (currentIndex === extendedImages.length - 1) {
                setCurrentIndex(1);
            }
        }, 1000); // Match transition duration

        return () => clearTimeout(timer);
    }, [currentIndex, isTransitioning]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 1, // Keep opacity at 1 for seamless transition
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 1, // Keep opacity at 1 for seamless transition
        }),
    };


    return (
        <section id="about" ref={sectionRef} className="section">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start lg:items-center">
                    {/* Left Column - Image Slider */}
                    <RevealOnScroll animation="slideLeft" className="relative">
                        <div className="relative aspect-4/3 sm:aspect-4/4 lg:aspect-4/5 rounded-2xl overflow-hidden shadow-2xl group bg-black">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url('${extendedImages[currentIndex]}')`,
                                    }}
                                />
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />

                            {/* Slider Navigation */}
                            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex items-center justify-between transition-opacity duration-300 z-50">
                                <div className="flex gap-2">
                                    <button
                                        onClick={handlePrev}
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all duration-300 shadow-lg"
                                        aria-label="Previous image"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all duration-300 shadow-lg"
                                        aria-label="Next image"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="flex gap-2">
                                    {images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                if (isTransitioning) return;
                                                stopAutoPlay();
                                                setIsTransitioning(true);
                                                setDirection(i + 1 > currentIndex ? 1 : -1);
                                                setCurrentIndex(i + 1); // +1 because of extended array
                                                startAutoPlay();
                                            }}
                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                                (currentIndex === 0 && i === images.length - 1) ||
                                                (currentIndex === extendedImages.length - 1 && i === 0) ||
                                                currentIndex === i + 1
                                                    ? 'w-4 bg-accent'
                                                    : 'bg-white/50'
                                            }`}
                                            aria-label={`Go to image ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-20 h-20 md:w-28 md:h-28 bg-accent rounded-lg flex flex-col items-center justify-center text-white shadow-lg z-10"
                            >
                                <span className="text-2xl md:text-3xl font-display font-bold">15+</span>
                                <span className="text-[10px] md:text-xs tracking-wider uppercase">Years Exp.</span>
                            </motion.div>
                        </div>
                    </RevealOnScroll>

                    {/* Right Column - Content */}
                    <div>
                        <RevealOnScroll>
                            <div className="section-label">
                                <span>About KGN Awnings</span>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.1}>
                            <h2 className="text-foreground mb-4 md:mb-6">
                                Expert Shading Solutions Since 2010
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.2}>
                            <p className="mb-4 md:mb-6 text-foreground-muted">
                                KGN Awnings & Blinds is a leading provider of premium outdoor and indoor shading
                                solutions. We specialize in designing and installing high-quality awnings,
                                tensile structures, and blinds that combine functionality with aesthetics.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.3}>
                            <p className="mb-6 md:mb-8 text-foreground-muted">
                                Whether you need to protect your vehicle with a tensile parking shade or
                                transform your terrace with a retractable awning, our expert team delivers
                                precision craftsmanship and durable solutions tailored to your space.
                            </p>
                        </RevealOnScroll>

                        {/* Features */}
                        <RevealOnScroll delay={0.4}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                                {[
                                    { icon: '✓', text: 'Weather Resistant' },
                                    { icon: '✓', text: 'Professional Installation' },
                                    { icon: '✓', text: 'Custom Dimensions' },
                                    { icon: '✓', text: 'Warranty Coverage' },
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent text-sm font-bold flex-shrink-0">
                                            {feature.icon}
                                        </span>
                                        <span className="text-sm text-foreground font-medium">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>

                        {/* Stats */}
                        <RevealOnScroll delay={0.5}>
                            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-border">
                                {[
                                    { value: 500, suffix: '+', label: 'Installations' },
                                    { value: 98, suffix: '%', label: 'Happy Clients' },
                                    { value: 50, suffix: '+', label: 'Team Members' },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-accent mb-1">
                                            <CountUp target={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-[10px] sm:text-xs text-foreground-muted uppercase tracking-wide leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}

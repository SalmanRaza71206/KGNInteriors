'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const images = [
    '/hero-awning.jpg',
    '/service-pergola.webp',
    '/drop-awning-Bh4vaVvq.jpg',
    '/7e31007bc736071394c701f23d3c7c26.jpg',
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoPlay = () => {
        intervalRef.current = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % images.length);
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
        stopAutoPlay();
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        startAutoPlay();
    };

    const handleNext = () => {
        stopAutoPlay();
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
        startAutoPlay();
    };

    const variants = {
        enter: (direction:number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction:number) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
    };

    return (
        <section id="about" ref={sectionRef} className="section">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start lg:items-center">
                    {/* Left Column - Image Slider */}
                    <RevealOnScroll animation="slideLeft" className="relative">
                        <div className="relative aspect-4/3 sm:aspect-4/4 lg:aspect-4/5 rounded-2xl overflow-hidden shadow-2xl group">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url('${images[currentIndex]}')`,
                                    }}
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent pointer-events-none z-10" />

                            {/* Slider Navigation */}
                            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <div className="flex gap-2">
                                    <button
                                        onClick={handlePrev}
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent transition-colors duration-300"
                                        aria-label="Previous image"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent transition-colors duration-300"
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
                                                stopAutoPlay();
                                                setDirection(i > currentIndex ? 1 : -1);
                                                setCurrentIndex(i);
                                                startAutoPlay();
                                            }}
                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-4 bg-accent' : 'bg-white/50'}`}
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

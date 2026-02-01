'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

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

    return (
        <section id="about" ref={sectionRef} className="section">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column - Image */}
                    <RevealOnScroll animation="slideLeft" className="relative">
                        <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://images.pexels.com/photos/2417844/pexels-photo-2417844.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                                }}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="absolute bottom-8 right-8 w-32 h-32 bg-accent rounded-lg flex flex-col items-center justify-center text-white shadow-lg z-10"
                            >
                                <span className="text-3xl font-display font-bold">15+</span>
                                <span className="text-xs tracking-wider uppercase">Years Exp.</span>
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
                            <h2 className="text-foreground mb-6">
                                Expert Shading Solutions Since 2010
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.2}>
                            <p className="mb-6 text-foreground-muted">
                                KGN Awnings & Blinds is a leading provider of premium outdoor and indoor shading
                                solutions. We specialize in designing and installing high-quality awnings,
                                tensile structures, and blinds that combine functionality with aesthetics.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.3}>
                            <p className="mb-8 text-foreground-muted">
                                Whether you need to protect your vehicle with a tensile parking shade or
                                transform your terrace with a retractable awning, our expert team delivers
                                precision craftsmanship and durable solutions tailored to your space.
                            </p>
                        </RevealOnScroll>

                        {/* Features */}
                        <RevealOnScroll delay={0.4}>
                            <div className="grid grid-cols-2 gap-6 mb-10">
                                {[
                                    { icon: '✓', text: 'Weather Resistant' },
                                    { icon: '✓', text: 'Professional Installation' },
                                    { icon: '✓', text: 'Custom Dimensions' },
                                    { icon: '✓', text: 'Warranty Coverage' },
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent text-sm font-bold">
                                            {feature.icon}
                                        </span>
                                        <span className="text-sm text-foreground font-medium">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>

                        {/* Stats */}
                        <RevealOnScroll delay={0.5}>
                            <div className="flex gap-8 pt-8 border-t border-border">
                                {[
                                    { value: 500, suffix: '+', label: 'Installations' },
                                    { value: 98, suffix: '%', label: 'Happy Clients' },
                                    { value: 50, suffix: '+', label: 'Team Members' },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-2xl md:text-3xl font-display font-bold text-accent mb-1">
                                            <CountUp target={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-xs text-foreground-muted uppercase tracking-wide">{stat.label}</div>
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

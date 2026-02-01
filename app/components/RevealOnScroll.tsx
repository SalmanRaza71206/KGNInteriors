'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
    delay?: number;
    duration?: number;
    threshold?: number;
}

export default function RevealOnScroll({
    children,
    className = '',
    animation = 'fadeUp',
    delay = 0,
    duration = 0.8,
    threshold = 0.2,
}: RevealOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const animations = {
            fadeUp: { y: 60, opacity: 0 },
            fadeIn: { opacity: 0 },
            slideLeft: { x: -80, opacity: 0 },
            slideRight: { x: 80, opacity: 0 },
            scale: { scale: 0.8, opacity: 0 },
        };

        const initial = animations[animation];

        gsap.set(element, initial);

        gsap.to(element, {
            ...Object.fromEntries(Object.keys(initial).map(key => [key, key === 'opacity' ? 1 : 0])),
            scale: animation === 'scale' ? 1 : undefined,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: `top ${100 - threshold * 100}%`,
                toggleActions: 'play none none none',
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === element) {
                    trigger.kill();
                }
            });
        };
    }, [animation, delay, duration, threshold]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

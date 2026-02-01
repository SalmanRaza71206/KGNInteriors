'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Note: SplitText is a GSAP Club plugin. We'll use a manual implementation instead.

interface AnimatedTextProps {
    text: string;
    className?: string;
    animation?: 'chars' | 'words' | 'lines';
    delay?: number;
    stagger?: number;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export default function AnimatedText({
    text,
    className = '',
    animation = 'words',
    delay = 0,
    stagger = 0.05,
    tag: Tag = 'span',
}: AnimatedTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const elements = container.querySelectorAll('.anim-item');

        gsap.set(elements, {
            y: 40,
            opacity: 0,
            rotateX: -20,
        });

        gsap.to(elements, {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger,
            delay,
            ease: 'power3.out',
        });
    }, [delay, stagger, text]);

    const renderContent = () => {
        if (animation === 'chars') {
            return text.split('').map((char, i) => (
                <span
                    key={i}
                    className="anim-item inline-block"
                    style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ));
        }

        if (animation === 'words') {
            return text.split(' ').map((word, i) => (
                <span key={i} className="anim-item inline-block mr-[0.25em]">
                    {word}
                </span>
            ));
        }

        // lines
        return text.split('\n').map((line, i) => (
            <span key={i} className="anim-item block">
                {line}
            </span>
        ));
    };

    return (
        <Tag className={className}>
            <span ref={containerRef} className="inline-block" style={{ perspective: '1000px' }}>
                {renderContent()}
            </span>
        </Tag>
    );
}

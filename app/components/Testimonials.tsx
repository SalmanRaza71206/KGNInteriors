'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Homeowner',
        content: 'KGN Interiors transformed our terrace into a beautiful outdoor living space. The retractable awning they installed is not only functional but adds a touch of elegance to our home. Highly recommended!',
        rating: 5,
    },
    {
        id: 2,
        name: 'Rajesh Mehta',
        role: 'Business Owner',
        content: 'We hired KGN for our corporate office blinds project. Their professionalism and attention to detail exceeded our expectations. The zebra blinds look stunning and work flawlessly.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Anita Desai',
        role: 'Interior Designer',
        content: 'As an interior designer, I am very particular about quality. KGN Interiors consistently delivers premium products and impeccable installation. They are my go-to partner for awnings and blinds.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Mohammed Khan',
        role: 'Restaurant Owner',
        content: 'The drop awnings KGN installed for our restaurant have been perfect for our outdoor seating area. They withstand all weather conditions and look beautiful. Great investment!',
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoPlay = () => {
        intervalRef.current = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
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
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        startAutoPlay();
    };

    const handleNext = () => {
        stopAutoPlay();
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        startAutoPlay();
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    return (
        <section id="testimonials" className="section">
            <div className="container">
                {/* Section Header */}
                <RevealOnScroll className="text-center mb-16">
                    <div className="section-label justify-center">
                        <span>Client Stories</span>
                    </div>
                    <h2 className="text-foreground mb-4">What Our Clients Say</h2>
                    <p className="max-w-2xl mx-auto">
                        Don&apos;t just take our word for it. Here&apos;s what our valued clients
                        have to say about their experience with KGN Interiors.
                    </p>
                </RevealOnScroll>

                {/* Testimonial Slider */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="w-full"
                            >
                                <div className="bg-background-secondary p-8 md:p-12 text-center rounded-lg">
                                    {/* Quote Icon */}
                                    <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center text-accent opacity-50">
                                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex justify-center gap-1 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-accent"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Testimonial Content */}
                                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                                        &ldquo;{testimonials[currentIndex].content}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div>
                                        <h4 className="text-foreground font-display font-semibold">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-sm text-foreground-muted">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        {/* Prev Button */}
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors duration-300"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        stopAutoPlay();
                                        setDirection(i > currentIndex ? 1 : -1);
                                        setCurrentIndex(i);
                                        startAutoPlay();
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-accent' : 'bg-border hover:bg-foreground-muted'
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors duration-300"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

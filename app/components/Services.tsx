'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const services = [
    {
        id: 1,
        title: 'Terrace Awnings',
        description: 'Premium retractable awnings that transform your terrace into an elegant outdoor living space.',
        image: 'https://res.cloudinary.com/dzlvmbajq/image/upload/v1769971024/677e69ae4d15448bfdb2e05e_65e68b5968e51e76cfe668f5_window_20awning_20ideas_sqlyn5.webp',
    },
    {
        id: 2,
        title: 'Window Awnings',
        description: 'Stylish window coverings that provide shade, reduce energy costs, and enhance your facade.',
        image: 'https://images.pexels.com/photos/374815/pexels-photo-374815.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        id: 3,
        title: 'Roller & Zebra Blinds',
        description: 'Modern blinds with precise light control and contemporary aesthetics for any interior.',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        id: 4,
        title: 'Car Parking Shades',
        description: 'Durable and elegant car parking solutions including tensile structures.',
        image: 'https://images.pexels.com/photos/8961000/pexels-photo-8961000.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        id: 5,
        title: 'Tensile Structures',
        description: 'Custom designed tensile membrane structures for large shading requirements.',
        image: 'https://images.pexels.com/photos/209065/pexels-photo-209065.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        id: 6,
        title: 'Drop Awnings',
        description: 'Vertical drop awnings perfect for balconies, patios, and commercial spaces.',
        image: 'https://images.pexels.com/photos/602399/pexels-photo-602399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section id="services" ref={sectionRef} className="section bg-background-secondary">
            <div className="container">
                {/* Section Header */}
                <RevealOnScroll className="mb-12 md:mb-16">
                    <div className="section-label">
                        <span>Our Expertise</span>
                    </div>
                    <h2 className="mb-4 text-foreground">
                        Premium Shading Solutions
                    </h2>
                    <p className="max-w-2xl text-sm md:text-base text-foreground-muted">
                        We specialize in high-quality awnings, blinds, and tensile structures tailored
                        to your specific needs.
                    </p>
                </RevealOnScroll>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="group relative overflow-hidden rounded-xl bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="service-card-image overflow-hidden bg-gray-100">
                                <div
                                    className="h-44 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 md:h-48"
                                    data-image={service.image}
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-4 p-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-sm text-accent">
                                        {String(service.id).padStart(2, '0')}
                                    </div>
                                    <h4 className="text-base md:text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                                        {service.title}
                                    </h4>
                                </div>
                                <p className="text-sm leading-relaxed text-foreground-muted">
                                    {service.description}
                                </p>

                                {/* Learn More Link */}
                                <button className="flex items-center gap-2 text-accent text-sm font-medium">
                                    <span>Enquire Now</span>
                                    <svg
                                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

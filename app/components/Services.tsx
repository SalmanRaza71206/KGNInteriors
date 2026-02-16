'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const services = [
    {
        id: 1,
        title: 'Terrace Awnings',
        description: 'Premium retractable awnings that transform your terrace into an elegant outdoor living space.',
        image: 'https://res.cloudinary.com/dmtf3cng1/image/upload/v1770485277/7855f3a96250b8d2c2887b5c8f1b1574_lkacll.jpg',
    },
    {
        id: 2,
        title: 'Window Awnings',
        description: 'Stylish window coverings that provide shade, reduce energy costs, and enhance your facade.',
        image: 'https://i.pinimg.com/736x/f2/b1/80/f2b1804689a9b51b7c77f96808fe7562.jpg',
    },
    {
        id: 3,
        title: 'Roller & Zebra Blinds',
        description: 'Modern blinds with precise light control and contemporary aesthetics for any interior.',
        image: 'https://i.pinimg.com/736x/da/ce/3f/dace3fcae7c21f97608bc51ba6130a24.jpg',
    },
    {
        id: 4,
        title: 'Car Parking Shades',
        description: 'Durable and elegant car parking solutions including tensile structures.',
        image: 'https://res.cloudinary.com/dmtf3cng1/image/upload/v1770494173/6f9441f9738dc8ae1b1cffebf318a75f_vfst7f.jpg',
    },
    {
        id: 5,
        title: 'Tensile Structures',
        description: 'Custom designed tensile membrane structures for large shading requirements.',
        image: 'https://res.cloudinary.com/dmtf3cng1/image/upload/v1770494748/8a089ade1a77a395891ad2679467ce08_dazjuo.jpg',
    },
    {
        id: 6,
        title: 'Drop Awnings',
        description: 'Vertical drop awnings perfect for balconies, patios, and commercial spaces.',
        image: 'https://res.cloudinary.com/dmtf3cng1/image/upload/v1770495189/8870df577d397b311c2f7ae42fcb7def_ipibyv.jpg',
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
                                    className="h-44  bg-cover bg-center transition-transform duration-700 group-hover:scale-110 md:h-48"
                                    style={{ backgroundImage: `url(${service.image})` }}
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
                                <button className="flex items-center gap-2 text-accent text-sm font-medium cursor-pointer">
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

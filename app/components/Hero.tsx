'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const HERO_IMAGES = [
 
   'https://res.cloudinary.com/dzlvmbajq/image/upload/v1771670323/1_wjrsef.jpg',
    'https://res.cloudinary.com/dzlvmbajq/image/upload/v1771670395/4_i2ybog.jpg',
    'https://i.pinimg.com/736x/c9/a5/d6/c9a5d6e5597375c48a300c333dae1167.jpg',
    "https://res.cloudinary.com/dzlvmbajq/image/upload/v1771671562/windowAwning_zbdtz7.jpg"
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
            className="relative flex min-h-screen items-center overflow-hidden"
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
                            scale: i === currentSlide ? 1 : 1.05,
                        }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />
                ))}
            </div>

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0  z-1 bg-linear-to-t from-[#1a1a1a]/95 via-[#1a1a1a]/75 to-transparent pointer-events-none" />
            <div className="absolute inset-0 z-1 bg-linear-to-t from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/30 pointer-events-none" />
            
            {/* Accent Gradient Overlay */}
            <div className="absolute inset-0 z-1 bg-linear-to-t from-[#d97745]/10 via-transparent to-transparent pointer-events-none" />


            {/* Main Content */}
            <div className="relative z-2 flex w-full flex-col px-8 md:px-16 lg:px-24 py-20">

                <div className="flex max-w-4xl flex-col gap-6">
                    {/* Overline Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 w-fit px-2 xs:px-4 py-1 xs:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#d97745] animate-pulse" />
                        <span className="text-xs font-medium tracking-widest uppercase text-white/90 whitespace-nowrap text-nowrap">Premium Shading Solutions</span>
                    </motion.div>

                    {/* Main Headline */}
                    <div className="space-y-2 ">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="text-white leading-[1.1] font-bold"
                            >
                                Premium Awnings
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className=" font-bold bg-linear-to-r from-[#d97745] via-[#e89565] to-[#d97745] bg-clip-text text-transparent"
                            >
                                & Tensile Structures
                            </motion.h1>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="max-w-xl md:text-lg text-white!"
                    >
                        Transform your outdoor spaces with our high-quality retractable awnings,
                        tensile car parking shades, and modern blinds. Expert installation
                        guaranteed.
                    </motion.p>
                  

                    {/* CTA Buttons */}
                    

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                    >
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#d97745] to-[#b45328] text-white font-semibold rounded-lg shadow-lg shadow-[#d97745]/25 hover:shadow-xl hover:shadow-[#d97745]/30 hover:scale-[1.02] transition-all duration-300"
                        >
                            <span>Get a Free Quote</span>
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                            href="tel:+91 9711595758"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>Call Now</span>
                        </a>
                    </motion.div>

                    {/* Secondary contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className="flex items-center gap-4 text-sm text-white/60 flex-wrap"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            <a
                                href="https://wa.me/919711595758"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="font-medium text-white/80 hover:text-[#d97745] transition-colors whitespace-nowrap text-nowrap"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                        <div>
                            <span className="w-1 h-1 inline-block align-middle mb-0.5 mr-3 rounded-full bg-white/90" />
                            <span className='whitespace-nowrap text-nowrap'>Mon–Sat, 9 AM – 7 PM</span>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-8 md:mt-12 lg:mt-16 pt-6 md:pt-8 border-t border-white/10"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
                        {[
                            { value: '15+', label: 'Years Experience' },
                            { value: '500+', label: 'Projects Done' },
                            { value: '98%', label: 'Satisfaction' },
                            { value: '50+', label: 'Expert Team' },
                        ].map((stat, i) => (
                            <div key={i} className="hero-stat flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4">
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-xs md:text-sm text-white/50 tracking-wide uppercase leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-3 flex flex-col items-center gap-2"
            >
                <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-white/30 flex justify-center pt-1.5 md:pt-2">
                    <motion.div
                        className="w-1 h-1.5 md:h-2 bg-[#d97745] rounded-full"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
                <span className="text-[10px] md:text-xs text-white/40 tracking-widest uppercase">Scroll</span>
            </motion.div>

            {/* Decorative Accent Line */}
            <div className="absolute bottom-0 left-6 md:left-12 h-40 z-3 flex items-end pointer-events-none">
                <div
                    className="hero-line w-px h-full bg-linear-to-t from-[#d97745] to-transparent"
                    style={{ transformOrigin: 'bottom' }}
                />
            </div>

            {/* Side Accent */}
            <div className="absolute top-1/2 -translate-y-1/2 right-12 z-3 hidden lg:flex flex-col items-center gap-4 pointer-events-none">
                <div className="w-px h-16 bg-linear-to-b from-transparent to-white/20" />
                <span className="text-xs text-white/40 tracking-widest uppercase [writing-mode:vertical-lr]">KGN Interiors</span>
                <div className="w-px h-16 bg-linear-to-b from-white/20 to-transparent" />
            </div>
        </section>
    );
}

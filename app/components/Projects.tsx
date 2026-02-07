'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const projects = [
    {
        id: 1,
        title: 'Modern Villa Terrace',
        category: 'Terrace Awnings',
        description: 'Retractable awning system for luxury villa',
        image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200',
        video: 'https://www.youtube.com/shorts/EqSngOeiZT8?feature=share'
    },
    {
        id: 2,
        title: 'Corporate Office Blinds',
        category: 'Roller Blinds',
        description: 'Automated zebra blinds for premium office space',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        video: 'https://www.youtube.com/shorts/6qvZNEYlBJE?feature=share'
    },
    {
        id: 3,
        title: 'Residential Parking',
        category: 'Car Parking',
        description: 'Custom tensile structure for residential complex',
        image: 'https://images.pexels.com/photos/8961000/pexels-photo-8961000.jpeg?auto=compress&cs=tinysrgb&w=1200',
        video: 'https://www.youtube.com/shorts/qu7Uyk2Kv7M?feature=share'
    },
    {
        id: 4,
        title: 'Apartment Balconies',
        category: 'Drop Awnings',
        description: 'Privacy drop awnings for high-rise apartment',
        image: 'https://images.pexels.com/photos/602399/pexels-photo-602399.jpeg?auto=compress&cs=tinysrgb&w=1200',
        video: 'https://www.youtube.com/shorts/6V_4VzjNumg?feature=share'
    },
    {
        id: 5,
        title: 'Shopping Complex',
        category: 'Tensile Structures',
        description: 'Large scale tensile canopy for walkway',
        image: 'https://images.pexels.com/photos/209065/pexels-photo-209065.jpeg?auto=compress&cs=tinysrgb&w=1200',
        video: 'https://www.youtube.com/shorts/t1OVFeOBZv4?feature=share'
    },
    {
        id: 6,
        title: 'Boutique Hotel',
        category: 'Window Awnings',
        description: 'Elegand window awnings for heritage property',
        image: 'https://images.pexels.com/photos/374815/pexels-photo-374815.jpeg?auto=compress&cs=tinysrgb&w=1200',
        video: 'https://www.youtube.com/shorts/75CVX7Y5wQo?feature=share'
    }
];

const categories = ['All', 'Terrace Awnings', 'Roller Blinds', 'Car Parking', 'Tensile Structures', 'Window Awnings'];

const getEmbedUrl = (url: string) => {
    if (!url) return null;
    let videoId = '';

    if (url.includes('youtube.com/shorts/')) {
        videoId = url.split('shorts/')[1].split('?')[0];
    } else if (url.includes('v=')) {
        videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('embed/')[1].split('?')[0];
    }

    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&fs=0`;
    }
    return null;
};

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" ref={sectionRef} className="section bg-background">
            <div className="container">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <RevealOnScroll>
                        <div className="section-label">
                            <span>Our Portfolio</span>
                        </div>
                        <h2 className="text-foreground">Featured Projects</h2>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.2}>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === category
                                        ? 'bg-accent text-white'
                                        : 'bg-background-secondary text-foreground-muted hover:text-foreground hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, i) => {
                            const embedUrl = getEmbedUrl(project.video || '');
                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative aspect-4/3 overflow-hidden cursor-pointer rounded-lg"
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    {/* Background Image/Video */}
                                    {embedUrl ? (
                                        <div className="absolute inset-0 overflow-hidden">
                                            <iframe
                                                src={embedUrl}
                                                className="absolute top-1/2 left-1/2 min-h-[220%] min-w-[500%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                                allow="autoplay; encrypted-media; loop"
                                                title={project.title}
                                                style={{ border: 0 }}
                                            />
                                        </div>
                                    ) : project.video ? (
                                        <video
                                            src={project.video}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        />
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <motion.span
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-white/80 text-xs tracking-wider uppercase mb-2 font-medium"
                                        >
                                            {project.category}
                                        </motion.span>
                                        <motion.h4
                                            className="text-white text-xl font-semibold mb-1"
                                        >
                                            {project.title}
                                        </motion.h4>
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: hoveredProject === project.id ? 1 : 0,
                                                height: hoveredProject === project.id ? 'auto' : 0
                                            }}
                                            className="text-white/70 text-sm overflow-hidden"
                                        >
                                            {project.description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* View More Button */}
                <RevealOnScroll className="text-center mt-12" delay={0.2}>
                    <button className="btn btn-outline border-border hover:bg-background-secondary">
                        <span>View All Projects</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </RevealOnScroll>
            </div>
        </section>
    );
}

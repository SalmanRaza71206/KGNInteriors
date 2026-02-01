'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        if (formRef.current) {
            formRef.current.reset();
        }
        alert('Thank you for your message! We will get back to you soon.');
    };

    const inputClasses = (field: string) => `
    w-full bg-transparent border-b-2 py-4 px-0 text-foreground
    placeholder:text-foreground-muted focus:outline-none transition-colors duration-300
    ${focusedField === field ? 'border-accent' : 'border-border'}
  `;

    return (
        <section id="contact" className="section bg-background-secondary">
            <div className="container">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left Column - Info */}
                    <div>
                        <RevealOnScroll>
                            <div className="section-label">
                                <span>Get in Touch</span>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.1}>
                            <h2 className="mb-4 text-foreground">
                                Let&apos;s Create Something Beautiful Together
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.2}>
                            <p className="mb-8 text-sm text-foreground-muted md:text-base">
                                Ready to transform your space? Contact us today for a free consultation
                                and quote. Our team of experts is here to bring your vision to life.
                            </p>
                        </RevealOnScroll>

                        {/* Quick CTAs */}
                        <RevealOnScroll delay={0.25}>
                            <div className="mb-8 flex flex-wrap items-center gap-3">
                                <a
                                    href="tel:+919876543210"
                                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-foreground"
                                >
                                    <span>Call Us</span>
                                    <span className="text-[11px] text-foreground-muted">+91 98765 43210</span>
                                </a>
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center gap-2 rounded-full border border-transparent bg-accent px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-background hover:bg-accent-hover"
                                >
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </RevealOnScroll>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ),
                                    label: 'Visit Us',
                                    value: '123 Design Street, Mumbai, India 400001',
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    ),
                                    label: 'Call Us',
                                    value: '+91 98765 43210',
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    ),
                                    label: 'Email Us',
                                    value: 'info@kgninteriors.com',
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    label: 'Working Hours',
                                    value: 'Mon - Sat: 9:00 AM - 7:00 PM',
                                },
                            ].map((item, i) => (
                                <RevealOnScroll key={i} delay={0.3 + i * 0.1}>
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm text-foreground-muted mb-1">{item.label}</div>
                                            <div className="text-foreground">{item.value}</div>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>

                        {/* Social Links */}
                        <RevealOnScroll delay={0.7}>
                            <div className="mt-8 flex gap-4">
                                {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                                    <a
                                        key={social}
                                        href={`#${social}`}
                                        className="w-10 h-10 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-all duration-300"
                                        aria-label={social}
                                    >
                                        {social === 'facebook' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        )}
                                        {social === 'instagram' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                            </svg>
                                        )}
                                        {social === 'twitter' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        )}
                                        {social === 'linkedin' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right Column - Form */}
                    <RevealOnScroll animation="slideRight">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-background p-6 shadow-sm lg:p-8"
                        >
                            <h3 className="mb-6 text-lg font-semibold text-foreground">Send Us a Message</h3>

                            <div className="space-y-6">
                                {/* Name */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        className={inputClasses('name')}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        className={inputClasses('email')}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>

                                {/* Phone */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Your Phone"
                                        className={inputClasses('phone')}
                                        onFocus={() => setFocusedField('phone')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>

                                {/* Service Select */}
                                <div className="relative">
                                    <label className="sr-only" htmlFor="service">
                                        Select a service
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        className={`${inputClasses('service')} appearance-none cursor-pointer`}
                                        onFocus={() => setFocusedField('service')}
                                        onBlur={() => setFocusedField(null)}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select a Service</option>
                                        <option value="terrace-awnings">Terrace Awnings</option>
                                        <option value="window-awnings">Window Awnings</option>
                                        <option value="roller-blinds">Roller/Zebra Blinds</option>
                                        <option value="car-parking">Car Parking</option>
                                        <option value="drop-awnings">Drop Awnings</option>
                                        <option value="interior-works">Interior Works</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <svg
                                        className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted pointer-events-none"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Your Message"
                                        required
                                        className={`${inputClasses('message')} resize-none`}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn btn-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Send Message
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}

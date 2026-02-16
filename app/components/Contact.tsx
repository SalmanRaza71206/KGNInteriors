'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            const data = await response.json();
            console.log('Email sent successfully:', data);

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                serviceType: '',
                message: '',
            });

            alert('Thank you for your message! We will get back to you soon.');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later or contact us directly at [EMAIL_ADDRESS]');
        } finally {
            setIsSubmitting(false);
        }

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
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 ">
                    {/* Left Column - Info */}
                    <div>
                        <RevealOnScroll>
                            <div className="section-label">
                                <span>Get in Touch</span>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.1}>
                            <h2 className="mb-4 text-5xl">
                                Let&apos;s Create Something Beautiful Together
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.2}>
                            <p className="mb-6 text-sm text-foreground-muted md:text-base">
                                Ready to transform your space? Contact us today for a free consultation
                                and quote. Our team of experts is here to bring your vision to life.
                            </p>
                        </RevealOnScroll>


                        {/* Contact Info */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                                    value: '+91 97115 95758',
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
                                        <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent group-hover:text-background transition-all duration-300">
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

                        {/* Google Map */}
                        <RevealOnScroll delay={0.4}>
                            <div className="mt-6 rounded-2xl overflow-hidden aspect-video border border-border">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="transition-all duration-300"
                                ></iframe>
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
                            <h3 className="mb-6 text-lg font-semibold text-foreground">Get in touch</h3>

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
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Service Select */}
                                <div className="relative">
                                    <label className="sr-only" htmlFor="service">
                                        Select a service
                                    </label>
                                    <select
                                        id="service"
                                        name="serviceType"
                                        required
                                        className={`${inputClasses('serviceType')} appearance-none cursor-pointer`}
                                        onFocus={() => setFocusedField('serviceType')}
                                        onBlur={() => setFocusedField(null)}
                                        value={formData.serviceType}
                                        onChange={handleChange}

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
                                        value={formData.message}
                                        onChange={handleChange}
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

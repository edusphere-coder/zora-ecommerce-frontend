'use client';

import React, { useState } from 'react';
import { Container, Section } from '../ui/Container';
import { Button } from '../ui/Button';

export const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter signup
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setEmail('');
        }, 3000);
    };

    return (
        <Section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-[var(--font-display)] font-bold text-white">
                            Stay in the Loop
                        </h2>
                        <p className="text-lg text-white/80">
                            Subscribe to our newsletter and be the first to know about new arrivals,
                            exclusive offers, and fashion tips.
                        </p>
                    </div>

                    {/* Form */}
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="flex-1 px-6 py-4 rounded-[var(--radius-lg)] bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                                />
                                <Button
                                    type="submit"
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white text-[var(--color-primary)] hover:bg-white/90"
                                >
                                    Subscribe
                                </Button>
                            </div>
                            <p className="text-sm text-white/60 mt-4">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </form>
                    ) : (
                        <div className="max-w-md mx-auto p-6 rounded-[var(--radius-lg)] bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in">
                            <div className="flex items-center justify-center space-x-2 text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-medium">Thank you for subscribing!</span>
                            </div>
                        </div>
                    )}

                    {/* Social Proof */}
                    <div className="flex items-center justify-center space-x-2 text-white/80">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-xs font-medium"
                                >
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <span className="text-sm">Join 10,000+ fashion enthusiasts</span>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

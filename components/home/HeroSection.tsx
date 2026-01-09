import React from 'react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export const HeroSection: React.FC = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: 'url(/images/hero-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

            {/* Content */}
            <Container className="relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
                    {/* Badge */}
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                            New Collection 2026
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-[var(--font-display)] font-bold leading-tight">
                        <span className="text-white">Elevate Your Style</span>
                        <br />
                        <span className="text-white">With Premium Fashion</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-balance">
                        Discover the finest collection of luxury clothing that defines elegance and sophistication
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button variant="primary" size="lg">
                            Shop Now
                        </Button>
                        <Button variant="outline" size="lg">
                            View Collections
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
                        <div className="space-y-1">
                            <div className="text-3xl md:text-4xl font-bold text-gradient">500+</div>
                            <div className="text-sm text-[var(--color-text-secondary)]">Premium Items</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl md:text-4xl font-bold text-gradient">50K+</div>
                            <div className="text-sm text-[var(--color-text-secondary)]">Happy Customers</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl md:text-4xl font-bold text-gradient">4.9★</div>
                            <div className="text-sm text-[var(--color-text-secondary)]">Average Rating</div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
                <svg className="w-6 h-6 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

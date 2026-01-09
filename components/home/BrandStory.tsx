import React from 'react';
import { Container, Section } from '../ui/Container';
import { Button } from '../ui/Button';

export const BrandStory: React.FC = () => {
    return (
        <Section className="bg-[var(--color-surface)]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative h-[500px] rounded-[var(--radius-xl)] overflow-hidden">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] opacity-20"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-4 p-8">
                                <div className="text-8xl font-[var(--font-display)] font-bold text-gradient">
                                    ZORA
                                </div>
                                <p className="text-[var(--color-text-secondary)] text-lg">
                                    Crafting Excellence Since 2020
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-[var(--font-display)] font-bold text-white">
                                Our Story
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" />
                        </div>

                        <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                            <p>
                                At Zora, we believe that fashion is more than just clothing—it's a form of self-expression,
                                a statement of individuality, and a celebration of craftsmanship.
                            </p>
                            <p>
                                Founded with a passion for premium quality and timeless design, we curate collections that
                                blend contemporary aesthetics with classic elegance. Every piece in our collection is
                                carefully selected to ensure it meets our high standards of quality, comfort, and style.
                            </p>
                            <p>
                                Our commitment extends beyond fashion. We're dedicated to sustainable practices, ethical
                                sourcing, and creating pieces that stand the test of time—both in style and durability.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button variant="primary" size="lg">
                                Learn More About Us
                            </Button>
                            <Button variant="ghost" size="lg">
                                Our Values
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--color-border)]">
                            <div>
                                <div className="text-2xl font-bold text-gradient">6+</div>
                                <div className="text-sm text-[var(--color-text-muted)]">Years</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gradient">100%</div>
                                <div className="text-sm text-[var(--color-text-muted)]">Quality</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gradient">50K+</div>
                                <div className="text-sm text-[var(--color-text-muted)]">Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

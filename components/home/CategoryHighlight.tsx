import React from 'react';
import { Container, Section } from '../ui/Container';

export const CategoryHighlight: React.FC = () => {
    const categories = [
        {
            id: 1,
            name: "Men",
            description: "Sophisticated menswear",
            image: "/images/collection-men.png",
            link: "#men",
        },
        {
            id: 2,
            name: "Women",
            description: "Elegant fashion",
            image: "/images/collection-women.png",
            link: "#women",
        },
        {
            id: 3,
            name: "Accessories",
            description: "Complete your look",
            image: "/images/collection-accessories.png",
            link: "#accessories",
        },
    ];

    return (
        <Section className="bg-[var(--color-background)]">
            <Container>
                {/* Section Header */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-[var(--font-display)] font-bold text-white">
                        Shop by Category
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)]">
                        Find exactly what you're looking for
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <a
                            key={category.id}
                            href={category.link}
                            className="group relative h-96 rounded-[var(--radius-xl)] overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${category.image})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-[var(--font-display)] font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                                    {category.name}
                                </h3>
                                <p className="text-[var(--color-text-secondary)] mb-4 transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-8px]">
                                    {category.description}
                                </p>
                                <div className="flex items-center text-[var(--color-primary)] font-medium transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-8px]">
                                    <span>Explore</span>
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

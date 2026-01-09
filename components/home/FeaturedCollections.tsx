import React from 'react';
import { Container, Section } from '../ui/Container';
import { Card, CardImage, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export const FeaturedCollections: React.FC = () => {
    const collections = [
        {
            id: 1,
            title: "Women's Collection",
            description: "Elegant and sophisticated pieces for the modern woman",
            image: "/images/collection-women.png",
            itemCount: "150+ Items",
        },
        {
            id: 2,
            title: "Men's Collection",
            description: "Premium menswear that exudes confidence and style",
            image: "/images/collection-men.png",
            itemCount: "120+ Items",
        },
        {
            id: 3,
            title: "Accessories",
            description: "Complete your look with our curated accessories",
            image: "/images/collection-accessories.png",
            itemCount: "80+ Items",
        },
    ];

    return (
        <Section id="collections" className="bg-[var(--color-background)]">
            <Container>
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-[var(--font-display)] font-bold">
                        <span className="text-gradient">Featured Collections</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Explore our carefully curated collections designed for every occasion
                    </p>
                </div>

                {/* Collections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {collections.map((collection, index) => (
                        <Card
                            key={collection.id}
                            variant="elevated"
                            className="group cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative overflow-hidden">
                                <CardImage
                                    src={collection.image}
                                    alt={collection.title}
                                    className="h-96"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6 w-full">
                                        <Button variant="secondary" className="w-full">
                                            Explore Collection
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                                            {collection.title}
                                        </h3>
                                        <span className="text-sm text-[var(--color-primary)] font-medium">
                                            {collection.itemCount}
                                        </span>
                                    </div>
                                    <p className="text-[var(--color-text-secondary)] text-sm">
                                        {collection.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

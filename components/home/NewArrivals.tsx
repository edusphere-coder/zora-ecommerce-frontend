import React from 'react';
import { Container, Section } from '../ui/Container';
import { Card, CardImage, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const NewArrivals: React.FC = () => {
    const products = [
        {
            id: 1,
            name: "Premium Leather Jacket",
            price: "$299",
            image: "/images/product-jacket.png",
            isNew: true,
            category: "Outerwear",
        },
        {
            id: 2,
            name: "Elegant Evening Dress",
            price: "$249",
            image: "/images/product-dress.png",
            isNew: true,
            category: "Dresses",
        },
        {
            id: 3,
            name: "Classic Wool Coat",
            price: "$349",
            image: "/images/product-jacket.png",
            isNew: true,
            category: "Outerwear",
        },
        {
            id: 4,
            name: "Silk Blouse",
            price: "$159",
            image: "/images/product-dress.png",
            isNew: true,
            category: "Tops",
        },
    ];

    return (
        <Section className="bg-[var(--color-surface)]">
            <Container>
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="space-y-2 text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-[var(--font-display)] font-bold text-white">
                            New Arrivals
                        </h2>
                        <p className="text-[var(--color-text-secondary)]">
                            Fresh styles just landed
                        </p>
                    </div>
                    <Button variant="outline">View All Products</Button>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <Card
                            key={product.id}
                            variant="glass"
                            className="group"
                            style={{ animationDelay: `${index * 75}ms` }}
                        >
                            <div className="relative">
                                <CardImage
                                    src={product.image}
                                    alt={product.name}
                                    className="h-80"
                                />
                                {product.isNew && (
                                    <div className="absolute top-4 left-4">
                                        <Badge variant="secondary">NEW</Badge>
                                    </div>
                                )}
                                {/* Quick Add Button - Shows on Hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Button variant="primary" size="sm">
                                        Quick View
                                    </Button>
                                </div>
                            </div>

                            <CardContent className="space-y-3">
                                <div>
                                    <p className="text-xs text-[var(--color-primary)] font-medium uppercase tracking-wide">
                                        {product.category}
                                    </p>
                                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mt-1">
                                        {product.name}
                                    </h3>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-gradient">
                                        {product.price}
                                    </span>
                                    <button
                                        className="p-2 rounded-full hover:bg-[var(--color-surface-elevated)] transition-colors"
                                        aria-label="Add to cart"
                                    >
                                        <svg className="w-5 h-5 text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

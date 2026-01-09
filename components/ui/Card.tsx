import React from 'react';

interface CardProps {
    children: React.ReactNode;
    variant?: 'default' | 'glass' | 'elevated';
    hover?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
    children,
    variant = 'default',
    hover = true,
    className = '',
    style,
}) => {
    const baseStyles = 'rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300';

    const variants = {
        default: 'bg-[var(--color-surface)] border border-[var(--color-border)]',
        glass: 'glass',
        elevated: 'bg-[var(--color-surface-elevated)] shadow-[var(--shadow-lg)]',
    };

    const hoverStyles = hover ? 'hover:transform hover:scale-[1.02] hover:shadow-[var(--shadow-xl)]' : '';

    return (
        <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`} style={style}>
            {children}
        </div>
    );
};

interface CardImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => {
    return (
        <div className={`relative w-full h-64 overflow-hidden ${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
        </div>
    );
};

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
    return (
        <div className={`p-6 ${className}`}>
            {children}
        </div>
    );
};

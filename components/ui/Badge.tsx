import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    size = 'sm',
    className = '',
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full';

    const variants = {
        primary: 'bg-[var(--color-primary)] text-white',
        secondary: 'bg-[var(--color-secondary)] text-white',
        success: 'bg-[var(--color-success)] text-white',
        warning: 'bg-[var(--color-warning)] text-white',
        error: 'bg-[var(--color-error)] text-white',
    };

    const sizes = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
            {children}
        </span>
    );
};

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    isLoading = false,
    className = '',
    disabled,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white hover:shadow-[var(--shadow-glow)] hover:scale-105',
        secondary: 'bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-light)] text-white hover:shadow-[var(--shadow-glow-pink)] hover:scale-105',
        outline: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
        ghost: 'text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)]',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm rounded-[var(--radius-md)]',
        md: 'px-6 py-3 text-base rounded-[var(--radius-lg)]',
        lg: 'px-8 py-4 text-lg rounded-[var(--radius-xl)]',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                </>
            ) : (
                children
            )}
        </button>
    );
};

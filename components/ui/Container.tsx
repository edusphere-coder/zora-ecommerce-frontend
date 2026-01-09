import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className = '',
    fullWidth = false,
}) => {
    return (
        <div className={`${fullWidth ? 'w-full' : 'container'} ${className}`}>
            {children}
        </div>
    );
};

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`section ${className}`}>
            {children}
        </section>
    );
};

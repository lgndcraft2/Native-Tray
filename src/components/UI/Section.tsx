import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`py-12 md:py-16 lg:py-24 ${className}`}>
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
};

export default Section;

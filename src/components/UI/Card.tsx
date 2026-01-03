import React from 'react';

interface CardProps {
    image?: string;
    title: string;
    subtitle?: string;
    description?: string;
    footer?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
    image,
    title,
    subtitle,
    description,
    footer,
    className = '',
    onClick
}) => {
    return (
        <div
            className={`overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg border border-stone-100 ${className}`}
            onClick={onClick}
        >
            {image && (
                <div className="aspect-video w-full overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            )}
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-stone-900 font-serif">{title}</h3>
                    {subtitle && <span className="text-sm font-medium text-primary">{subtitle}</span>}
                </div>
                {description && (
                    <p className="mb-4 text-sm text-stone-600 leading-relaxed">
                        {description}
                    </p>
                )}
                {footer && (
                    <div className="pt-4 border-t border-stone-100">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;

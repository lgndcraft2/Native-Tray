import React from 'react';
import Section from '../components/UI/Section';

const Events: React.FC = () => {
    return (
        <Section>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 font-serif">Events</h1>
                <p className="text-lg text-stone-600 text-stone-600 max-w-2xl mx-auto">
                    Join us for an evening of culture, music, and art.
                </p>
            </div>

            <div className="flex justify-center">
                <div className="max-w-2xl w-full overflow-hidden rounded-lg shadow-lg border border-stone-100">
                    <img
                        src="/NT_LAG-Menu-Mobile_10.png"
                        alt="Weekly Events Schedule"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Events;

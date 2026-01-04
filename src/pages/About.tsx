import React from 'react';
import Section from '../components/UI/Section';

const About: React.FC = () => {
    return (
        <>
            <div className="relative h-[60vh] flex items-center justify-center bg-stone-900 text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                        alt="African Culture"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="relative z-20 container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold font-serif mb-4">Our Story</h1>
                    <p className="text-xl max-w-2xl mx-auto text-stone-200">
                        More than just food. It's a journey through culture.
                    </p>
                </div>
            </div>

            <Section>
                <div className="max-w-3xl mx-auto space-y-8 text-lg text-stone-700 leading-relaxed font-serif">
                    <p>
                        <span className="text-4xl float-left mr-4 mt-2 font-bold text-primary font-serif">N</span>
                        ative Tray was born out of a desire to preserve and celebrate our rich cultural heritage.
                        In a fast-paced world, we provide a sanctuary where you can slow down and reconnect with your roots
                        through the universal language of food.
                    </p>
                    <p>
                        From the bustling streets of Lagos to the serene garden city of Port Harcourt, our locations are designed
                        to be more than just restaurants. They are cultural hubs where traditional meals are served with contemporary elegance,
                        where highlife music fills the air, and where art and fashion find a home.
                    </p>
                    <p>
                        Our mission is simple: <strong>To tell cultural stories.</strong>
                    </p>
                    <p>
                        We believe that every dish has a history, every ingredient has a purpose, and every meal is an opportunity to bond.
                        Whether you are enjoying our signature Fisherman Soup or sipping on fresh Palm Wine, you are partaking in a tradition
                        that has been passed down for generations.
                    </p>
                </div>
            </Section>
        </>
    );
};

export default About;

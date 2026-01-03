import React from 'react';
import Section from '../components/UI/Section';

const Gallery: React.FC = () => {
    const images = [
        "food,african",
        "restaurant,interior",
        "drink,cocktail",
        "food,spicy",
        "chef,cooking",
        "people,dining",
        "art,african",
        "fashion,african"
    ].map((tag, i) => ({
        id: i,
        src: `https://source.unsplash.com/800x800/?${tag}`,
        alt: tag.replace(',', ' ')
    }));

    return (
        <Section>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 font-serif">Gallery</h1>
                <p className="text-lg text-stone-600">
                    Glimpses of the Native Tray experience.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img) => (
                    <div key={img.id} className="aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Gallery;

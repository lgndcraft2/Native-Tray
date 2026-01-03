import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import menuImages from '../data/menu-images.json';
import SEO from '../components/Utils/SEO';

type LocationKey = 'lagos' | 'phc' | 'ojiji';
type MenuType = 'food' | 'drinks';

const Menu: React.FC = () => {
    const { state } = useLocation();
    const [activeLocation, setActiveLocation] = useState<LocationKey>((state?.locationKey as LocationKey) || 'lagos');
    const [activeType, setActiveType] = useState<MenuType>('food');

    const locations: { id: LocationKey; label: string }[] = [
        { id: 'lagos', label: 'Lagos (Lekki)' },
        { id: 'phc', label: 'PHC (GRA)' },
        { id: 'ojiji', label: 'PHC (Ojiji)' },
    ];

    const types: { id: MenuType; label: string }[] = [
        { id: 'food', label: 'Food Menu' },
        { id: 'drinks', label: 'Drinks Menu' },
    ];

    const currentImages = menuImages[activeLocation][activeType];

    return (
        <Section>
            <SEO title="Menu" description="Explore our delicious menu of traditional African dishes." />

            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4 font-serif">Our Menu</h1>
                <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                    Select your location to view the menu.
                </p>
            </div>

            {/* Location Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {locations.map((loc) => (
                    <Button
                        key={loc.id}
                        variant={activeLocation === loc.id ? 'primary' : 'outline'}
                        onClick={() => {
                            setActiveLocation(loc.id);
                            // Reset to food if switching to Ojiji which might not have drinks populated yet
                            if (loc.id === 'ojiji' && activeType === 'drinks' && menuImages['ojiji'].drinks.length === 0) {
                                setActiveType('food');
                            }
                        }}
                        className="min-w-[140px]"
                    >
                        {loc.label}
                    </Button>
                ))}
            </div>

            {/* Type Tabs (Food/Drink) */}
            <div className="flex justify-center gap-2 mb-12 border-b border-stone-200 pb-4 max-w-md mx-auto">
                {types.map((type) => (
                    <button
                        key={type.id}
                        onClick={() => setActiveType(type.id)}
                        disabled={activeLocation === 'ojiji' && type.id === 'drinks' && menuImages['ojiji'].drinks.length === 0}
                        className={`px-6 py-2 text-sm font-medium transition-colors relative ${activeType === type.id
                            ? 'text-primary'
                            : 'text-stone-500 hover:text-stone-800'
                            } ${activeLocation === 'ojiji' && type.id === 'drinks' && menuImages['ojiji'].drinks.length === 0
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                            }`}
                    >
                        {type.label}
                        {activeType === type.id && (
                            <span className="absolute bottom-[-17px] left-0 w-full h-0.5 bg-primary" />
                        )}
                    </button>
                ))}
            </div>

            {/* Menu Images Grid */}
            <div className="grid gap-8 max-w-4xl mx-auto">
                {currentImages && currentImages.length > 0 ? (
                    currentImages.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg border border-stone-100">
                            <img
                                src={src}
                                alt={`${activeLocation} ${activeType} menu page ${index + 1}`}
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 bg-stone-50 rounded-lg">
                        <p className="text-stone-500">Menu items pending update.</p>
                    </div>
                )}
            </div>
        </Section>
    );
};

export default Menu;

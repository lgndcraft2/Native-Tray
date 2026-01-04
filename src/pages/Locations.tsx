import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import locationsData from '../data/locations.json';

const Locations: React.FC = () => {
    return (
        <>
            <Section className="bg-stone-50">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-serif">Our Locations</h1>
                    <p className="text-lg text-stone-600">
                        Visit us at any of our branches for an unforgettable dining experience.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {locationsData.map((location) => (
                        <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-stone-100">
                            <div className="h-48 bg-stone-200 relative">
                                {/* Placeholder for map or location image */}
                                <img
                                    src={location.image}
                                    alt={location.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-4 font-serif">{location.name}</h2>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-3 text-stone-600">
                                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>{location.address}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-stone-600">
                                        <Phone className="h-5 w-5 text-primary shrink-0" />
                                        <span>{location.phone}</span>
                                    </div>
                                    <div className="flex items-start gap-3 text-stone-600">
                                        <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p>Daily: 10:00 AM - 10:00 PM</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Link
                                        to="/menu"
                                        state={{ locationKey: location.id === 'lekki' ? 'lagos' : location.id === 'phc-gra' ? 'phc' : 'ojiji' }}
                                        className="flex-1"
                                    >
                                        <Button variant="outline" className="w-full">View Menu</Button>
                                    </Link>
                                    <a
                                        href={location.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <Button className="w-full">Get Directions</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section >
        </>
    );
};

export default Locations;

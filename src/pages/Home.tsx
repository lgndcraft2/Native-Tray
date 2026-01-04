import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import SEO from '../components/Utils/SEO';

const Home: React.FC = () => {
    return (
        <>
            <SEO title="Home" />
            {/* Hero Section */}
            <div className="relative flex min-h-[90vh] items-center justify-center bg-stone-900 text-center text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-black/85 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                        alt="Delicious African Food"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
                    <img src="/logo-small.png" alt="Native Tray Logo" className="h-24 w-auto mb-6" />
                    <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl font-serif">
                        Eat <span className="text-primary">Native</span>.
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-stone-200">
                        We tell cultural stories by serving delicious traditional meals, drinks, music, art and fashion.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link to="/menu">
                            <Button size="lg">View Menu</Button>
                        </Link>
                        <Link to="/locations">
                            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-stone-900">
                                Find a Location
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Featured Section */}
            <Section className="bg-stone-50">
                <div className="grid gap-12 md:grid-cols-2 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-stone-900 md:text-4xl text-primary font-serif">A Taste of Tradition</h2>
                        <p className="text-lg text-stone-600">
                            Experience the authentic flavors of our heritage. From smoky Jollof Rice to rich Fisherman Soup, every dish is a story waiting to be told.
                        </p>
                        <Link to="/about" className="inline-block">
                            <Button variant="secondary" className="gap-2">
                                Our Story <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1543364195-077a16c30ff3?q=80&w=2000&auto=format&fit=crop"
                            alt="Traditional Dining"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* Locations Preview */}
            <Section className="bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-stone-900 md:text-4xl mb-4 font-serif">Visit Us</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Come experience our hospitality at any of our branches.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        { name: "Lekki Branch", address: "19 Admiralty Way, Opp Delakes Mall, Lekki Phase 1, Lagos" },
                        { name: "PHC GRA Branch", address: "Bimkol Crescent, behind Divinity House, off woji road, GRA Phase 2, Port Harcourt" },
                        { name: "PHC - Ojiji Branch", address: "Ojiji Place, 50 Transamadi Road, Nkpogu, Port Harcourt" }
                    ].map((loc, idx) => (
                        <div key={idx} className="bg-stone-50 p-6 rounded-lg text-center border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                            <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">{loc.name}</h3>
                            <p className="text-stone-600 mb-4">{loc.address}</p>
                            <Link to="/locations" className="text-primary font-medium hover:underline">Get Directions</Link>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default Home;

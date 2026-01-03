import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-stone-200 bg-stone-50 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary">Native Tray</h3>
                        <p className="text-sm text-stone-600">
                            Telling cultural stories through food, drinks, music, art, and fashion.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900">Locations</h4>
                        <ul className="space-y-2 text-sm text-stone-600">
                            <li><Link to="/locations" className="hover:text-primary">Lekki Branch</Link></li>
                            <li><Link to="/locations" className="hover:text-primary">PHC GRA Branch</Link></li>
                            <li><Link to="/locations" className="hover:text-primary">PHC - Ojiji Branch</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900">Company</h4>
                        <ul className="space-y-2 text-sm text-stone-600">
                            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/nativetrayph/" className="text-stone-500 hover:text-primary"><Facebook className="h-5 w-5" /></a>
                            <a href="https://www.instagram.com/nativetray/" className="text-stone-500 hover:text-primary"><Instagram className="h-5 w-5" /></a>
                            <a href="https://twitter.com/nativetrayph?lang=en" className="text-stone-500 hover:text-primary"><Twitter className="h-5 w-5" /></a>
                        </div>

                    </div>
                </div>
                <div className="mt-12 border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
                    © {new Date().getFullYear()} Native Tray. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

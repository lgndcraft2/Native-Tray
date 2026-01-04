import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Locations', path: '/locations' },
        { name: 'Events', path: '/events' },
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl md:text-2xl text-primary tracking-tighter cursor-default">
                        <img src="/logo-small.png" alt="Native Tray Logo" className="h-10 w-auto" />
                        Native Tray
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-stone-600"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-stone-200 bg-white">
                    <div className="flex flex-col space-y-4 p-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-base font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-stone-600"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        console.log('Form Submitted:', formData);
        await new Promise(resolve => setTimeout(resolve, 1000));

        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <Section>
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h1 className="text-4xl font-bold mb-6 font-serif">Get in Touch</h1>
                    <p className="text-lg text-stone-600 mb-8">
                        Have questions about our menu, events, or reservations? Send us a message and we'll get back to you.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                <p className="text-stone-600">hello@nativetray.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                <p className="text-stone-600">+234 800 000 0000</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Visit HQ</h3>
                                <p className="text-stone-600">Lekki Phase 1, Lagos, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-stone-50 p-8 rounded-lg border border-stone-100 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;

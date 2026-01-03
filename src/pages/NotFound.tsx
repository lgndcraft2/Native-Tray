import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const NotFound: React.FC = () => {
    return (
        <Section className="text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
            <p className="mb-8 text-stone-600">The page you are looking for doesn't exist.</p>
            <Link to="/">
                <Button>Go Home</Button>
            </Link>
        </Section>
    );
};

export default NotFound;

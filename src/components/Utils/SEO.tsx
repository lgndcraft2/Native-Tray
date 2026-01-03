import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
    const siteTitle = "Native Tray";
    const defaultDescription = "We tell cultural stories by serving delicious traditional meals, drinks, music, art and fashion.";

    return (
        <Helmet>
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="description" content={description || defaultDescription} />
        </Helmet>
    );
};

export default SEO;

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';

describe('App', () => {
    it('renders navbar and footer', () => {
        render(
            <HelmetProvider>
                <BrowserRouter>
                    <Layout>
                        <div>Test Content</div>
                    </Layout>
                </BrowserRouter>
            </HelmetProvider>
        );

        expect(screen.getAllByText('Native Tray').length).toBeGreaterThan(0);
        expect(screen.getByText(/cultural stories/i)).toBeInTheDocument();
    });
});

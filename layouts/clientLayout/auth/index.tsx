import React from 'react';
import Head from 'next/head';
import { Footer } from '../../../components/layout/client';
interface LayoutProps {
    title?: string;
    description?: string;
}
const AuthLayout: React.FC<LayoutProps> = ({ title = 'TTH-BLOG', description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description">{description}</meta>
                <link rel="icon" href='/layout/icon/favicon.png' />
            </Head>
            {children}
            <Footer />
        </div>
    );
}

export default AuthLayout;

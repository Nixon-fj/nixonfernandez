import React from 'react';

import Header from '../components/default/header/Header';
import Footer from '../components/default/footer/Footer';
import ViewPortfolio from '../components/portfolio/ViewPortfolio';

const Portfolio: React.FC = () => {
    return <>
        <Header />
            <ViewPortfolio/>
        <Footer />
    </>;
};

export default Portfolio;

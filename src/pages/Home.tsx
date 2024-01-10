import React from 'react';
import Header from '../components/default/header/Header';
import Footer from '../components/default/footer/Footer';
import Resume from '../components/resume/Resume';

const Home: React.FC = () => {
    return <>
        <Header />
            <Resume/>
        <Footer />
    </>;
};

export default Home;

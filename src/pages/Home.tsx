import React from 'react';
import Header from '../components/default/header/Header';
import Footer from '../components/default/footer/Footer';
import Sidebar from '../components/sidebar/Sidebar';
import Presentation from '../components/resume/presentation';

const Home: React.FC = () => {
    return <>
        <Header />
        <div className='container'>
            <Sidebar />
            <Presentation />
        </div>
        <Footer />
    </>;
};

export default Home;

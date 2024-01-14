import React from 'react';
import Header from '../components/default/header/Header';
import Footer from '../components/default/footer/Footer';
import Resume from '../components/resume/Resume';
// import ContactForm from '../components/contact/ContactForm';

const Home: React.FC = () => {
    return <>
        <Header />
            <Resume/>
            {/* <ContactForm/> */}
        <Footer />
    </>;
};

export default Home;

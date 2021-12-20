import React from 'react';
import Activites from '../Activites/Activites';

import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import Welcome from '../welcome/Welcome';

const Home = () => {
    return (
        <div>
        <Welcome></Welcome>
           <Activites></Activites>
           <Banner></Banner>
           <ContactForm></ContactForm>
        </div>
    );
};

export default Home;
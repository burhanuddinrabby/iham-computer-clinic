import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import BusinessSummary from './BusinessSummary';
import OurPromises from './OurPromises';
import Services from './Services';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <OurPromises></OurPromises>
            <Contact></Contact>
        </div>
    );
};

export default Home;
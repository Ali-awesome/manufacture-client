import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Summery from './Summery/Summery';
import Tools from './Tools/Tools';
import Who from './Who/Who';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summery></Summery>
            <Who></Who>
            <Contact></Contact>
        </div>
    );
};

export default Home;
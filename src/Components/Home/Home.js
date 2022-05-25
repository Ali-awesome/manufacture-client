import React from 'react';
import Contact from './Contact/Contact';
import Summery from './Summery/Summery';
import Who from './Who/Who';

const Home = () => {
    return (
        <div>
            This is home.
            <Summery></Summery>
            <Who></Who>
            <Contact></Contact>
        </div>
    );
};

export default Home;
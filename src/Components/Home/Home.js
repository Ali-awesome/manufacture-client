import React from 'react';
import Contact from './Contact/Contact';
import Summery from './Summery/Summery';
import Tools from './Tools/Tools';
import Who from './Who/Who';

const Home = () => {
    return (
        <div>
            <Tools></Tools>
            <Summery></Summery>
            <Who></Who>
            <Contact></Contact>
        </div>
    );
};

export default Home;
import React from 'react';
import { Fade } from 'react-reveal';
import './Banner.css'

const Banner = () => {
    return (
        <div className='contain'>
            <img className='w-full h-full' src="https://i.postimg.cc/J4bN8r0h/tools.jpg" alt="tools" />
            <div className='centered'>
                <Fade left forever={true} delay={5000} duration={3000}>
                    <h2 className=" bg-slate-600 text-xs lg:text-xl text-center w-full rounded p-5">Get All The Necessary TOOLS</h2>
                </Fade>
            </div>
            <div className='center'>
                <Fade right forever={true} delay={5000} duration={3000}>
                    <h2 className=" bg-slate-600 text-xs lg:text-xl text-center w-full rounded-lg p-5">And Get Started on your CONSTRUCTION</h2>
                </Fade>
            </div>
        </div>
    );
};

export default Banner;
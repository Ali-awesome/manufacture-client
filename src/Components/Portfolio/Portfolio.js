import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faDatabase, faAt } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faBootstrap, faNodeJs, faReact, faStackOverflow, faStripe, faGithub } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://i.postimg.cc/KctJFrw2/me.jpg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl">Hello there!</h1>
                        <h1 className="mb-5 text-4xl font-bold">I am Mohammad Sanaullah.</h1>
                        <p className='bg-base-200 text-black mb-3 w-72 mx-auto'><FontAwesomeIcon className='mr-1' icon={faAt}></FontAwesomeIcon> <small>mohammadsanaullahrabby@gmail.com</small></p>
                        <p className="mb-5">Web Developer. Some technologies that I use.</p>
                        <FontAwesomeIcon className='text-3xl mr-2' icon={faHtml5}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-3xl mr-2' icon={faCss3}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-3xl mr-2' icon={faBootstrap}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-3xl mr-2' icon={faNodeJs}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-3xl mr-2' icon={faReact}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-3xl mr-2' icon={faStackOverflow}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-3xl mr-2' icon={faStripe}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-3xl mr-2' icon={faDatabase}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-3xl mr-2' icon={faGithub}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full lg:flex-row my-5">
                <div className="grid flex-grow h-60 card bg-base-300 rounded-box place-items-start p-5">
                    <h1 className='text-2xl font-bold h-0 my-2'>Educational Background</h1>
                    <p className='m-0'><b>SSC:</b> Khawja Ajmeri School (2014)</p>
                    <p className='m-0'><b>HSC:</b> Cambrian College (2016)</p>
                    <p className='m-0'><b>BSc:</b> in Applied Mathematics, NSTU (2022)</p>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-60 card bg-base-300 rounded-box place-items-start p-5">
                    <h1 className='text-2xl font-bold h-0 my-2'>Some of my MERN Projects</h1>
                    <p className='m-0'>1. <a className='link link-hover' href="https://diaperist.netlify.app/" target={'_blank'}>Diaperist Website</a></p>
                    <p className='m-0'>2. <a className='link link-hover' href="https://highking.web.app/" target={'_blank'}>HighKing Travel Site</a></p>
                    <p className='m-0'>3. <a className='link link-hover' href="https://warehouse-70d67.web.app/" target={'_blank'}>Warehouse Manager</a></p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
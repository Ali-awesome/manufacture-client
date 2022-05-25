import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Who.css'

const Who = () => {
    return (
        <div className='m-10'>
            <div className="hero bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="carousel basis-1/2 h-80 rounded-md">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://i.postimg.cc/28D9WDKv/project2.jpg" alt='item-1' className="w-full" />
                            <div className="iconWho absolute w-52 mx-auto rounded-xl py-5 bottom-36 inset-x-0 bg-slate-600 text-white text-xl text-center leading-4">QUALITY</div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://i.postimg.cc/6p6HHhwp/slide-page2.jpg" alt='item-2' className="w-full" />
                            <div className="absolute w-52 mx-auto rounded-xl py-5 bottom-36 inset-x-0 bg-slate-600 text-white text-xl text-center leading-4">RELATIONSHIP</div>
                            <div className="iconWho absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://i.postimg.cc/WbwW6HBy/slide-page3.jpg" alt='item-' className="w-full" />
                            <div className="iconWho absolute w-52 mx-auto rounded-xl py-5 bottom-36 inset-x-0 bg-slate-600 text-white text-xl text-center leading-4">PERFORMANCE</div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 h-96 space-y-9 pt-10 justify-start'>
                        < h1 className="text-5xl font-bold mt-4" > Who We Are!</h1 >
                        <div className="py-2">
                            <p>We are the most trusted company for your construction tools. There are numerous tools you can choose from. Just visit our site and purchase it.</p>
                            <blockquote className='flex gap-2'><FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon><p>Our moto is "Quality", "Relationship", and "Performance".</p><FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon></blockquote>
                            <p>So dont be late just grave your tools and works ypur dream.</p>
                        </div>
                    </div >
                </div >
            </div >

        </div >
    );
};

export default Who;
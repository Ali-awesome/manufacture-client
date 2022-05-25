import React from 'react';
import './Who.css'

const Who = () => {
    return (
        <div className='m-10'>
            <div class="hero min-h-screen bg-base-200 rounded-lg">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="carousel basis-1/2 h-80 rounded-md">
                        <div id="slide1" class="carousel-item relative w-full">
                            <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" class="btn btn-circle">❮</a>
                                <a href="#slide2" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" class="carousel-item relative w-full">
                            <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" class="btn btn-circle">❮</a>
                                <a href="#slide3" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" class="carousel-item relative w-full">
                            <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" class="btn btn-circle">❮</a>
                                <a href="#slide4" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" class="carousel-item relative w-full">
                            <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" class="btn btn-circle">❮</a>
                                <a href="#slide1" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 h-96 space-y-9 pt-10 justify-center'>
                        < h1 class="text-5xl font-bold mt-10" > Box Office News!</h1 >
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div >
                </div >
            </div >

        </div >
    );
};

export default Who;
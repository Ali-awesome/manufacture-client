import { faCoins, faList, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';
import './Summery.css';

const Summery = () => {
    return (
        <div id="facts" className='container flex flex-row gap-2 m-5'>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.postimg.cc/d0gGNG4Q/construction.jpg" alt="Tools" /></figure>
                <div class="card-body flex justify-center align-middle text-center">
                    <FontAwesomeIcon className='fa fa-4x icon' icon={faSearch} />
                    <div className='text-7xl'>
                        <CountUp end={1000} duration={5}></CountUp><span>+</span>
                    </div>
                    <h2 className='text-xl'>Tools to Choose From</h2>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.postimg.cc/d0gGNG4Q/construction.jpg" alt="Tools" /></figure>
                <div class="card-body flex justify-center align-middle text-center">
                    <FontAwesomeIcon className='fa fa-4x icon' icon={faCoins} />
                    <div className='text-7xl'>
                        <CountUp end={50} duration={5}></CountUp><span>M+</span>
                    </div>
                    <h2 className='text-xl'>Revenue</h2>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.postimg.cc/d0gGNG4Q/construction.jpg" alt="Tools" /></figure>
                <div class="card-body flex justify-center align-middle text-center">
                    <FontAwesomeIcon className='fa fa-4x icon' icon={faUsers} />
                    <div className='text-7xl'>
                        <CountUp end={33} duration={5}></CountUp><span>K+</span>
                    </div>
                    <h2 className='text-xl'>Satisfied Customer</h2>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.postimg.cc/d0gGNG4Q/construction.jpg" alt="Tools" /></figure>
                <div class="card-body flex justify-center align-middle text-center">
                    <FontAwesomeIcon className='fa fa-4x icon' icon={faList} />
                    <div className='text-7xl'>
                        <CountUp end={100} duration={5}></CountUp><span>+</span>
                    </div>
                    <h2 className='text-xl'>Reviews</h2>
                </div>
            </div>

        </div >
    );
};

export default Summery;
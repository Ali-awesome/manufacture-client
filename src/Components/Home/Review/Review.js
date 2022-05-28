import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faArrowRight, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../Shared/Loading/Loading';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }
        , []);


    return (
        <div id='reviews'>

            <h2 className='mx-auto font-bold text-3xl'>Reviews</h2>
            <div className='flex flax-col items-center m-3'>
                <h1 className='hidden lg:flex text-xl text-info  mx-auto'>Please click right or left arrow to scroll</h1>
            </div>
            <div className="carousel carousel-horizontal rounded-box">

                {
                    reviews.length === 0 ? <Loading></Loading> : reviews.map((review, index) =>
                        <div key={index} className="carousel-item mx-3">
                            <div className="card w-60 bg-neutral text-neutral-content">
                                <div className="card-body items-center text-center">
                                    <h2>{review.name}</h2>
                                    <p>{review.review}</p>
                                    <span>{review.rating} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Rating</span>
                                    <p><small>Review by {review.userName}</small></p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div >
            <div className='flex justify-center text-2xl mt-3'><FontAwesomeIcon className='m-2' icon={faArrowLeft}></FontAwesomeIcon><p className='my-auto font-bold'>Scroll</p><FontAwesomeIcon className='m-2' icon={faArrowRight}></FontAwesomeIcon></div>
        </div>
    );
};

export default Review;
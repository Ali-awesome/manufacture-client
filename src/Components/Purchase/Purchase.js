import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToolId from '../Hooks/useToolId';
import ReviewModal from './ReviewModal';

const Purchase = () => {
    const [quantityError, setQuantityError] = useState(null)
    const [disable, setDisable] = useState(false)
    const [prices, setPrices] = useState(0)
    const openRef = useRef()

    const { Id } = useParams();
    const [toolId] = useToolId(Id);
    const { name, minorder, quantity, price, img, description } = toolId;

    const [user] = useAuthState(auth);

    const handleQuantity = event => {
        const value = event.target.value
        if (parseInt(value) > parseInt(quantity)) {
            setQuantityError('Limit exceed !')
            setPrices(0)
            setDisable(true);
        } else if (parseInt(value) < parseInt(minorder)) {
            setPrices(0)
            setQuantityError('minium quantity must obeid')
            setDisable(true);
        } else {
            setPrices(parseInt(value) * parseInt(price))
            setQuantityError(null)
            setDisable(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const email = user?.email;
        const userName = user?.displayName;
        const productName = name;
        const quantity = event.target.orderQuantity.value;
        const totalPrice = prices;
        const phone = event.target.phoneNumber.value;
        const address = event.target.address.value;

        const order = { email, userName, productName, quantity, totalPrice, phone, address, img }


        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    openRef.current.click();
                    toast('Thank you for your Review!')
                }
            })
    }

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/reviewByName?name=${name}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            });
    })

    return (
        <div style={{ backgroundImage: `url(${img})` }}  >
            <div className='flex justify-center items-center' >
                <div className="hero h-full g-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left bg-base-200 p-10">
                            <h1 className="text-5xl font-bold">Order {name} </h1>
                            <p><b>Minimum Order Quantity: {minorder}</b></p>
                            <p><b>Price per Unit: {price}</b></p>
                            <p><b>Available Quantity: {quantity}</b></p>
                            <p><b>Order Description: {description}</b></p>
                            <img src={img} className='w-36 h-36 mx-auto' alt="" />
                            <p className="py-6 text-info font-bold ">Please provide valid information asked to order the product and get it delivered.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input
                                            readOnly
                                            type="text"
                                            name='userName'
                                            value={user?.displayName}
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input
                                            readOnly
                                            type="text"
                                            name='productName'
                                            value={name}
                                            className="input input-bordered w-full max-w-xs" />
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            readOnly
                                            type="email"
                                            name='email'
                                            value={user?.email}
                                            className="input input-bordered w-full max-w-xs" />
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Order Quantity</span>
                                        </label>
                                        <div>
                                            <input
                                                onChange={handleQuantity}
                                                type="number"
                                                name='orderQuantity'
                                                className="input input-bordered w-8/12 max-w-xs" required />
                                            <input
                                                name='totalPrice'
                                                value={'$ ' + prices}
                                                className="input input-bordered w-4/12 max-w-xs" disabled={true} />

                                        </div>
                                        {
                                            quantityError && <span className='text-error text-sm'>{quantityError}  </span>
                                        }
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Contact Number</span>
                                        </label>
                                        <input
                                            type="Tel"
                                            name='phoneNumber'
                                            className="input input-bordered w-full max-w-xs" minLength={6} maxLength={20} required />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input
                                            type="textArea"
                                            name='address'
                                            className="input input-bordered w-full max-w-xs" required />
                                    </div>


                                    <input disabled={disable} className='btn w-full max-w-xs text-white' type="submit" value="Place Order" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <label htmlFor="review-modal" ref={openRef} className=" hidden btn modal-button">open modal</label>
            {toolId && <ReviewModal data={toolId} />}

            <div className='justify-center bg-base-200 py-5'>
                <h2 className='mx-auto font-bold text-3xl'>Relevent Reviews</h2>
                <div className='flex flax-col items-center m-3'>
                    <h1 className='hidden lg:flex text-xl text-info  mx-auto'>Please click right or left arrow to scroll</h1>
                </div>
                <div className="carousel carousel-horizontal rounded-box">

                    {
                        reviews.length === 0 ? <div className='flex justify-center mx-auto'><h2 className='text-3xl'>There is no review for this item.</h2></div> : reviews.map((review, index) =>
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
            </div>

        </div >
    );
};

export default Purchase;
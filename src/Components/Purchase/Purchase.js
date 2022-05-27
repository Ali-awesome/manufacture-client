import React, { useState, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useToolId from '../Hooks/useToolId';
import ReviewModal from './ReviewModal';

const Purchase = () => {
    const [quantityError, setQuantityError] = useState(null)
    const [disable, setDisable] = useState(false)
    const [prices, setPrices] = useState(0)
    const openRef = useRef()

    const { Id } = useParams();
    const [toolId, setToolId] = useToolId(Id);
    const { _id, name, minorder, quantity, price, img } = toolId;

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
        openRef.current.click()
    }
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='flex justify-center items-center'>
            <div class="hero h-full g-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left bg-base-200 p-10">
                        <h1 class="text-5xl font-bold">Order {name} </h1>
                        <p class="py-6 ">Please provide valid information asked to order the product and get it delivered.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
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
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Product Name</span>
                                    </label>
                                    <input
                                        readOnly
                                        type="text"
                                        name='productName'
                                        value={name}
                                        class="input input-bordered w-full max-w-xs" />
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
                                            value={'$ ' + prices}
                                            className="input input-bordered w-4/12 max-w-xs" disabled={true} />

                                    </div>
                                    {
                                        quantityError && <span className='text-error text-sm'>{quantityError}  </span>
                                    }
                                </div>


                                <input disabled={disable} className='btn w-full max-w-xs text-white' type="submit" value="Place Order" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <label for="review-modal" ref={openRef} class=" hidden btn modal-button">open modal</label>
            {toolId && <ReviewModal data={toolId} />}

        </div >
    );
};

export default Purchase;
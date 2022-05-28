import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ReviewModal = ({ data }) => {
    // console.log(data)
    const { name } = data;
    const closeRef = useRef();
    const [user, loading] = useAuthState(auth);
    const [value, setValue] = useState(0)

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    if (loading) {
        return <Loading />
    }

    const handleValue = event => {
        // console.log(event.target.value)
        setValue(event.target.value)
    }

    const onSubmit = data => {
        const email = user?.email
        const review = { email, name, ...data };
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    closeRef.current.click()
                    navigate('/tools')
                    toast.success("Success Notification !", {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
            })
    }

    const handleClick = () => {
        navigate('/home')
    }
    return (
        <div>
            <input type="checkbox" id="review-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label onClick={handleClick} for="review-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Congratulations Please Give a Riview!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea class="mt-5 block textarea textarea-bordered w-full" placeholder="Type Here"
                            {...register("review", { required: true })} ></textarea>
                        <div class="block pt-3 rating">
                            <div className='flex flex-row justify-center mb-3'>
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"
                                    value="1"
                                    {...register("rating", { required: true, onChange: e => handleValue(e) })}
                                />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value="2"
                                    {...register("rating", { required: true, onChange: e => handleValue(e) })} />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value="3"
                                    {...register("rating", { required: true, onChange: e => handleValue(e) })} />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value="4"
                                    {...register("rating", { required: true, onChange: e => handleValue(e) })} />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value="5"
                                    {...register("rating", { required: true, onChange: e => handleValue(e) })} />
                                <span className='ml-1'>({value})</span>
                            </div>
                        </div>

                        <button className="btn btn-wide " type="submit" >Submit</button>
                    </form>
                    <div class="modal-action">
                        <label htmlFor="review-modal" ref={closeRef} class="btn hidden">Close!</label>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ReviewModal;
import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
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
        const userName = user?.displayName
        const email = user?.email
        const review = { email, userName, name, ...data };
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
                    toast.success("Wanna buy something else?", {
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
            <input type="checkbox" id="review-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={handleClick} htmlFor="review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Congratulations Please Give a Riview!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea className="mt-5 block textarea textarea-bordered w-full" placeholder="Type Here"
                            {...register("review", { required: true })} ></textarea>
                        <div className="block pt-3 rating">
                            <div className='flex flex-row justify-center mb-3'>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                                    value="1"
                                    {...register("rating", { required: true, onChange: e => handleValue(e) })}
                                />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="2"
                                    {...register("rating", { required: true, onChange: e => handleValue(e) })} />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="3"
                                    {...register("rating", { required: true, onChange: e => handleValue(e) })} />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="4"
                                    {...register("rating", { required: true, onChange: e => handleValue(e) })} />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="5"
                                    {...register("rating", { required: true, onChange: e => handleValue(e) })} />
                                <span className='ml-1'>({value})</span>
                            </div>
                        </div>

                        <button className="btn btn-wide " type="submit" >Submit</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="review-modal" ref={closeRef} className="btn hidden">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
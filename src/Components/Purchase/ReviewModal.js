import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const ReviewModal = ({ data }) => {
    const closeRef = useRef();
    const [user, loading] = useAuthState(auth);
    const [value, setValue] = useState(0)
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
        console.log(event.target.value)
        setValue(event.target.value)
    }

    const onSubmit = data => {
        console.log(data)
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => {
                data.success && closeRef.current.click()
            })
    }
    return (
        <div>
            <input type="checkbox" id="review-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations Please Give a Riview!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea class="mt-5 block textarea textarea-bordered w-full" placeholder="Type Here"
                            {...register("review", { required: true })} ></textarea>
                        <div class="block pt-3 rating">
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
                            <span>({value})</span>
                        </div>

                        <button className="btn btn-wide " type="submit" >Submit</button>
                    </form>
                    <div class="modal-action">
                        <label htmlFor="review-modal" ref={closeRef} class="btn hidden">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
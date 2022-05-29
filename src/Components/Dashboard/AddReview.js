import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useTool from '../Hooks/useTool';
import Loading from '../Shared/Loading/Loading';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);
    // console.log(user?.photoURL)
    const [value, setValue] = useState(0);
    const [tools, setTools] = useTool();
    // console.log(tools)

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

    const onSubmit = (data, e) => {
        const userName = user?.displayName
        const email = user?.email
        const review = { email, userName, ...data };
        e.target.reset();
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
                    toast.success("Thank you for your Review", {
                        position: toast.POSITION.TOP_CENTER
                    })
                }

            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col lg:flex-row '>
                    <div class="avatar m-5">
                        <div class="w-24 bg-neutral-focus text-neutral-content rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {
                                user?.photoURL && <img class="text-7xl" src={user.photoURL} alt='U' />
                            }

                        </div>
                    </div>
                    <textarea className="mt-5 block textarea textarea-bordered w-full" placeholder="Type Here"
                        {...register("review", { required: true })} ></textarea>
                </div>
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
                <select class="select w-full max-w-xs" {...register("name", { required: true })}>
                    <option disabled selected={true}>Review For(pick a name)</option>
                    {
                        tools.map(tool => <option>{tool.name}</option>)
                    }
                    {/* <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option> */}
                </select>

                <button className="btn btn-wide " type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default AddReview;
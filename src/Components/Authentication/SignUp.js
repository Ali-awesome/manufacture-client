import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useJWT from '../Hooks/useJWT';
import Loading from '../Shared/Loading/Loading';
import GoogleAuth from './GoogleAuth';

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);


    const [token] = useJWT(user);
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirm.value


        if (password === confirm) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            event.target.reset();
        }
        else {
            toast('Password did not match!');
            event.target.reset();
            setAgree(!agree);
        }

    }

    return (
        <div className='register-form w-80 h-full shadow-xl rounded-xl my-5 mx-auto flex flex-col mb-5'>
            <h2 className='text-center text-3xl mt-2'>Register to Enter.</h2>
            <div class="flex flex-col w-full my-5 border-opacity-50">
                <div class="grid h-full w-80 card bg-base-300 rounded-box place-items-center">
                    <button type="button" className="btn my-2"><Link to="/login" className='p-2 text-decoration-none' onClick={navigateToLogin}>I have an account!</Link></button>
                    <form onSubmit={handleRegister}>
                        <div class="form-control w-64 mx-auto">
                            <label class="input-group input-group-vertical">
                                <span>Name</span>
                                <input type="text" name='name' placeholder="Dhalia Khao" class="input input-bordered" required />
                            </label>
                        </div>
                        <div class="form-control w-64 mx-auto">
                            <label class="input-group input-group-vertical">
                                <span>Email</span>
                                <input type="text" name='email' placeholder="info@site.com" class="input input-bordered" required />
                            </label>
                        </div>
                        <div class="form-control w-64 mx-auto">
                            <label class="input-group input-group-vertical">
                                <span>Password</span>
                                <input type="password" name='password' placeholder="123abc" class="input input-bordered" required />
                            </label>
                        </div>
                        <div class="form-control w-64 mx-auto">
                            <label class="input-group input-group-vertical">
                                <span>Confirm Password</span>
                                <input type="password" name='confirm' placeholder="123abc" class="input input-bordered" required />
                            </label>
                        </div>
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={`ps-2 ${agree ? '' : 'text-red-500'}`} htmlFor="terms">Accept Terms and Conditions?</label>
                        <input
                            disabled={!agree}
                            className='w-52 mx-auto btn my-2'
                            type="submit"
                            value="Register" />
                    </form>
                </div>
                <div class="divider">OR</div>
                <GoogleAuth></GoogleAuth>
            </div>
        </div>
    );
};

export default SignUp;
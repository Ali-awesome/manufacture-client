import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useJWT from '../Hooks/useJWT';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useJWT(user);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    // if (loading) {
    //     return <Loading></Loading>
    // }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (token) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div class="flex flex-col h-80 justify-center w-80 mx-auto border-opacity-50">
                <div class="grid h-32 card bg-base-300 rounded-box place-items-center">
                    <button
                        className='btn text-white rounded-xl mx-auto my-1'>
                        <Link className='px-2' to={'/login'}>Already a Member?</Link>
                    </button>
                    <button
                        className='btn text-white rounded-xl mx-auto my-1'>
                        <Link className='px-2' to={'/register'}>Need an Account?</Link>
                    </button>
                </div>
                <div class="divider">OR</div>
                <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn text-white rounded-xl mx-auto my-1'>
                        <img style={{ width: '30px' }} src='https://i.postimg.cc/5yDQnG15/google.png' alt="" />
                        <span className='px-2'>Google Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Social;
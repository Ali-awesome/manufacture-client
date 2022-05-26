import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useJWT from '../Hooks/useJWT';
import Loading from '../Shared/Loading/Loading';

const GoogleAuth = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useJWT(user);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (token) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div class="grid h-24 card bg-base-300 rounded-box place-items-center">
                {errorElement}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn text-white rounded-xl mx-auto my-1'>
                    <img style={{ width: '30px' }} src='https://i.postimg.cc/5yDQnG15/google.png' alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleAuth;
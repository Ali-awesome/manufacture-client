import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faLocation, faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import GoogleAuth from '../../Authentication/GoogleAuth';

const Contact = () => {
    return (
        <div id='contact' className='text-center'>
            <p className="text-xl">Reaching Our Office</p>
            <h1 className="text-4xl text-bold icon">Find Our Location</h1>
            <div className='flex flex-col lg:flex-row my-5 gap-3 mx-5'>
                <div className="card w-full mb-3 bg-base-200 shadow-xl">
                    <FontAwesomeIcon className='fa fa-4x icon mt-4' icon={faLocation}></FontAwesomeIcon>
                    <div className="card-body">
                        <h1 className='text-4xl font-bold'>Vist Our Office</h1>
                        <p>9051 Constra Incorporate, BD</p>
                    </div>
                </div>
                <div className="card w-full mb-3 bg-base-200 shadow-xl">
                    <FontAwesomeIcon className='fa fa-4x icon mt-4' icon={faAt}></FontAwesomeIcon>
                    <div className="card-body">
                        <h1 className='text-4xl font-bold'>Email Us</h1>
                        <p>9051 Constra Incorporate, BD</p>
                    </div>
                </div>
                <div className="card w-full mb-3 bg-base-200 shadow-xl">
                    <FontAwesomeIcon className='fa fa-4x icon mt-4' icon={faPhone}></FontAwesomeIcon>
                    <div className="card-body">
                        <h1 className='text-4xl font-bold'>Call Us</h1>
                        <p>+01873263553</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col h-80 justify-center w-80 mx-auto border-opacity-50">
                <div class="grid h-36 card bg-base-300 rounded-box place-items-center">
                    <button
                        className='btn text-white rounded-xl mx-auto mb-1'>
                        <Link className='px-2' to={'/login'}>Already a Member?</Link>
                    </button>
                    <button
                        className='btn text-white rounded-xl mx-auto mb-1'>
                        <Link className='px-2' to={'/register'}>Need an Account?</Link>
                    </button>
                </div>
                <div class="divider">OR</div>
                <GoogleAuth></GoogleAuth>

            </div>

        </div>
    );
};

export default Contact;
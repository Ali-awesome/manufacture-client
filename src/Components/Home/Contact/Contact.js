import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faLocation, faAt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className='text-center'>
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
        </div>
    );
};

export default Contact;
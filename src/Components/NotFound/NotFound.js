import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="error-page text-center">
                <div className="error-code">
                    <h2><strong>404</strong></h2>
                </div>
                <div className="error-message text-2xl">
                    <h3>Oops... Page Not Found!</h3>
                </div>
                <div className="error-body">
                    Try using the button below to go to main page of the site <br />
                    <Link to={'/home'} className="btn">Back to Home Page</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };
    const navigation = <>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        {
            user &&
            <li>
                <Link to={'/dashboard'}>Dashboard</Link>
            </li>
        }
        <li>
            <a href="/#summery">Summery</a>
        </li>
        <li>
            <a href="/#contact">Contact Us </a>
        </li>
        <li>
            <a href="/#reviews">Reviews</a>
        </li>
        <li>
            <Link to={'/tools'}>Tools</Link>
        </li>
        <li>
            <Link to={'/portfolio'}>My Portfolio</Link>
        </li>
        <li>
            {user ? <button className="btn btn-ghost" onClick={logout} ><span className='text-amber-400'>{user?.displayName}</span> Sign Out</button> : <Link to="/login">Login</Link>}
        </li>
    </>
    return (
        <div>
            <div className='container flex flex-row h-28 border-b-2'>
                <div className='basis-1/3 m-9'>
                    <Link to={'/home'}> <img className='h-9' src={logo} alt="Logo" /></Link>
                </div>
                <div className='flex basis-2/3 justify-end'>
                    <div className="card bg-base-100 border-r-2">
                        <div className="card-body">
                            <h2 className="text-xl">Call Us</h2>
                            <p>+01873263553</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 border-r-2">
                        <div className="card-body">
                            <h2 className="text-xl">Email Us</h2>
                            <p>constra-tools@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar bg-neutral">
                <div className="">
                    <div className='flex flex-row space-x-7 lg:hidden' >
                        <div className="dropdown"><label tabIndex="0" className="btn btn-ghost text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navigation}
                            </ul>
                        </div>
                        <div className='basis-2/3 '><Link to={'/home'}> <img className='h-9' src={logo} alt="Logo" /></Link></div>
                    </div>
                </div>
                <div className="hidden lg:flex mx-auto flex-row text-white">
                    <ul className="menu menu-horizontal p-0 space-x-10">
                        {navigation}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
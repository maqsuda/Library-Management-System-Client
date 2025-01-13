import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allBooks">All Books</Link></li>
        <li><Link to="/addBooks">Add Book</Link></li>
        <li><Link to="/borrowedBooks">Borrowed Books</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
    </>


    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white mb-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <img src='/Logo.png'></img>
                <a className="normal-case text-lg font-thin">Library Management System</a>
            </div>
            <div className="navbar-center hidden lg:flex font-bold">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end rounded-xl">
                <a className="btn border bg-transparent rounded-2xl  text-amber-500">
                    <FaUser></FaUser>
                    <p >User Name</p>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addfood'>Add Food</NavLink></li>
        <li><NavLink to='/foods'>Foods</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-yellow-200 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Foodies</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                </div>
        </div>
    );
};

export default Navbar;
import { NavLink } from "react-router-dom";
import { HiLightBulb, HiMoon } from 'react-icons/hi'
import { useState } from "react";

const Navbar = () => {
    const [dark, setDark] = useState(true);

    // useEffect(() => {
    //     setDark(!dark)
    // }, [])
    // const handleClick = () => {
    //     setDark(!dark)
    // }

    // console.log(() => handleClick);
    if (dark) {
        document.querySelector('html').setAttribute('data-theme', 'dark')
    }
    else {
        document.querySelector('html').setAttribute('data-theme', 'light')
    }

    return (
        <div className="navbar bg-base-100 md:px-20 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-violet-600 font-semibold' : ''} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-violet-600 font-semibold' : ''} to="/products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-violet-600 font-semibold' : ''} to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-violet-600 font-semibold' : ''} to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-violet-600 font-semibold' : ''} to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Ama-Jhon</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'text-violet-600 font-semibold' : ''} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'text-violet-600 font-semibold' : ''} to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'text-violet-600 font-semibold' : ''} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'text-violet-600 font-semibold' : ''} to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'text-violet-600 font-semibold' : ''} to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        {
                            dark ? <HiLightBulb onClick={() => setDark(!dark)} className="text-3xl"></HiLightBulb> : <HiMoon onClick={() => setDark(!dark)} className="text-3xl"></HiMoon>
                        }
                    </li>
                </ul>
            </div>
            <div className="navbar-end pr-2">
                {
                    dark ? <HiLightBulb onClick={() => setDark(!dark)} className="text-3xl"></HiLightBulb> : <HiMoon onClick={() => setDark(!dark)} className="text-3xl"></HiMoon>
                }
            </div>
        </div>
    );
};

export default Navbar;
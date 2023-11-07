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
    if(dark){
        document.querySelector('html').setAttribute('data-theme', 'dark')
    }
    else{
        document.querySelector('html').setAttribute('data-theme', 'light')
    }

    return (
        <div className="flex justify-between items-center px-5 md:px-20 py-7 shadow-lg">
            <h2 className="text-xl font-bold">Ama_Jhon</h2>


            <nav>
                <ul className="flex gap-5 items-center">
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
            </nav>
        </div>
    );
};

export default Navbar;
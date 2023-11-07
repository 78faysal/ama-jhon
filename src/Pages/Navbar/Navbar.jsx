import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-20 py-7 shadow-lg">
            <h2 className="text-xl font-bold">Ama_Jhon</h2>
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'text-violet-600 font-semibold' : ''} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'text-violet-600 font-semibold' : ''} to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'text-violet-600 font-semibold' : ''} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'text-violet-600 font-semibold' : ''} to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'text-violet-600 font-semibold' : ''} to="/dashboard">Dashboard</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
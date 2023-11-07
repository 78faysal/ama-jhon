import { Link, Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";

const DashboardLayout = () => {
    return (
        <div className="flex mt-5 gap-5">
            <div className="w-[20%]">
                <div className="bg-gray-800 p-5">
                    <nav>
                        <ul>
                            <li>
                                <Link to='/dashboard/profile'>Profile</Link>
                            </li>
                            <li>
                                <Link to='/dashboard/editProfile'>Edit Profile</Link>
                            </li>
                            <li>
                                <Link to='/dashboard/performence'>Performence</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="w-[80%]">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
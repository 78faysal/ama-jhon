import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="bg-gray-800 p-5">
            <nav>
                <ul>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
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
    );
};

export default Dashboard;
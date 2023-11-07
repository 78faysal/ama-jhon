import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import Spiner from "../Pages/Spiner/Spiner";

const MainLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state;
    return (
        <div>
            <Navbar></Navbar>
            {
                isLoading === 'loading'
                    ?
                    <Spiner></Spiner>
                    :
                    <div className="min-h-screen max-w-[1400px] mx-auto">
                        <Outlet></Outlet>
                    </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
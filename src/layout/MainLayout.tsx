import HomePage from "../pages/HomePage/HomePage.tsx";
import {Outlet} from "react-router";


const MainLayout = () => {
    return (
        <div>
<HomePage/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
import {Outlet} from "react-router";
import Menu from "../components/menu/Menu.tsx";


const MainLayout = () => {
    return (
        <div>

<Menu/>

            <Outlet/>
        </div>
    );
};

export default MainLayout;
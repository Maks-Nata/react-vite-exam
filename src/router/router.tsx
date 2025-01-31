import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    children: [{index: true, element: <HomePage/>}, {path: "login", element: <LoginPage/>}, {
        path: "recipes",
        element: <div>Сторінка всіх рецептів</div>
    }, {path: "users", element: <UsersPage/>},],
},]);
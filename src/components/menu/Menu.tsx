import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {User} from "../../models/IUser.ts";

const Menu = () => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };
    return (<nav><Link to="/">Головна</Link> {user ? (<> <Link to="/recipes">Усі рецепти</Link> <Link to="/users">Усі
        користувачі</Link>
        <button onClick={handleLogout}>Вийти</button>
    </>) : (<Link to="/login">Увійти</Link>)} </nav>);
};
export default Menu;
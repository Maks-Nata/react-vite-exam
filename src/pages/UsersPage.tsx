import {useEffect, useState} from "react";
import {User, IBaseModelUsers} from "../models/IUser.ts";

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    useEffect(() => {
        fetch("https://dummyjson.com/users").then(res => res.json()).then((data: IBaseModelUsers) => {
            setUsers(data.users);
            setLoading(false);
        }).catch(() => {
            setError("Помилка завантаження користувачів");
            setLoading(false);
        });
    }, []);
    if (loading) return <p>Завантаження...</p>;
    if (error) return <p style={{color: "red"}}>{error}</p>;
    return (<div><h2>Список користувачів</h2>
        <ul> {users.map(user => (
            <li key={user.id} style={{display: "flex", alignItems: "center", gap: "10px"}}><img src={user.image}
                                                                                                alt={user.firstName} style={{
                width: 40,
                borderRadius: "50%"
            }}/> <span>{user.firstName} {user.lastName} ({user.username})</span></li>))} </ul>
    </div>);
};
export default UsersPage;
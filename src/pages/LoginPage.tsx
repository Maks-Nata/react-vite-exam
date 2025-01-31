import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";
import {User} from "../models/IUser.ts";

interface LoginFormInputs {
    username: string;
    password: string;
}

const LoginPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormInputs>();
    const navigate = useNavigate();
    const onSubmit = async (data: LoginFormInputs) => {
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error("Невірні дані");
            const userData: { token: string; user: User } = await response.json();
            localStorage.setItem("token", userData.token);
            localStorage.setItem("user", JSON.stringify(userData.user));
            navigate("/recipes");
        } catch  {
            alert("Помилка входу. Перевірте логін та пароль.");
        }
    };
    return (<div><h2>Увійти</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><label>Логін:</label> <input {...register("username", {required: "Це поле обов'язкове"})}
                                              type="text"/> {errors.username &&
                <p style={{color: "red"}}>{errors.username.message}</p>} </div>
            <div><label>Пароль:</label> <input {...register("password", {required: "Введіть пароль"})}
                                               type="password"/> {errors.password &&
                <p style={{color: "red"}}>{errors.password.message}</p>} </div>
            <button type="submit">Увійти</button>
        </form>
    </div>);
};
export default LoginPage;
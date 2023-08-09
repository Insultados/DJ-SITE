import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInUser } from "../firebase/Firebase";
import { startSession } from "../../storage/session";
import classes from './Login.module.css'



export default function Login() {

    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();

        // validate the inputs
        if (!email || !password) {
            setError("Please enter your username and password.");
            return;
        }

        // clear the errors
        setError("");

        // TODO: send the login request
        console.log("Logging in...");

        try {
            let loginResponse = await signInUser(email, password);
            startSession(loginResponse.user);
            navigate("/admin");
        } catch (error: any) {
            console.error(error.message);
            setError(error.message);
        }
    }

    return (
        <div className={classes.aouth_form_container}>
            {error && <Alert severity="error" sx={{ my: 2 }}>{error}</Alert>}
            <form onSubmit={onSubmit} method="get" className={classes.aouth__form}>
                <div className={classes.aouth_form}>
                    <label > Логин: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                </div>
                <div className={classes.aouth_form}>
                    <label> Пароль: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                </div>
                <div className={classes.aouth_button}>
                    <input type="submit" value="Войти" />
                </div>
            </form>
        </div>
    )
}
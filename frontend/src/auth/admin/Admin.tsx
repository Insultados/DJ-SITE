import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { endSession, getSession, isLoggedIn } from "../../storage/session";
import App from "../../App";
import classes from './Admin.module.css'


export default function User() {

  let navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/main");
    }

    let session: any = getSession();
    setEmail(session.email);

    console.log("Your access token is: " + session.accessToken);
  }, [navigate]);

  const onLogout = () => {
    endSession();
    navigate("/main");
  }

  return (
    <>
      <App />
      <div className={classes.user_container}>
        <p>Вы вошли как: {email} </p>
        <button onClick={onLogout} >
          Выйти
        </button>
      </div>
    </>
  )
}
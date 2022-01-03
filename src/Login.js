import React from "react";
import "./Login.css";
import logo from "./images/ghost1.png";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { login } from "./features/appSlice";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayname,
            profilePic: result.user.photoUrl,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="" className="logo" />
        <Button varient="outlined" onClick={signIn} className="login__button">
          {" "}
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;

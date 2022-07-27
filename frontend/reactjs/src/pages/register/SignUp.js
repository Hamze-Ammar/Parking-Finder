import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../store/AuthContext";
import { URL } from "../../constant/backend";
import SpinnerProgress from "../../components/circularProgress/SpinnerProgress";

export default function SignUp() {
  const AuthCtx = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  //Registering User
  const registerUser = async (credentials) => {
    const res = await fetch(`${URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    if (data.user) {
      // alert("You've successfully registered");
      loginUser({ email, password });
    }
    if (data.error) {
      if (data.error.code === 11000) {
        alert("Email already exists!");
        setIsLoading(false);
      }
    }
  };

  //Send Data to Server on Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !password_confirmation) {
      alert("Please fill all fields!");
      return;
    }
    if (password !== password_confirmation) {
      alert("Confirm your password");
      setPasswordConfirmation("");
      return;
    }
    setIsLoading(true);
    registerUser({ name, email, password, password_confirmation });
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
    setRememberMe(false);
  };

  //Login user after he signs up successfully
  const loginUser = async (credentials) => {
    const res = await fetch(`${URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
    } else if (data.access_token) {
      let token = data.access_token;
      token && AuthCtx.authenticate(token);
      setIsLoading(false);

      navigate("/");
    }
  };

  return (
    <div className="ScreenCenter">
      {isLoading && <SpinnerProgress />}
      <div className="containerRegister">
        <form className="modalContent" onSubmit={onSubmit}>
          <div className={"container"}>
            <span
              className="close"
              onClick={() => {
                navigate("/");
              }}
            >
              &times;
            </span>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr className={"hr"} />

            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />

            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              value={password_confirmation}
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
              }}
              required
            />

            <label>
              <input
                type="checkbox"
                name="remember"
                checked={rememberMe}
                value={rememberMe}
                onChange={(e) => {
                  setRememberMe(e.currentTarget.checked);
                }}
              />{" "}
              Remember me
            </label>

            <p>
              By creating an account you agree to our{" "}
              <a href="#">Terms & Privacy</a>.
            </p>

            <div className={"clearfix"}>
              <Link to="/">
                <button type="button" className="cancelbtn formBtn">
                  Cancel
                </button>
              </Link>
              <button type="submit" className="formBtn signupbtn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

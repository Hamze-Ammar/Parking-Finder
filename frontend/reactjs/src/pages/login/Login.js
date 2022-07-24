import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { URL } from "../../constant/backend";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [token, setToken] = useState("");
  let navigate = useNavigate();
  //show password
  const [passwordDisplay, setPasswordDisplay] = useState(false);

  //Login User
  const loginUser = async (credentials) => {
    const res = await fetch(`${URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    // console.log(data);
    // data.error ? alert("User Not Found") : alert("You are now signed in!");
    if (data.err) {
      alert(data.err);
    } else if (data.access_token) {
      let token = data.access_token;
      // console.log(token);
      let user_info = jwt_decode(token);
      // console.log(user_info);
      token && localStorage.setItem("token", token);
      user_info && localStorage.setItem("user_id", user_info._id);
      user_info && localStorage.setItem("user_name", user_info.name);

      //redirect user
      alert("You are now logged in");
      navigate("/");
    }
  };

  //Add Data to Backend on Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }
    loginUser({ email, password });
    setEmail("");
    setPassword("");
  };

  //Show password
  const showPassword = () => {
    let element = document.getElementById("id_password");
    if (element.type === "password") {
      element.type = "text";
      setPasswordDisplay(true);
    } else {
      element.type = "password";
      setPasswordDisplay(false);
    }
  };

  return (
    <div className={"loginContainer"}>
      <span
        className="close"
        onClick={() => {
          navigate("/");
        }}
      >
        &times;
      </span>
      <h1 style={{ textAlign: "center" }}>Sign In</h1>
      <hr />

      <form onSubmit={onSubmit}>
        <div className={"containerLogin"}>
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
          <div className="password-field">
            <input
              id="id_password"
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            {!passwordDisplay && (
              <span className="eye" onClick={showPassword}>
                <FaEye />
              </span>
            )}
            {passwordDisplay && (
              <span className="eye" onClick={showPassword}>
                <FaEyeSlash />
              </span>
            )}
          </div>
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>

        <div className={"containerLogin"}>
          <Link to="/">
            <button type="button" className={"cancelbtnn"}>
              Cancel
            </button>
          </Link>
          <span className={"psw"}>
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}

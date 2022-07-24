import React from "react";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { URL } from "../../constant/backend";
import { AuthContext } from "../../store/AuthContext";

export default function Login() {
  const AuthCtx = useContext(AuthContext);

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
    if (data.err) {
      alert(data.err);
    } else if (data.access_token) {
      let token = data.access_token;
      token && AuthCtx.authenticate(token);

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
          <button className="formBtn" type="submit">
            Login
          </button>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>

        <div className={"containerLogin"}>
          <Link to="/">
            <button className="formBtn cancelbtnn" type="button">
              Cancel
            </button>
          </Link>
          <span className={"psw"}>
            Don't have an account?{" "}
            <Link to="/signUp">
              <a href="#">Register</a>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { logIn } from "../app/authSlice";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "../app/apiService";
import DynamicNavBar from "./DynamicNavBar";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  /* tony@stark.com -  password123 */
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  // const [user, setUser] = useState({
  //   email: "" /* tony@stark.com -  steve@rogers.com */,
  //   password: "" /* password123 - password456 */,
  // })

  const handleLoginEvent = async (event) => {
    event.preventDefault();
    let user = {
      email: email,
      password: password,
    };

    if (user.email === "" || user.password === "") {
      setErrorMessage("You must fill all the fields");
    } else {
      setErrorMessage("");
      const response = await getUserLogin(user);
      console.log(response);
      if (response.error) {
        setErrorMessage(response.error);
      } else {
        dispatch(logIn({ token: response, email: user.email }));
        // Check if the token is stored in localStorage
        const tokenFromLocalStorage = localStorage.getItem("token");
        console.log("Token from localStorage:", tokenFromLocalStorage);

        navigate("/profile");
      }
    }
  };

  return (
    <div>
      <DynamicNavBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLoginEvent}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                required
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* Placeholder link */}
            <span className="error-message">{errorMessage}</span>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignInPage;

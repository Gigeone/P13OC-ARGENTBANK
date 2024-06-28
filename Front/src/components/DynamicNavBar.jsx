import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../app/authSlice";
import login from "../assets/login.svg";
import logout from "../assets/logout.svg";
import logo from "../assets/argentBankLogo.png";

const ProfilNavigation = () => {
  const token = localStorage.getItem("token");
  const firstName = useSelector((state) => state.user.firstName);
  const [showSignin, setShowSignin] = useState(true);
  const [showLogOut, setShowLogout] = useState(false);
  const dispatch = useDispatch();

  const logOutProfil = () => {
    dispatch(logOut());
    setShowSignin(true);
    setShowLogout(false);
    localStorage.clear();
  };

  useEffect(() => {
    if (token) {
      setShowSignin(false);
      setShowLogout(true);
    }
  }, [token]);

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo__image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </NavLink>

      {showLogOut ? (
        <div className="main-nav-item">
          <NavLink className="main-nav-item" to="/profile">
            <img className="icon-profile" alt="" src={login} />
            <span>{firstName}</span>
          </NavLink>{" "}
          <NavLink to="/" onClick={logOutProfil} className="main-nav-item">
            <img className="icon-profile" alt="" src={logout} />
            <span>Sign out</span>
          </NavLink>
        </div>
      ) : null}

      {showSignin ? (
        <NavLink to="/sign-in" className="main-nav-item">
          <img className="icon-profile" alt="" src={login} />
          <span>Sign In</span>
        </NavLink>
      ) : null}
    </nav>
  );
};

export default ProfilNavigation;

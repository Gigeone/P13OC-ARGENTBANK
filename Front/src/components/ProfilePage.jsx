import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { getUserToken } from "../app/apiService";
import { logInSuccess } from "../app/authSlice";
import EditProfil from "./EditProfil";
import DynamicNavBar from "./DynamicNavBar";

const ProfilePage = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  useEffect(() => {
    (async () => {
      if (!token) {
        navigate("/sign-in");
      }
      try {
        const response = await getUserToken(token);
        console.log(response);
        dispatch(
          logInSuccess({
            firstName: response.firstName,
            lastName: response.lastName,
          })
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, navigate, token]);

  return (
    <div>
      <DynamicNavBar />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            <span>{firstName}</span> <span>{lastName}</span>
          </h1>
          <EditProfil />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;

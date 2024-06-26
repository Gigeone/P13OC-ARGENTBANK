import React, { useEffect } from "react";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";
import DynamicNavBar from "./DynamicNavBar";
import { useDispatch } from "react-redux";
import { logInSuccess } from "../app/authSlice";
import { getUserToken } from "../app/apiService";

const Home = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
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
  }, [dispatch, token]);

  return (
    <div className="home-page">
      <DynamicNavBar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

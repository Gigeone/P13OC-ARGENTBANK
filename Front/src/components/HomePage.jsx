import React from "react";
// import Navbar from "./NavBar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";
import DynamicNavBar from "./DynamicNavBar";

const Home = () => {
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

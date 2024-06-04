import React from "react";
import Navbar from "./NavBar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

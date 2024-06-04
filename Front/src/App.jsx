import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import SignIn from "./components/SignInPage";
import Profile from "./components/ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;

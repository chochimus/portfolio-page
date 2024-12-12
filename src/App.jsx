import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;

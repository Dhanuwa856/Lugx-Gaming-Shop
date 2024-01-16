import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import OurShop from "./Pages/OurShop/OurShop";
import Details from "./Pages/Details/Details";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourshop" element={<OurShop />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import SubNavbar from "../components/SubNavbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "../components/Products";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const categories = [
  "Cereals",
  "Drinks",
  "Fruits and Vegetables",
  "Snacks",
  "Alcohol",
];

const Home = () => {
  return (
    <div className="home">
      <Navbar page="home" />
      <SubNavbar categories={categories} />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;

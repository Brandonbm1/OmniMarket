import SubNavbar from "../components/SubNavbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "../components/Products";
import Layout from "../components/Layout";
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
      <Layout page="home">
        <SubNavbar categories={categories} />
        <Products />
      </Layout>
    </div>
  );
};

export default Home;

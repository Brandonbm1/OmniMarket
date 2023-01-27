import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Cart from "../pages/Cart";

const PageRoutes = () => {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<Navigate to="/search/cereals" />} />
        <Route index path="search/:categorie" element={<Home />} />
        <Route path="details/:product" element={<Details />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="*" element={<h1>Pa otro lado caremonda</h1>} /> */}
      </Routes>
    </div>
  );
};

export default PageRoutes;

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";

const PageRoutes = () => {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route index path="search" element={<Home />} />
      </Routes>
    </div>
  );
};

export default PageRoutes;

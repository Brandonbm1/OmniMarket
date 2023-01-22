import { Routes, Route, useLocation } from "react-router-dom";

const CategoriesRoutes = () => {
  const params = useLocation();
  console.log(params.pathname);
  return <div>CategoriesRoutes</div>;
};

export default CategoriesRoutes;

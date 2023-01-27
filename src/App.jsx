import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageRoutes from "./routes/PageRoutes";

const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <PageRoutes />
      {/* <Footer /> */}
    </div>
  );
};

export default App;

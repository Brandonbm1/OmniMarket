import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageRoutes from "./routes/PageRoutes";
import { CartContextProvider } from "./context/CartContext";
const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <CartContextProvider>
        <PageRoutes />
      </CartContextProvider>
      {/* <Footer /> */}
    </div>
  );
};

export default App;

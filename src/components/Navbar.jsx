import { BsFillPersonFill, BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__list">
          <li className="navbar__item navbar__icon">
            <NavLink to="/profile" className="navbar__item-link">
              <BsFillPersonFill className="navbar__icon-item" />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/" className="navbar__item-link">
              <img src={Logo} alt="logo" className="navbar__logo" />
            </NavLink>
          </li>
          <li className="navbar__item navbar__icon">
            <NavLink to="/cart" className="navbar__item-link">
              <BsCart4 className="navbar__icon-item" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

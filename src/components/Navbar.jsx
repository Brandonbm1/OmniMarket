import { BsFillPersonFill, BsCart4, BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
const Navbar = ({ page }) => {
  return (
    <nav className={`navbar`}>
      <div className="container">
        <ul className={`navbar__list navbar__list-${page}`}>
          <li className={`navbar__item navbar__item-${page} navbar__icon`}>
            <NavLink
              to="/profile"
              className={`navbar__item-link navbar__item-${page}-link`}
            >
              <BsFillPersonFill className="navbar__icon-item" />
            </NavLink>
          </li>
          <li className={`navbar__item navbar__item-${page}`}>
            <NavLink
              to="/"
              className={`navbar__item-link navbar__item-${page}-link`}
            >
              <img src={Logo} alt="logo" className="navbar__logo" />
            </NavLink>
          </li>
          <li
            className={`navbar__item navbar__item-${page} navbar__icon`}
            total-products={3}
          >
            <NavLink
              to="/cart"
              className={`navbar__item-link navbar__item-${page}-link`}
            >
              <BsCart4 className="navbar__icon-item" />
            </NavLink>
          </li>
          <li className={`navbar__item navbar__item-${page} navbar__icon`}>
            <NavLink
              to="/search/cereals"
              className={`navbar__item-link navbar__item-${page}-link`}
            >
              <BsArrowLeft className="navbar__icon-item" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

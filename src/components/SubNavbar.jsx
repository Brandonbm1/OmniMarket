import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
    <section className="subNavbar">
      <div className="container">
        <ul className="subNavbar__list">
          <li className="subNavbar__item">
            <Link to={"/search/cereals"} className="subNavbar__item-link">
              Cereals
            </Link>
          </li>
          <li className="subNavbar__item">
            <Link to={"/search/drinks"} className="subNavbar__item-link">
              Drinks
            </Link>
          </li>
          <li className="subNavbar__item">
            <Link to={"/search/fruits"} className="subNavbar__item-link">
              Fruits and Vegetables
            </Link>
          </li>
          <li className="subNavbar__item">
            <Link to={"/search/Snacks"} className="subNavbar__item-link">
              Snacks
            </Link>
          </li>
          <li className="subNavbar__item">
            <Link to={"/search/Alcohol"} className="subNavbar__item-link">
              Alcohol
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default SubNavbar;

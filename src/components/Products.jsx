import { useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { data } from "../assets/Data";
import Card from "../components/Card";
import { useCartContext } from "../context/CartContext";
import { actionsCartReducer } from "../helpers/actionsCartReducer";

const Products = () => {
  const { categorie } = useParams();
  const { dispatch } = useCartContext();
  const handle = (product) => {
    dispatch({
      type: actionsCartReducer.addNewProduct,
      product,
    });
  };
  return (
    <>
      <section className="home__header">
        <input
          className="home__searcher"
          type="text"
          placeholder="Search"
          id="searcher"
        />
        <label htmlFor="searcher" className="home__searcher-icon">
          <BsSearch className="home__searcher-icon" />
        </label>
      </section>
      <div className="container">
        <section className="home__cards">
          {data &&
            data.map((product) => {
              if (product.categorie.toLowerCase() == categorie.toLowerCase()) {
                return (
                  <Card product={product} key={product.id} handle={handle} />
                );
              }
            })}
        </section>
      </div>
    </>
  );
};

export default Products;

import { useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { data } from "../assets/Data";
import Card from "../components/Card";
import { useState } from "react";

const Products = () => {
  const { categorie } = useParams();
  const [toRender, setToRender] = useState(data);

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
                return <Card product={product} key={product.id} />;
              }
            })}
        </section>
      </div>
    </>
  );
};

export default Products;

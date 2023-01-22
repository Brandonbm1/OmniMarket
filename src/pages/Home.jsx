import { BsSearch } from "react-icons/bs";
import SubNavbar from "../components/SubNavbar";
import { data } from "../assets/Data";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <SubNavbar />

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
              return <Card product={product} key={product.id} />;
            })}
        </section>
      </div>
    </div>
  );
};

export default Home;

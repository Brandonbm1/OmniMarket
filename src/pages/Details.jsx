import { useParams } from "react-router-dom";
import { data } from "../assets/Data";
import { useEffect, useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCartContext } from "../context/CartContext";
import { actionsCartReducer } from "../helpers/actionsCartReducer";
const Details = () => {
  const { dispatch } = useCartContext();
  const { product } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  useEffect(() => {
    const changedProduct = data.find((changedProduct) => {
      return product.split("_").join(" ") === changedProduct.name;
    });
    setSelectedProduct(changedProduct);
  }, [product]);

  useEffect(() => {
    quantity > 1 ? setDisableButton(false) : setDisableButton(true);
  }, [quantity]);
  const changeQuantity = (choice) => {
    choice === "add"
      ? setQuantity((prevState) => prevState + 1)
      : setQuantity((prevState) => prevState - 1);
  };
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const addToCart = () => {
    dispatch({
      type: actionsCartReducer.addNewProduct,
      product: selectedProduct,
      quantity,
    });
  };
  return (
    <>
      <Navbar page="details" />
      <div className="container">
        <section className="details">
          <aside className="details__aside">
            <img
              className="details__image"
              src={selectedProduct?.picture}
              alt={selectedProduct?.name}
            />
            <h2 className="details__price">${selectedProduct?.price}</h2>
          </aside>
          <article className="details__info">
            <button
              className={`details__info-fav  ${favorite ? "fav" : ""}`}
              onClick={handleFavorite}
            >
              <BsSuitHeartFill className="details__info-fav-icon" />
            </button>
            <h3 className="details__info-name">{selectedProduct?.name}</h3>
            <h4 className="details__info-subtitle">
              {selectedProduct?.description} - {selectedProduct?.weigth}{" "}
              {selectedProduct?.weigthType}
            </h4>
            <summary className="details__info-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              unde repudiandae sit vero repellat quod, id labore nemo, veniam
              rem quidem. Sunt quod pariatur doloremque id consectetur iure enim
              voluptatibus! Quam aut dolore incidunt ipsam ipsa cum.
            </summary>
            <section className="details__info-buttons">
              <button
                className={`button details__info-button changeQuantity ${
                  disableButton ? "disable" : ""
                }`}
                onClick={() => changeQuantity("reduce")}
                disabled={disableButton ? true : false}
              >
                -
              </button>
              <span className="details__info-quantity">{quantity}</span>
              <button
                className="button details__info-button changeQuantity"
                onClick={() => changeQuantity("add")}
              >
                +
              </button>
              <button
                className="button details__info-button addToCart"
                onClick={() => addToCart()}
              >
                Add to cart
              </button>
            </section>
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Details;

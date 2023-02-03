import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { actionsCartReducer } from "../helpers/actionsCartReducer";
import { useCartContext } from "../context/CartContext";

const CartCard = ({ product, quantity, openModal }) => {
  const { dispatch } = useCartContext();
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    quantity > 1 ? setDisableButton(false) : setDisableButton(true);
  }, [quantity]);

  const changeQuantity = (choice) => {
    if (choice === "add") {
      dispatch({ type: actionsCartReducer.addOldProduct, product });
      //   setQuantity((prevState) => prevState + 1);
      //   // setSubTotal((prevState) => prevState + product.price);
    } else {
      dispatch({ type: actionsCartReducer.substractOldProduct, product });
      //   setQuantity((prevState) => prevState - 1);
      //   // setSubTotal((prevState) => prevState - product.price);
    }
  };
  return (
    <article className="CartCard">
      <img src={product.picture} alt={product.name} className="card__image" />
      <section className="CartCard__details">
        <Link
          to={`/details/${product.name.split(" ").join("_")}`}
          className="CartCard__link"
        >
          <p className="CartCard__name">{product.name}</p>
          <span className="CartCard__description">
            {product.description} - {product.weigth}
            {product.weigthType}
          </span>
        </Link>
        <article className="CartCard__buttons">
          <button
            className={`button CartCard__button changeQuantity ${
              disableButton ? "disable" : ""
            }`}
            onClick={() => changeQuantity("reduce")}
            disabled={disableButton ? true : false}
          >
            -
          </button>
          <span className="CartCard__quantity">{quantity}</span>
          <button
            className="button CartCard__button changeQuantity"
            onClick={() => changeQuantity("add")}
          >
            +
          </button>
        </article>
      </section>
      <aside className="CartCard__summary">
        <p className="CartCard__summary-price">${product.price}</p>
        <button
          className="button CartCard__summary-delete"
          onClick={() => {
            openModal(product, true);
          }}
        >
          <MdDeleteForever />
        </button>
      </aside>
    </article>
  );
};

export default CartCard;

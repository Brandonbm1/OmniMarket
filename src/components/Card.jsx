import { Link } from "react-router-dom";

const Card = ({ product, handle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handle(product);
  };
  return (
    <article className="card">
      <Link
        to={`/details/${product.name.split(" ").join("_")}`}
        className="card__link"
      >
        <img src={product.picture} alt={product.name} className="card__image" />
        <p className="card__name">{product.name}</p>
        <span className="card__description">
          {product.description} - {product.weigth}
          {product.weigthType}
        </span>
        <button className="card__button" onClick={handleClick}>
          <p className="card__price">${product.price}</p>
          <span className="card__add">ADD TO CART</span>
        </button>
      </Link>
    </article>
  );
};

export default Card;

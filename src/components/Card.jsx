const Card = ({ product }) => {
  return (
    <article className="card">
      <img src={product.picture} alt={product.name} className="card__image" />
      <p className="card__name">{product.name}</p>
      <span className="card__description">
        {product.name} - {product.weigth}
        {product.weigthType}
      </span>
      <button className="card__button">
        <p className="card__price">${product.price}</p>
        <span className="card__add">ADD TO CART</span>
      </button>
    </article>
  );
};

export default Card;

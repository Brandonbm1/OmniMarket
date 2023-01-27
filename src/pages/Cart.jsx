import Layout from "../components/Layout";
import { data } from "../assets/Data";
import { useEffect, useState } from "react";
import { FaRegSadCry } from "react-icons/fa";
import CartCard from "../components/CartCard";
import { BsArrowLeft } from "react-icons/bs";
import { BiCool } from "react-icons/bi";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(data.slice(0, 4));
  const [parcialTotal, setParcialTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const tax = 1;
  const [deliverPrice, setDeliverPrice] = useState(0);
  const [typeDeliver, setTypeDeliver] = useState("delivery");
  const [typeTip, setTypeTip] = useState("noTip");

  const deleteProduct = (productToDelete) => {
    setCartProducts((prevState) =>
      prevState.filter((product) =>
        product.name !== productToDelete.name ? product : null
      )
    );
  };

  const handleDelivery = (e) => {
    setTypeDeliver(e.target.value);
  };
  const handleTips = (e) => {
    setTypeTip(e.target.value);
  };

  const changeTotal = () => {
    let parcialTip = 0;
    if (typeDeliver === "delivery") {
      setDeliverPrice(1);
      if (typeTip === "smallTip") parcialTip = 5;
      else if (typeTip === "bigTip") parcialTip = 10;
    } else {
      setDeliverPrice(0);
    }

    const aux = cartProducts?.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
    setParcialTotal(aux + subTotal);
    setTotal(parcialTotal + tax + deliverPrice + parcialTip);
  };

  useEffect(() => {
    changeTotal();
  });
  return (
    <Layout page="details">
      <div className="container">
        <section className="cart">
          {cartProducts.length > 0 ? (
            <aside className="cart__products">
              {cartProducts.map((product) => {
                return (
                  <CartCard
                    product={product}
                    key={product.id}
                    setSubTotal={setSubTotal}
                    deleteProduct={deleteProduct}
                  />
                );
              })}
            </aside>
          ) : (
            <section className="cart__empty">
              <h3 className="cart__empty-title">
                Your cart is empty <FaRegSadCry />
              </h3>
              <span className="cart__empty-legend">
                Go back and find something <BiCool />
              </span>
              <Link to="/search/cereals" className="cart__empty-button">
                <BsArrowLeft />
                <span>Go to Search</span>
              </Link>
            </section>
          )}
          <summary className="cart__prices">
            <div className="cart__prices-content">
              <header className="cart__prices-header">
                <section className="cart__prices-section">
                  <input
                    type="radio"
                    name="deliverMode"
                    id="delivery"
                    className="cart__prices-input"
                    value="delivery"
                    checked={typeDeliver === "delivery" ? true : false}
                    onChange={handleDelivery}
                  />
                  <label
                    htmlFor="delivery"
                    className="selected cart__prices-label"
                  >
                    Delivery
                  </label>
                </section>
                <section className="cart__prices-section">
                  <input
                    type="radio"
                    name="deliverMode"
                    id="pickup"
                    className="cart__prices-input"
                    value="pickup"
                    checked={typeDeliver === "pickup" ? true : false}
                    onChange={handleDelivery}
                  />
                  <label htmlFor="pickup" className="cart__prices-label">
                    Pick Up
                  </label>
                </section>
              </header>
              <main className="cart__prices-main">
                <div className="cart__prices-main-container">
                  <section className="cart__prices-details">
                    <p className="cart__prices-tag">Subtotal:</p>
                    <p className="cart__prices-tag">${parcialTotal}</p>
                  </section>
                  <section className="cart__prices-details">
                    <p className="cart__prices-tag">Tax:</p>
                    <p className="cart__prices-tag">${tax}</p>
                  </section>
                  {typeDeliver === "delivery" && (
                    <section className="cart__prices-details">
                      <p className="cart__prices-tag">Deliver:</p>
                      <p className="cart__prices-tag">${deliverPrice}</p>
                    </section>
                  )}
                </div>
                {typeDeliver === "delivery" && (
                  <section className="cart__prices-tips">
                    <article className="cart__prices-tip">
                      <input
                        type="radio"
                        name="tip"
                        id="noTip"
                        className="cart__prices-input"
                        value="noTip"
                        checked={typeTip === "noTip" ? true : false}
                        onChange={handleTips}
                      />
                      <label htmlFor="noTip" className="cart__prices-tip-label">
                        No tip
                      </label>
                    </article>
                    <article className="cart__prices-tip">
                      <input
                        type="radio"
                        name="tip"
                        id="smallTip"
                        className="cart__prices-input"
                        value="smallTip"
                        checked={typeTip === "smallTip" ? true : false}
                        onChange={handleTips}
                      />
                      <label
                        htmlFor="smallTip"
                        className="cart__prices-tip-label"
                      >
                        Add $5 tip
                      </label>
                    </article>
                    <article className="cart__prices-tip selected">
                      <input
                        type="radio"
                        name="tip"
                        id="bigTip"
                        className="cart__prices-input"
                        value="bigTip"
                        checked={typeTip === "bigTip" ? true : false}
                        onChange={handleTips}
                      />
                      <label
                        htmlFor="bigTip"
                        className="cart__prices-tip-label"
                      >
                        Add $10 tip
                      </label>
                    </article>
                  </section>
                )}
              </main>
              <footer className="cart__prices-footer">
                <section className="cart__prices-footer-details">
                  <p className="cart__prices-footer-tag">Total:</p>
                  <p className="cart__prices-footer-tag">${total}</p>
                </section>
                <button
                  className={`cart__prices-button ${
                    cartProducts.length > 0 ? "" : "disabled"
                  }`}
                  disabled={cartProducts.length > 0 ? false : true}
                >
                  PROCEED TO CHECKOUT
                </button>
              </footer>
            </div>
          </summary>
        </section>
      </div>
    </Layout>
  );
};

export default Cart;

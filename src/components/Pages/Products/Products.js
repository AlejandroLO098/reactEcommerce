import React, { useState, useEffect } from "react";
import Carasoul from "./Carasoul/Carasoul";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const ecomProducts = async () => {
      try {
        const res = await fetch("https://ecom-server10.herokuapp.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    ecomProducts();
  }, []);

  const filterItem = (categoryItem) => {
    const updatedItems = products.filter((i) => {
      return i.category === categoryItem;
    });

    setProducts(updatedItems);
  };

  return (
    <>
      <Carasoul />
      <br />
      <br />
      <div className="filter_container">
        <div className="filter_tabs">
          <h2 className="filter_title">Filter:</h2>
          <button className="filter_btn" onClick={() => filterItem("Consoles")}>
            Console
          </button>
          <button className="filter_btn" onClick={() => filterItem("Games")}>
            Games
          </button>
        </div>
      </div>
      <div className="container">
        <div className="product-grid">
          {products.map((item) => {
            return (
              <div className="card1 stacked" key={item.id}>
                <img
                  src={item.image}
                  alt={item.product_name}
                  className="card__image"
                />
                <div className="card__content">
                  <h3 className="card__title">{item.product_name}</h3>
                  <p className="card__price">${item.price}</p>
                  <p className="card__description">{item.product_desc}</p>
                  <button>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;

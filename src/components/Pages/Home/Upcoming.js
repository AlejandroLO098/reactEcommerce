import React from "react";
import "./Upcoming.css";

const Upcoming = ({ heading, data }) => {
  return (
    <div className="products_cotainer">
      <h1 className="products_heading">{heading}</h1>
      <div className="product_wrapper">
        {data.map((product, index) => {
          return (
            <div className="product_card" key={index}>
              <img
                src={product.image}
                alt={product.alt}
                className="product_img"
              />
              <div className="product_info">
                <h2 className="product_title">{product.name}</h2>
                <p className="product_desc">{product.desc}</p>
                <p className="product_price">{product.price}</p>
                <button className="product_button">{product.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Upcoming;

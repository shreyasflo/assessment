import React from "react";
import "./product.css";

export const Product = React.memo(
  ({ title, image, subtitle, tags }) => {
    const tagsElement =
      tags &&
      tags.map((tag) => (
        <span key={tag} className="product-tag">
          {tag}
        </span>
      ));
    return (
      <div className="product-container">
        <img src={image} alt={title} className="product-img" />
        <p className="product-title">{title}</p>
        <p className="product-subtitle">{subtitle}</p>
        <div className="product-tags">{tagsElement}</div>
      </div>
    );
  }
);

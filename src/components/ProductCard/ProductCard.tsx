import React from "react";
import "./productCardStyle.css";

export type ProductCardType = {
  product: {
    title: string;
    text: string;
    tags: string;
    autor: string;
    img: string;
    img_2x: string;
    date: string;
    views: string;
  };
  onClickProduct: (product: any) => void;
};

export function ProductCard({ product, onClickProduct }: ProductCardType) {
  const { title, text, tags, autor, img, img_2x, date, views } = product;

  const handleProductClick = () => {
    onClickProduct(product);
  };

  return (
    <div className="product-card-container" onClick={handleProductClick}>
      <div className="product-card-image-container">
        <img
          width={360}
          height={230}
          src={img}
          alt={img}
          srcSet={`${img} 1x ${img_2x} 2x`}
        />
      </div>
      <div className="product-card-informations product-card-informations-container">
        <p className="product-card-tags">{tags}</p>
        <h3 className="product-card-title">{title}</h3>
        <div className="product-card-informations">
          <div className="product-card-author-and-date">
            <span className="product-card-autor">{autor}</span>
            <span className="product-card-date-and-views">
              <p className="dot" /> {date} <p className="dot" /> {views} Views
            </span>
          </div>
          <p className="product-card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

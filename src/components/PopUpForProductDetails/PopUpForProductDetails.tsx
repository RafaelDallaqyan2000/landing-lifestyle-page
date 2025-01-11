import React from "react";
import ReactDom from "react-dom";
import "./popUpStyles.css";

type PopUpType = {
  product: any;
  onCloseConfirm: (e: boolean) => void;
};

export function PopUpForProductDetails({ product, onCloseConfirm }: PopUpType) {
  if (!product || product.length === 0) {
    return null;
  }

  const { title, text, tags, autor, img, img_2x, date, views } = product;

  const hanldeCloseClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    onCloseConfirm(false);
  };

  return ReactDom.createPortal(
    <>
      <div onClick={hanldeCloseClick} className="background-popup" />
      <div className="popup-container">
        <span className="close-popup" onClick={() => onCloseConfirm(false)}>
          &#x2716;
        </span>
        <div className="popup-image">
          <img src={img} srcSet={`${img} 1x ${img_2x} 2x`} alt={img} />
        </div>
        <div className="popup-texts">
          <span className="product-card-tags">{tags}</span>
          <h3 className="product-card-title">{title}</h3>
          <div className="product-card-author-and-date">
            <span className="product-card-autor">{autor}</span>
            <span className="product-card-date-and-views">
              <p className="dot" /> {date} <p className="dot" /> {views} Views
            </span>
          </div>
          <p className="product-card-text">{text}</p>
        </div>
      </div>
    </>,
    document.getElementById("portal")!
  );
}

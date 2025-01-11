import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HeaderPage,
  NavBar,
  PopUpForProductDetails,
  ProductCard,
} from "../../components/index.ts";
import { getProducts } from "../../store/actions/getProducts.ts";
import "./homeStyles.css";

export function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);
  const [openMoreInfoPopUp, setOpenMoreInfoPopUp] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleProductClick = (product: any) => {
    setOpenMoreInfoPopUp(true);
    setSelectedProduct(product);
  };

  return (
    <>
      {openMoreInfoPopUp ? (
        <PopUpForProductDetails
          product={selectedProduct}
          onCloseConfirm={() => setOpenMoreInfoPopUp(false)}
        />
      ) : null}
      <div className="products-page">
        <HeaderPage />
        <NavBar />
        <div className="products-list">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              onClickProduct={handleProductClick}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

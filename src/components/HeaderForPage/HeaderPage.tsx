import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFunction } from "../../helpers/searchFunctional.ts";
import { setProducts, setShowNavbar } from "../../store/auth/auth-slice.ts";
import { SearchBar } from "../SearchBar/SearchBar.tsx";
import "./headerStyles.css";

export function HeaderPage() {
  const [inputValue, setInputValue] = useState("");
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const dispatch = useDispatch();
  const staticProducts = useSelector((state: any) => state.staticProducts);

  const handleClickOpenNavbar = () => {
    dispatch(setShowNavbar(true));
  };

  const handleClickCloseSearchBar = () => {
    setOpenSearchBar(false);
    setInputValue("");
  };

  const handleClickOpenSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const handleSearchChange = (event: any) => {
    setInputValue(event.target.value);
    dispatch(setProducts(searchFunction(staticProducts, event.target.value)));
  };

  return (
    <div className="horizontal-menu">
      <div className="logo">
        <span>
          <button
            onClick={handleClickOpenNavbar}
            className="homburger-button"
            style={{ display: window.innerWidth <= 768 ? "initial" : "none" }}
          >
            <img src={require("../../images/Hamburger.svg").default} />
          </button>
        </span>
        <img src={require("../../images/Logotype.svg").default} />
        <SearchBar
          inputValue={inputValue}
          onChange={handleSearchChange}
          handleClckCloseSearchBar={handleClickCloseSearchBar}
          show={openSearchBar}
        />

        <button onClick={handleClickOpenSearchBar} className="search-container">
          <img src={require("../../images/SearchIcon.svg").default} />
        </button>
      </div>
    </div>
  );
}

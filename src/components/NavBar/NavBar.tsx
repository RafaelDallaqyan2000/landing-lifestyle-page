import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../data";
import { useSticky } from "../../hooks/index.ts";
import { setShowNavbar } from "../../store/auth/auth-slice.ts";
import { CustomSelect } from "../CustomSelect/CustomSelect.tsx";
import "./navBarStyles.css";

export function NavBar() {
  const { navBarSections } = data;
  const navBarRef = useRef<null | any>(null);

  const showNavbar = useSelector((state: any) => state.showNavbar);
  const dispatch = useDispatch();

  useSticky(navBarRef);

  useEffect(() => {
    if (showNavbar) {
      navBarRef.current.style.left = "0px";
      document.body.style.overflowY = "hidden";
    } else {
      navBarRef.current.style.left = "-300px";
      document.body.style.overflowY = "scroll";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNavbar]);

  const hideNavBar = useCallback(() => {
    dispatch(setShowNavbar(false));
  }, []);

  return (
    <>
      {showNavbar ? (
        <div className="is-mobile-background-page" onClick={hideNavBar} />
      ) : null}
      <nav ref={navBarRef} className="navbar-container">
        <div className="is-mobile-navbar">
          <div>
            <img src={require("../../images/Logotype.svg").default} />
          </div>
          <div onClick={hideNavBar} className="close-btn">
            <img src={require("../../images/x.svg").default} />
          </div>
        </div>
        <div className="sections-container">
          {navBarSections.map((section) => (
            <CustomSelect section={section} />
          ))}
          <div className="by-now">
            <h4>Buy Now</h4>
          </div>
        </div>
      </nav>
    </>
  );
}

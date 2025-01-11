import { useEffect } from "react";

export const useSticky = (ref: any, callback = (e: any) => {}) => {
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = (e: any) => {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop && currentScroll > 345) {
        ref.current.style.top = "-60px";
      } else {
        ref.current.style.top = "0";
      }
      callback(e);

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

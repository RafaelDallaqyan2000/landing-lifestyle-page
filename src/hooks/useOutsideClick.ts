import { useEffect } from "react";

export function useOutsideClick(
  ref: any,
  callback = (e: any) => {},
  parent = document
) {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };
  useEffect(() => {
    parent.addEventListener("click", handleClick);
    return () => {
      parent.removeEventListener("click", handleClick);
    };
  }, []);
}

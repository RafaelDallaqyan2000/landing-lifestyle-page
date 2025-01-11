import React from "react";

type SearchBarType = {
  inputValue: string;
  onChange: (e: any) => void;
  handleClckCloseSearchBar: (e: any) => void;
  show: boolean;
};

export function SearchBar({
  inputValue,
  onChange,
  handleClckCloseSearchBar,
  show,
}: SearchBarType) {
  return show ? (
    <div id="search-bar" className="searchbar-container">
      <input
        value={inputValue}
        placeholder="Search by Titile or Autor:"
        onChange={onChange}
      />
      <button onClick={handleClckCloseSearchBar} className="x-icon">
        &#x2716;
      </button>
    </div>
  ) : null;
}

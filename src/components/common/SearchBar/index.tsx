import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.css";

export default function SearchBar() {
  const [toogleSearch, setToogleSearch] = useState<boolean>(false);
  const [overlay, setOverlay] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  return (
    <div className="search-bar">
      <div className={`search-bar-contain ${toogleSearch ? "active" : ""}`}>
        <input
          placeholder="keyword"
          onClick={() => {
            setOverlay(true);
            setToogleSearch(true);
          }}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <AiOutlineSearch
          className="search-bar-icon"
          //   onClick={() => setToogleSearch(false)}
        />
      </div>
      {!overlay && (
        <AiOutlineSearch
          className="search-bar-icon-md"
          onClick={() => {
            setToogleSearch(true);
            setOverlay(true);
          }}
        />
      )}
      <div
        className={`header-overlay ${overlay ? "active" : ""}`}
        onClick={() => {
          setOverlay(false);
          setToogleSearch(false);
          setKeyword("");
        }}
      ></div>
    </div>
  );
}

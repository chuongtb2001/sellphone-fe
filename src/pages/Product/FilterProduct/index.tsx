import { FaFilter } from "react-icons/fa";
import React, { useState } from "react";

import "./FilterProduct.css";
export default function FilterProduct() {
  const [needFilter, setNeedFilter] = useState(false);
  return (
    <>
      <div className="filter-product">
        <div className="filter-product-container">
          <button
            className="btn-filter-opt"
            onClick={() => setNeedFilter(true)}
          >
            <span>Filter</span> <FaFilter />
          </button>
          <select className="select-sort-opt">
            <option>Sort by: Default</option>
            <option>Sort by: Price</option>
            <option>Sort by: Rate</option>
          </select>
        </div>
      </div>
      <div className="filter-option"></div>
      {needFilter && (
        <>
          <div className="filter-product-module">
            <form>
              <div className="brand-field">
                <label>Brand</label>
                <select>
                  <option>Apple</option>
                </select>
              </div>
              <div className="screen-field">
                <label>Screen</label>
                <select>
                  <option>Apple</option>
                </select>
              </div>
              <div className="ram-field">
                <label>Ram</label>
                <select>
                  <option>Apple</option>
                </select>
              </div>
              <div className="storage-field">
                <label>Storage</label>
                <select>
                  <option>Apple</option>
                </select>
              </div>
              <div className="price-field">
                <label>Price</label>
                <input placeholder="Min price...." />
                <input placeholder="Max price...." />
              </div>
              <div className="rating-field">
                <label>Rating</label>
                <select>
                  <option>Apple</option>
                </select>
              </div>
              <div className="btn-opt-group">
                <button
                  className="btn-confirm"
                  onClick={(e) => {
                    e.preventDefault();
                    setNeedFilter(false);
                  }}
                >
                  CONFIRM
                </button>
                <button
                  className="btn-reset"
                  onClick={(e) => {
                    e.preventDefault();
                    setNeedFilter(false);
                  }}
                >
                  RESET
                </button>
              </div>
            </form>
          </div>
          <div
            className="filter-product-overlay"
            onClick={() => setNeedFilter(false)}
          ></div>
        </>
      )}
    </>
  );
}

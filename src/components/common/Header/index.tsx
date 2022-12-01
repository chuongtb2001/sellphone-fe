import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { MdLocalShipping, MdNavigation } from "react-icons/md";
import { AuthContext } from "../../../auth/Provider";
import SearchBar from "../SearchBar";
import "./Header.css";

export default function Header({ tab }: { tab?: string }) {
  const { state } = React.useContext(AuthContext);
  const [toogle, setToogle] = useState<boolean>(false);
  return (
    <header className="header">
      <nav className="header-container">
        <div className="group-header">
          <h1 className="logo">LOGO</h1>
          <div className="nav-link">
            <span>Home</span>/<span>Product</span>
          </div>
        </div>
        <div className="group-footer">
          <SearchBar />
          {state.isAuthenticated ? (
            <div className="user-menu">
              <MdLocalShipping />
              <AiOutlineShoppingCart />
              <span>
                Hi, <b>User</b>
              </span>
            </div>
          ) : (
            <div className="btn-login-register">
              <span>Login</span>/<span>Register</span>
            </div>
          )}
          {!toogle ? (
            <AiOutlineMenu
              className="icon-menu-md"
              onClick={() => setToogle(!toogle)}
            />
          ) : (
            <MdNavigation
              className="icon-menu-md"
              onClick={() => setToogle(!toogle)}
            />
          )}
          <ul className={toogle ? "menu-md active" : "menu-md"}>
            <li className={`${tab === "home" ? "active" : ""}`}>Home</li>
            <li className={`${tab === "product" ? "active" : ""}`}>Product</li>
            <li className={`${tab === "history-order" ? "active" : ""}`}>
              History order
            </li>
            <li className={`${tab === "cart" ? "active" : ""}`}>Cart</li>
            {state.isAuthenticated ? (
              <>
                <li className={`${tab === "profile" ? "active" : ""}`}>
                  User profile
                </li>
              </>
            ) : (
              <>
                <li>Login</li>
                <li>Register</li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

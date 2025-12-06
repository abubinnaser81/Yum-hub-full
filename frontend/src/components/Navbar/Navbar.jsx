import React, { useState, useContext } from "react";
import "./Navbar.css";

import assets from "../../assets/assets";
import { Link,useNavigate  } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);
 const navigation = useNavigate()

  const Logout = () => {
   localStorage.removeItem("token");
   setToken("");
    navigation("/");


  }

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo_yum} alt="Logo" className="logo" />
      </Link>

      {/* Menu Items */}
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => setMenu("mobileApp")}
            className={menu === "mobileApp" ? "active" : ""}
          >
            Mobile App
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="search-icon" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" className="basket-icon" />
          </Link>
          {/* dot indicator */}
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
    {!token? <button onClick={() => setShowLogin(true)}>Sign in</button>
 :<div className="navbar-profile">
    <img src={assets.profile_icon} alt="User" className="user-icon" />
    <ul className="nav-profile-dropdown">
      <li onClick={()=> navigation('/myorders')}><img src={assets.bag_icon} alt="" />Order</li>
      <hr />
      <li onClick={Logout}><img src={assets.logout_icon} alt="" />Logout</li>
    </ul>
    </div>}
      </div>
    </div>
  );
};

export default Navbar;

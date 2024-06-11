import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo/logo.png";


import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { AiFillShop } from "react-icons/ai";
import { IoMdMore } from "react-icons/io";

const Header = () => {
  return (
    <div className="nav">
      <div className="logo flex">
        <Link className="link" to="/"><img src={logo} alt="logo" /></Link>
      </div>

      <div className="searchbox flex">
        <FaSearch className="icon" />
        <input type="text" placeholder="Search for Products, Brands and More" />
      </div>

      <div className="login flex" >
        <FaRegUserCircle className="icon" />
        <Link className="link" to="Login">Login</Link>
      </div>

      <div className="cart flex">
        <BsCart3 className="icon" />
        <Link className="link" to="Cart">Cart</Link>
      </div>

      <div className="seller flex">
        <AiFillShop className="icon" />
        <Link className="link" to="Seller">Become a Seller</Link>
      </div>

      <div className="more">
        <IoMdMore className="icon" />
      </div>
    </div>
  );
};

export default Header;

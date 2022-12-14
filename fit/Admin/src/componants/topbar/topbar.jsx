import React from 'react';
import './topbar.css';
import { Fragment } from "react";
import { Link } from "react-router-dom";
export default function Topbar() {
  return (<header>
     <a href="#" class="logoo">
          Fit Nutration
        </a>
    <nav class="navbar">
      <ul>
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pro">All Products</Link>
        </li>
        <li>
          <Link to="/new">Add New Product </Link>
        </li>
      </ul>
    </nav>
    <div className="topRight">
      <div className="topbarIconContainer">
      </div>
      <img src="https://th.bing.com/th/id/R.201d17520f0f579146c4e7f45960dd39?rik=XEgdkmNtQ3N7bg&pid=ImgRaw&r=0" alt="" className="topAvatar" />
    </div></header>
  );
}

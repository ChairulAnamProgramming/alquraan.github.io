import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="nav fixed-bottom justify-content-center bg-dark">
      <Link to="/" className="text-decoration-none">
        <a className="nav-link text-white text-center  ">
          <i class="fa-solid fa-book-quran fa-fw"></i>
          <small className="d-block">AL-QUR'AN</small>
        </a>
      </Link>
    </nav>
  );
};

export default BottomNav;

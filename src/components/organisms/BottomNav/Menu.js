import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

const Menu = ({ title, href, icon, isActive }) => {
  const classLink = cx({
    "nav-link": true,
    "text-white": true,
    "text-center": true,
    active: isActive ? true : false,
  });
  return (
    <Link to={href} className="text-decoration-none ">
      <a className={classLink}>
        {icon}
        <small className="d-block">{title}</small>
      </a>
    </Link>
  );
};

export default Menu;

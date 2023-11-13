import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./MyLinks.module.css";

const MyLink = ({ children, to }) => {
  const path = useLocation().pathname;
  const match = path === to || path.includes(to);
  return (
    <Link
      className={match ? [styles.link, styles.active].join(" ") : styles.link}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MyLink;

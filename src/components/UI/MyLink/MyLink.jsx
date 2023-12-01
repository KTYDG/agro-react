import React from "react";
import classnames from "classnames";
import styles from "./MyLinks.module.css";
import { Link, useLocation } from "react-router-dom";

const MyLink = ({ children, to }) => {
  const path = useLocation().pathname;
  const match = path === to || path.includes(to);
  return (
    <Link
      className={match ? classnames(styles.link, styles.active) : styles.link}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MyLink;

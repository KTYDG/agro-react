import React from "react";
import classnames from "classnames";
import styles from "./MyForm.module.css";

const MyForm = ({ children, className, ...props }) => {
  return (
    <form className={classnames(styles.myForm, className)} {...props}>
      {children}
    </form>
  );
};

export default MyForm;

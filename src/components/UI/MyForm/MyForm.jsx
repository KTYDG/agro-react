import React from "react";
import styles from "./MyForm.module.css";

const MyForm = ({ children, className, ...props }) => {
  return (
    <form className={[styles.myForm, className].join(" ")} {...props}>
      {children}
    </form>
  );
};

export default MyForm;

import React from "react";
import styles from "./Pagination.module.css";
import left from "../../../images/left-arrow.png";
import right from "../../../images/right-arrow.png";

const Pagination = ({ totalItems, pagination, set }) => {
  return (
    <div className={styles.page__wrapper}>
      <select
        className={styles.limit}
        value={pagination.limit}
        onChange={(e) => set.limit(e.target.value)}
      >
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </select>
      <div className={[styles.page__total, styles.some_margin].join(" ")}>
        <div className={styles.page__wrapper}>
          <button
            className={styles.button__arrow}
            onClick={() => set.lastPage()}
          >
            <img src={left} alt="предыдущая"></img>
          </button>
          <button
            className={styles.button__arrow}
            onClick={() => set.nextPage(pagination.limit, totalItems)}
          >
            <img src={right} alt="следующая"></img>
          </button>
        </div>
        <p className={styles.total}>
          {(pagination.page - 1) * pagination.limit + 1}—
          {pagination.page * pagination.limit > totalItems
            ? pagination.page * pagination.limit -
              (pagination.page * pagination.limit - totalItems)
            : pagination.page * pagination.limit}
          {" из "}
          {totalItems}
        </p>
      </div>
    </div>
  );
};

export default Pagination;

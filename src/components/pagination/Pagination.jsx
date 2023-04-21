import { useState } from "react";
import styles from "./index.module.scss";

export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  index,
  setindex,
}) {
  let pages = [];

  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pages.push(index);
  }

  return (
    <div className={styles.Pagination}>
      {pages.map((page, i) => (
        <button
          key={i}
          className={`${index === i ? styles.active : styles.btns}`}
          onClick={() => {
            setindex(i);
            setCurrentPage(page);
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

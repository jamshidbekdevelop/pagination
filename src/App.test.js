import React, { useState } from "react";
import { favorit } from "./mock";
export const Pagination = () => {
  let pattern = null;
  const [post, setPost] = useState(favorit);
  const [page, setPage] = useState(1);
  const [countriesPerPage] = useState(3);
  const value = page;
  const range = Math.ceil(post.length / countriesPerPage);

  switch (true) {
    case range < 7:
      pattern = [...new Array(range)].map((_, i) => i + 1);
      break;
    case value < 4:
      pattern = [1, 2, 3, 4, 5, "...", range];
      break;
    case value > range - 4:
      pattern = [1, "...", range - 4, range - 3, range - 2, range - 1, range];
      break;
    default:
      pattern = [1, "...", value - 1, value, value + 1, "...", range];
  }
  const lastPageIndex = page * countriesPerPage;
  const firstPageIndex = lastPageIndex - countriesPerPage;
  const currentPageIndex = post.slice(firstPageIndex, lastPageIndex);
  function changeNumber(n) {
    if (typeof n === "number" && n > 0 && n <= range) {
      setPage(n);
    }
  }
  return (
    <div>
      <div>
        {currentPageIndex.map((itm) => {
          return (
            <div key={itm.id}>
              <h1>{itm.titles}</h1>
            </div>
          );
        })}
      </div>
      <div className="container">
        <button disabled={value <= 1} onClick={() => changeNumber(value - 1)}>
          {"<"}
        </button>
        {pattern.map((label) => (
          <button
            className={value === label ? "active" : ""}
            onClick={() => changeNumber(label)}
            isActive={value === label}
          >
            {label}
          </button>
        ))}
        <button
          disabled={value >= range}
          onClick={() => changeNumber(value + 1)}
        >
          {">"}ࣷ
        </button>
      </div>
    </div>
  );
};

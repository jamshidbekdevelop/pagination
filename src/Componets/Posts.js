import { useEffect, useState } from "react";
import { favorit } from "../mock";
import Post from "./Post";

export default function Posts() {
  const [post, setPost] = useState(favorit);
  const [page, setPage] = useState(1);
  const [countriesPerPage] = useState(3);

  const maxPage = Array.from(
    Array(Math.ceil(post.length / countriesPerPage)).keys()
  );

  const lastPageIndex = page * countriesPerPage;
  const firstPageIndex = lastPageIndex - countriesPerPage;
  const currentPageIndex = post.slice(firstPageIndex, lastPageIndex);

  const handleClickPagination = (page) => {
    if (typeof page === "number" && page > 0 && page <= favorit.length) {
      setPage(page);
    }
    // setPage(page);
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setPost(data));
  // }, []);

  return (
    <div>
      <div>
        {currentPageIndex.map((itm) => {
          return <Post key={itm.id} title={itm.titles} body={itm.body} />;
        })}
      </div>
      <div>
        {/* {maxPage.map((itm) => { */}
          {/* return( */}
          <button disabled={(itm + 1) <= 1} onClick={() => handleClickPagination((itm+1) - 1)}>{"<"}</button>
          {/* ) */}
        {/* })} */}
        {/* disabled={value <= 1} onClick={() => changeNumber(value - 1)} */}
        {maxPage.map((itm) => {
          return (
            // <div>
            <button
              className={`${itm + 1 === page ? "is-active" : ""}`}
              key={itm}
              onClick={() => handleClickPagination(itm + 1)}
            >
              {itm + 1}
            </button>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

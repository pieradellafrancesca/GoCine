import { useEffect, useState } from "react";
import { GET, GET_GENRES } from "../utils/https.js";
import Card from "../components/card";
import FormInput from "../components/formInput";
import Pagination from "../components/pagination";

import { AiOutlineSearch } from "react-icons/ai";
import styles from "../scss/pages/search.module.scss";

export default function Search() {
  const [data, setData] = useState({
    currentData: [],
    filteredData: null,
  });
  const { currentData, filteredData } = data;
  // #1 Search Input
  const [search, setSearch] = useState("");
  // #2 Pagination
  const [index, setindex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const lastpostIndex = currentPage * postPerPage;
  const firstPostIndex = lastpostIndex - postPerPage;

  useEffect(() => {
    GET("upcoming").then((data) =>
      setData((prev) => ({ ...prev, currentData: data.results }))
    );
  }, []);

  const handleChange = (e) => setSearch(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // #1
    const filteredData = currentData.filter((item) => {
      return item.title.includes(search);
    });
    setData((prev) => ({ ...prev, filteredData: [...filteredData] }));
    // #2
    setindex(0);
    setCurrentPage(1);
  };

  return (
    <section className={`${styles.Search} section`}>
      {/* <h1>Search your amazing movie</h1> */}
      <div className={styles.searchNav}>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            placeholder="Search upcoming"
            option="SEARCH"
            onChange={handleChange}
          >
            <button type="submit" className="icons">
              <AiOutlineSearch />
            </button>
          </FormInput>
        </form>
      </div>
      <div className={styles.container}>
        {filteredData &&
          filteredData
            .slice(firstPostIndex, lastpostIndex)
            .map((item, i) => (
              <Card key={i} data={item} stylesData={{ height: "375px" }} />
            ))}
        {!filteredData &&
          currentData
            .slice(firstPostIndex, lastpostIndex)
            .map((item, i) => (
              <Card key={i} data={item} stylesData={{ height: "375px" }} />
            ))}
      </div>
      <Pagination
        totalPosts={filteredData ? filteredData.length : currentData.length}
        postsPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        index={index}
        setindex={setindex}
      />
    </section>
  );
}

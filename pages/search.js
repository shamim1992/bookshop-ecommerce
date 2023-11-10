import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import useDebounce from "../hooks/useDebounce";
import styles from "./../styles/Search.module.css";
import Spin from "./../components/ui/Spin";
import Items from "../components/home/Items";
import { useGetItemsQuery } from "../store/apis/homeApi";
const Search = () => {
  const [] = useState();
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [response, setResponse] = useState({});
  const debounceQuery = useDebounce(query, 1000);
  const {
    refetch: refreshGetItems,
    data: items = [],
    isFetching: isGetFetchingItems,
    isLoading: isGetLoadingItems,
    isSuccess: isGetSuccessItems,
    isError: isGetErrorItems,
  } = useGetItemsQuery(debounceQuery, { skip: false }); // debounceQuery == null
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (debounceQuery) {
      setLoading(true);
      refreshGetItems();
    }
  }, [debounceQuery]);

  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <div className={styles.search_bar}>
          <span className="ml-3">
            <svg width="22px" height="22px">
              <path
                fill="#00000000"
                fillRule="evenOdd"
                d="M11.767,11.767m-8.989,0a8.989,8.989 0,1 1,17.978 0a8.989,8.989 0,1 1,-17.978 0"
                strokeWidth="1.5"
                stroke="#ccc"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fill="#ffffff"
                fillRule="evenOdd"
                d="M18.018,18.485L21.542,22"
                strokeWidth="1.5"
                stroke="#ccc"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="search"
            className="form-control"
            placeholder="Search for books"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className={styles.query}>Search results for {debounceQuery}</div>
      <div className={styles.suggestions}>
        <Items data={items} />
      </div>
    </div>
  );
};

export default Search;

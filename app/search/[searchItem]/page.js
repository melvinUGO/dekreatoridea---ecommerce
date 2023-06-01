"use client";
import HeadingOne from "@/components/HeadingOne";
import SearchInput from "@/components/SearchInput";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { debounce } from "lodash";

const SearchPage = ({ params }) => {
  const [searchItem, setSearchItem] = useState(params.searchItem);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useCallback(debounce(searchProducts, 500), []);

  // useEffect(() => {
  //   if (searchItem.length > 0) {
  //     setIsLoading(true);
  //     debouncedSearch(searchItem);
  //   } else {
  //     setProducts([]);
  //   }
  // }, [searchItem]);

  // function searchProducts(phrase) {
  //   axios
  //     .get("/api/products?phrase=" + encodeURIComponent(phrase))
  //     .then((res) => {
  //       setProducts(res.data);
  //       setIsLoading(false);
  //     });
  // }

  return (
    <>
      <div className="center px-[20px] py-[40px]">
        <HeadingOne text={`SEARCH RESULTS FOR "${params.searchItem}":`} />
        <SearchInput outline={true} searchedItem={params.searchItem} />
      </div>
    </>
  );
};

export default SearchPage;

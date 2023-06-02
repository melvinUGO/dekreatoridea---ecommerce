import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({
  outline = false,
  searchedItem,
  closeSidebar,
  closeSearchModal,
}) => {
  const [searchItem, setSearchItem] = useState(
    searchedItem ? searchedItem : ""
  );
  const router = useRouter();

  const searchProduct = (e) => {
    e.preventDefault();
    if (location.href.includes("search")) {
      router.push("/search/" + searchItem);
      return;
    }
    if (closeSidebar) {
      closeSidebar();
    }
    if (closeSearchModal) {
      closeSearchModal();
    }
    router.push("/search/" + searchItem);
  };
  return (
    <form
      onSubmit={searchProduct}
      className={` ${
        outline ? "border border-black p-3" : ""
      } flex items-center max-w-[600px] mx-auto`}
    >
      <input
        type="text"
        className="border-0  sm:grow outline-none"
        placeholder="Search our store..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button type="submit">
        {" "}
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchInput;

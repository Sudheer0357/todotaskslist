import React from "react";
import "./index.css";

const Search = ({ search, handleSeach }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <input
        type="text"
        placeholder="Search Tasks"
        search={search}
        onChange={(e) => handleSeach(e)}
      />
    </form>
  );
};

export default Search;

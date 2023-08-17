import React, { useState } from "react";
import "./SearchBox.css";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="キーワードや#（ハッシュタグ）を入力して検索..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">検索</button>
    </form>
  );
};

export default SearchBox;

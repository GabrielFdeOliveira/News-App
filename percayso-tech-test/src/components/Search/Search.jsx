import React, { useState } from 'react';

const Search = ({  handleClick }) => {
  const [searchTerm, setSearchTerm] = useState('World');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for news"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={() => handleClick(searchTerm)}>Search</button>
    </div>
  );
};

export default Search;

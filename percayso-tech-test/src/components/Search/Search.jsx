import React, { useState } from 'react';
import SearchStyle from './Search.module.css'

function Search({ handleClick }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(e) {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={SearchStyle.container}>
      <input className={SearchStyle.input}
        type="text"
        placeholder="Search for news"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={() => handleClick(searchTerm)} >Search</button>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../Search/Search';
import Card from '../Card/Card';

const App = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');

  const handleClick = async (searchTerm) => {
    setQuery(searchTerm);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://gnews.io/api/v4/search?q=${query}&token=3b72fd7da7be1b12071d51d6ef17d853`
      );
      setNews(result.data.articles);
    };
    fetchData();
  }, [query]);

  return (
    <div className="container">
      <Search  handleClick={handleClick} />
      <div className="cards">
        {news.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            description={article.description}
            image={article.image}
            link={article.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Search from '../Search/Search'
import AppCSS from './App.module.css'
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        'https://gnews.io/api/v3/search?q=technology&token=3b72fd7da7be1b12071d51d6ef17d853'
      );
      setArticles(result.data.articles);
    }
    fetchData();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

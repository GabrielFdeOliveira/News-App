import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../Search/Search';
import Card from '../Card/Card';
import AppStyle from './App.module.css';

/**
 * 
 * @returns The Search and Card components
 */
const App = () => {
  /* The news state is used to store the data returned from the API */
  const [news, setNews] = useState([]);

  /* The query state is used to store the user input received from the Search component through the handle click fn  */
  const [query, setQuery] = useState('');
  

/**
 * Receive the searchTerm via props from the Search component and update the query state here.
 * @param {string} searchTerm - Anything the user type in the input field.
 */  
  async function handleClick(searchTerm) {
    setQuery(searchTerm);
    /* Tryed to setQuery('') here to reset the input field but the request is never made */       
  }

/* We must utilize useEffect here because we are reatching outsite of our app and this can potetially create side-effects, also when using it we make sure our app only re-renders when necessary, in this case when the query state is updated */
  useEffect(() => {
    /**
     * Function responsible to fetch the data we need, I created the "term" variable to send a request on page load, otherwise it would only be sent when the user interacted with th input field. Following the API docs I was able to add a few more parameters to the request and only fetch 10 articles from UK.
     */
    async function fetchData() {
      const term = query || 'tech';
      const result = await axios.get(
        `https://gnews.io/api/v4/search?q=${term}&token=3b72fd7da7be1b12071d51d6ef17d853&lang=en&country=gb&max=10`
      );
      setNews(result.data.articles);
    }
    fetchData();
    /* Tryed to setQuery('') here to reset the input field and it didn't work too */ 
  }, [query]);

  return (
    <div className={AppStyle.container}>
      <h1>GNews API tech test</h1>
      <Search  handleClick={handleClick} />        
      <Card news={news}/>        
    </div>
  );
};

export default App;
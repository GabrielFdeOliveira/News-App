import React from 'react'
import CardCSS from './Card.module.css'

/**
 * 
 * @param {object} news It cointains the data fetched froom the API 
 * @returns A card cointainer with the data styled.
 */
function Card({ news }){
  console.log(news)
  return (
  <div className={CardCSS.container}>
    {/* This is a conditional redering, making sure "news" is not undefined and preventing a method error. */}
    {news.length > 0 &&
      news.map((newsItem, index) => (
        <article key={index}>
          <img  src={newsItem.image} alt={newsItem.title} />
          <h2 className={CardCSS.h2}>{newsItem.title}</h2>
          <p className={CardCSS.p}>{newsItem.description}</p>
          <a className={CardCSS.link} href={newsItem.url} target="_blank">
            Read More
          </a>
        </article> 
    ))}
  </div>
  );
}

export default Card;
import React from 'react'
import CardCSS from './Card.module.css'

function Card({ news }){
  console.log(news)
  return (
  <div className={CardCSS.container}>
    {news.length > 0 &&
      news.map((newsItem, index) => (
        <article>
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
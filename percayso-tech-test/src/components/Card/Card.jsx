import React from 'react'
import CardCSS from './Card.module.css'

const Card = ({ title, description, image, link }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link} target="_blank">
      Read More
    </a>
  </div>
);

export default Card;
import React from "react";
import "./PortfolioCard.css";

function PortfolioCard(props) {
  function handleClick(e) {
    e.preventDefault();
    props.handleCardClick({
      title: props.title,
      date: props.date,
      image: props.image,
      description: props.description,
      stack: props.stack,
      link_project: props.link_project,
      link_code: props.link_code,
      category: props.category,
    });
  }

  return (
    <article className="portfolio__card-item">
      <img
        className="portfolio__image"
        alt="фото"
        src={props.image}
        onClick={handleClick}
      />
      <h2 className="portfolio__title" onClick={handleClick}>
        {props.title}
      </h2>
      <h2 className="portfolio__date">{props.date}</h2>
    </article>
  );
}

export default PortfolioCard;

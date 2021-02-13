import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import DataObject from "./../../data/DataObject/DataObject";

function Portfolio(props) {
  //кнопки
  const [webButton, SetWebButton] = useState("");
  const [projectsButton, SetProjectsButton] = useState("");
  const [designButton, SetDesignButton] = useState("");
  const [frontButton, SetFrontButton] = useState("");
  //объект отрисовки
  const [objectDrawing, SetObjectDrawing] = useState(DataObject);

  useEffect(() => {
    SetProjectsButton("portfolio__info-item_color");
    SetDesignButton("");
    SetWebButton("");
    SetFrontButton("");
    SetObjectDrawing(DataObject);
  }, []);

  function filterCategory(str) {
    //фильтр категории
    return DataObject.filter(function (e) {
      return e.category === str;
    });
  }

  const frontOpen = () => {
    //front
    SetFrontButton("portfolio__info-item_color");
    SetProjectsButton("");
    SetDesignButton("");
    SetWebButton("");
    const newJson = filterCategory("front");
    SetObjectDrawing(newJson);
  };

  const sitesOpen = () => {
    //test
    SetWebButton("portfolio__info-item_color");
    SetProjectsButton("");
    SetDesignButton("");
    SetFrontButton("");
    const newJson = filterCategory("test");
    SetObjectDrawing(newJson);
  };

  const getAll = () => {
    //all projects
    SetWebButton("");
    SetProjectsButton("portfolio__info-item_color");
    SetDesignButton("");
    SetFrontButton("");
    SetObjectDrawing(DataObject);
  };

  const getDesign = () => {
    //back-end
    SetDesignButton("portfolio__info-item_color");
    SetWebButton("");
    SetProjectsButton("");
    SetFrontButton("");
    const newJson = filterCategory("back-end");
    SetObjectDrawing(newJson);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <h1 className="colunm__name colunm__name_height">
          Портфолио<span className="header__info-point">.</span>
        </h1>
        <ul className="navigator__info portfolio__info">
          <li
            className={`${projectsButton} portfolio__info-item navigator__info-item`}
            onClick={getAll}
          >
            ВСЕ ПРОЕКТЫ
          </li>
          <li
            className={`${webButton} portfolio__info-item navigator__info-item`}
            onClick={sitesOpen}
          >
            ТЕСТОВЫЕ ЗАДАНИЯ
          </li>
          <li
            className={`${designButton} portfolio__info-item navigator__info-item`}
            onClick={getDesign}
          >
            БЭКЕНД
          </li>
          <li
            className={`${frontButton} portfolio__info-item navigator__info-item`}
            onClick={frontOpen}
          >
            ФРОНТЕНД
          </li>
        </ul>
        <div className="portfolio__cards">
          {objectDrawing.map((item, index) => {
            return (
              <PortfolioCard
                key={index}
                image={item.image}
                date={item.date}
                title={item.title}
                category={item.category}
                handleCardClick={props.onCardClick}
                description={item.description}
                stack={item.stack}
                link_project={item.link_project}
                link_code={item.link_code}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

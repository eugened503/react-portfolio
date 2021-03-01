import React from "react";
import "./About.css";
import author from "./../../images/me_3.jpg";
import smiletooth from "./../../images/morty.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__info">
          <h1 className="about__info-title">
            Обо мне<span className="header__info-point">.</span>
          </h1>
          <p className="about__info-subtitle">
            Меня зовут Евгений Ларионов. Я начинающий Frontend-разработчик. В
            декабре 2020 года я закончил курсы Яндекс Практикума по профессии
            «Веб-разработчик». На курсах я изучил JavaScript, HTML и CSS, освоил
            React-разработку приложений и сборку на Webpack. Ко всему прочему, я
            научился применять систему контроля версий Git и изучил основы
            бэкенда: серверную разработку на Node.js, использование Express.js,
            MongoDB. В настоящее время ищу работу по специальности
            «Frontend-разработчик».
          </p>
          <div className="about__info-contacts">
            <ul className="about__key">
              <li className="about__key-item">PHONE</li>
              <li className="about__key-item">EMAIL</li>
              <li className="about__key-item about__key-item_margin">CITY</li>
              <li className="about__key-item">SOCIAL</li>
            </ul>
            <ul className="about__value">
              <li className="about__value-item">+7 (906) 767-44-39</li>
              <li className="about__value-item">
                zhenia.larionoff2015@yandex.ru{" "}
              </li>
              <li className="about__value-item">Москва</li>
              <li className="about__value-item">
                <ul className="about__social">
                  <li className="about__social-item">
                    <a
                      href="https://vk.com/id152488103"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="about__social-link fab fa-vk"></i>
                    </a>
                  </li>
                  <li className="about__social-item">
                    <a
                      href="https://www.instagram.com/don__lario/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="about__social-link fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="about__social-item">
                    <a
                      href="https://www.linkedin.com/in/евгений-ларионов-10370b202/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="about__social-link fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="about__value-img">
            <img src={smiletooth} alt="Морти" />
          </div>
        </div>
        <img src={author} className="about__img" alt="фото автора" />
      </div>
    </section>
  );
}

export default About;

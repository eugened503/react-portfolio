import imageMesto from "./../../images/mesto_1.jpg";
import imageMestoAuth from "./../../images/mesto_2.jpg";
import imageNews from "./../../images/news.jpg";
import learn from "./../../images/learn.jpg";
import travel from "./../../images/russian-travel.jpg";
import backend from "./../../images/backend.jpg";
import backendNews from "./../../images/backend_2.jpg";
import backendMesto from "./../../images/backend_3.jpg";
import kanban from "./../../images/kanban.jpg";
import kaliningrad from "./../../images/kaliningrad.jpg";
import chuck from "./../../images/chuck.jpg";

const DataObject = [
  {
    image: imageMesto,
    date: "август, 2020",
    title: "Проект «Mesto»",
    category: "front",
    description:
      "Данное приложение позволяет пользователю редактировать личный профиль, добавлять фотографии и оценивать фото других пользователей.",
    stack: "HTML, CSS, Webpack, Javascript",
    link_project: "https://eugened503.github.io/mesto/",
    link_code: "https://github.com/eugened503/mesto",
  },
  {
    image: imageNews,
    date: "декабрь, 2020",
    title: "Фронтенд-часть дипломного проекта News «Explorer»",
    category: "front",
    description:
      "Проект является сервисом по поиску новостей. Подробное описание на странице проекта.",
    stack: "HTML, CSS, React",
    link_project: "https://eugened503.github.io/news-explorer-frontend/#/",
    link_code: "https://github.com/eugened503/news-explorer-frontend",
  },
  {
    image: imageMestoAuth,
    date: "октябрь, 2020",
    title: "Проект «Mesto» c авторизацией и регистрацией",
    category: "front",
    description:
      "Данный проект - это проект «Mesto», переписанный на React.js. Подробное писание на странице проекта.",
    stack: "HTML, CSS, Javascript, React",
    link_project: "https://eugened503.github.io/react-mesto-auth/",
    link_code: "https://github.com/eugened503/react-mesto-auth",
  },
  {
    image: imageMesto,
    date: "август, 2020",
    title: "Проект «Mesto» на React.js",
    category: "front",
    description:
      "Цель данного проекта - создание личной страницы пользователя с возможностью редактирования профиля и обмена фотографиями.",
    stack: "HTML, CSS, Javascript, React",
    link_project: "https://eugened503.github.io/mesto-react/",
    link_code: "https://github.com/eugened503/mesto-react",
  },
  {
    image: learn,
    date: "февраль, 2020",
    title: "Проект «Научиться учиться»",
    category: "front",
    description:
      "Цель данного проекта - показать обучающему какие современные подходы к обучению существуют в настоящее время. Подробное писание на странице проекта.",
    stack: "HTML, CSS",
    link_project: "https://vigorous-kare-90ee57.netlify.app/",
    link_code: "https://github.com/eugened503/how-to-learn",
  },
  {
    image: travel,
    date: "март, 2020",
    title: "Проект «Путешествие по России»",
    category: "front",
    description:
      "Проект рассказывает о самых красивых местах нашей страны, в которых должен побывать каждый, кто любит природу России.",
    stack: "HTML, CSS",
    link_project: "https://russian-travel.vercel.app/",
    link_code: "https://github.com/eugened503/russian-travel",
  },
  {
    image: backend,
    date: "сентябрь, 2020",
    title: "Проект «Express-mesto»",
    category: "back-end",
    description: "Проект представляет собой сервер REST API для проекта Mesto.",
    stack: "Nodejs, Express, MongoDB",
    link_code: "https://github.com/eugened503/express-mesto",
  },
  {
    image: backendNews,
    date: "ноябрь, 2020",
    title: "Бэкенд-часть дипломного проекта News «Explorer»",
    category: "back-end",
    description:
      "Данный проект это - API  дипломного проекта News explorer. Подробное описание на странице проекта.",
    stack: "Nodejs, Express, MongoDB",
    link_code: "https://github.com/eugened503/news-explorer-api",
  },
  {
    image: backendMesto,
    date: "октябрь, 2020",
    title: "Бэкенд для проекта «Mesto»",
    category: "back-end",
    description:
      "Репозиторий для полноценного API проекта Mesto, включающий авторизацию и регистрацию пользователей, операции с карточками и пользователями.",
    stack: "Nodejs, Express, MongoDB",
    link_code: "https://github.com/eugened503/news-explorer-api",
  },
  {
    image: kanban,
    date: "февраль, 2021",
    title: "«Канбан-доска»",
    category: "test",
    description:
      "Доска включает в себя 3 колонки: «To Do», «In Progress», «Done». Подробное описание на странице проекта.",
    stack: "HTML, CSS, Typescript, React, Bootstrap, MerageJs.",
    link_project: "https://kanban-react-miragejs-typescript.vercel.app/",
    link_code: "https://github.com/eugened503/kanban-react-miragejs-typescript",
  },

  {
    image: kaliningrad,
    date: "январь, 2021",
    title: "«Туристические точки притяжения Калиниграда»",
    category: "test",
    description:
      "Проект представляет собой двухстраничное приложение. Кнопка «Перейти к карте» переводит пользователя на экран с картой.",
    stack: "HTML, CSS, Javascript, React, Mapbox",
    link_project: "https://kaliningrad-react-mapbox.vercel.app/",
    link_code: "https://github.com/eugened503/kaliningrad-react-mapbox",
  },
  {
    image: chuck,
    date: "январь, 2021",
    title: "«Chuck Norris Jokes»",
    category: "test",
    description:
      "Проект представляет собой двухстраничное приложение, выполненное в рамках тестового здания «Чак Норис челендж».",
    stack: "HTML, CSS, Javascript, React-Redux",
    link_project: "https://eugened503.github.io/chuck-norris-react-redux/",
    link_code: "https://github.com/eugened503/chuck-norris-react-redux",
  },
];

export default DataObject;

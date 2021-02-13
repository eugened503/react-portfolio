import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import BackToTop from "../BackToTop/BackToTop";
import Portfolio from "../Portfolio/Portfolio";
import ImagePopup from "../ImagePopup/ImagePopup";
import Feedback from "../Feedback/Feedback";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import InfoTooltipManage from "../InfoTooltipManage/InfoTooltipManage";
import InfoTooltipMistake from "../InfoTooltipMistake/InfoTooltipMistake";

function App() {
  const [selectedCard, setSelectedCard] = React.useState(false); //Хук для определения наличия CSS-класса видимости
  const [showImage, setShowImage] = React.useState({}); //Хук для захвата данных при клике на карточку
  const [darkBackground, setDarkBackground] = React.useState(false); //Хук для темного фона мобильного меню
  const [isSpinner, setIsSpinner] = useState("");
  const [isInfoTooltip, setInfoTooltip] = React.useState(false);
  const [isInfoTooltipMistake, setInfoTooltipMistake] = React.useState(false);

  function handleSetInfoTooltip() {
    //обработчик для открытия поп-апа после успешной oтправки письма
    setInfoTooltip(true);
  }

  function handleSetInfoTooltipMistake() {
    //обработчик для открытия поп-апа после неудачной oтправки письма
    setInfoTooltipMistake(true);
  }

  function handleSpinner(isLoading) {
    if (isLoading) {
      setIsSpinner("circle-preloader");
    } else {
      setIsSpinner("");
    }
  }

  function handleChangeBackground(background) {
    setDarkBackground(background);
  }

  function handleCardClick(data) {
    setSelectedCard(true);
    setShowImage(data);
  }

  function closeAllPopups() {
    //обработчик для закрытия поп-апов
    setSelectedCard(false);
    setInfoTooltip(false);
    setInfoTooltipMistake(false);
  }

  React.useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    });
  }, []);

  const overlayVisible = (e) => {
    if (e.target.classList.contains("popup")) {
      closeAllPopups();
    }
  };

  return (
    <div className="app">
      <Header
        handleChangeBackground={handleChangeBackground}
        darkBackground={darkBackground}
      />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Portfolio onCardClick={handleCardClick} />
      <Feedback />
      <Contact
        handleSpinner={handleSpinner}
        isSpinner={isSpinner}
        handleSetInfoTooltip={handleSetInfoTooltip}
        handleSetInfoTooltipMistake={handleSetInfoTooltipMistake}
      />
      <BackToTop />
      <Footer />
      <ImagePopup
        card={showImage}
        isOpen={selectedCard}
        onClose={closeAllPopups}
        overlayVisible={overlayVisible}
      />

      <InfoTooltipManage overlayVisible={overlayVisible} isOpen={isInfoTooltip} onClose={closeAllPopups} />
      <InfoTooltipMistake
      overlayVisible={overlayVisible}
        isOpen={isInfoTooltipMistake}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;

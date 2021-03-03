import React, { useEffect, useState } from "react";
import "./Quote.css";
import DataQuotes from "./../../data/DataQuotes/DataQuotes";

function Quote() {
  const [random, setRandom] = useState("");

  function randomQuote() {
    let random = DataQuotes[Math.floor(Math.random() * DataQuotes.length)];
    setRandom(random);
  }

  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <blockquote className="blockquote">
      <p className="experience__description">“{random.quote}”</p>
      <p className="about__key blockquote__source">{random.author}</p>
    </blockquote>
  );
}

export default Quote;

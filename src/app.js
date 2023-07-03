/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardElement = document.querySelector(".card");
  const suit = randomSuit();
  cardElement.classList.add("card");
  cardElement.classList.add(suit);

  const upperCornerElement = document.querySelector(".upperCorner");
  upperCornerElement.classList.add(suit);

  const lowerCornerElement = document.querySelector(".lowerCorner");
  lowerCornerElement.classList.add(suit);

  document.querySelector(".cardNumber").innerHTML = randomNumber();
};

let randomSuit = () => {
  const suits = ["heart", "diamond", "spade", "club"];
  const suitIndex = Math.floor(Math.random() * suits.length);
  return suits[suitIndex];
};

let randomNumber = () => {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];
  const numberIndex = Math.floor(Math.random() * numbers.length);
  return numbers[numberIndex];
};

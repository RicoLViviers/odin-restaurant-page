import "./styles.css"
import heroBg from './assets/hero-background.png';

const content = document.getElementById("content");

const heroSection = document.createElement("section");
heroSection.id = "hero";

const heroBackground = document.createElement("img");
heroBackground.src = heroBg;
heroBackground.alt = "image";
heroBackground.id = "hero-image"

const heroContent = document.createElement("div");
heroContent.id = "hero-content";

const heroFirst = document.createElement("p");
heroFirst.textContent = "WELCOME TO";
heroFirst.id = "hero-first";
heroContent.appendChild(heroFirst);

const heroTitle = document.createElement("p");
heroTitle.textContent = "The Golden Fork";
heroTitle.id = "hero-title";
heroContent.appendChild(heroTitle);

const heroText = document.createElement("p");
heroText.textContent = "Good food, great company. Enjoy fresh ingredients, delicious meals and a warm armosphere at The Golden Fork";
heroText.id = "hero-text";
heroContent.appendChild(heroText);

heroSection.appendChild(heroBackground);
heroSection.appendChild(heroContent);
content.appendChild(heroSection);
import heroBg from './assets/hero-background.png';
import leaf from './assets/leaf.png';
import chef from './assets/chef.png';
import people from './assets/people.png';
import restaurant from './assets/restaurant.png';

export default function showHomeContent(content) {

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






    const chooseUs = document.createElement("section");
    chooseUs.id = "choose-us";

    const chooseUsTitle = document.createElement("h2");
    chooseUsTitle.innerText = "Why Choose Us?";
    chooseUs.appendChild(chooseUsTitle);

    const reasonsContainer = document.createElement("div");
    reasonsContainer.id = "reasons-container";
    chooseUs.appendChild(reasonsContainer);





    const reason1Div = document.createElement("div");
    reason1Div.className = "reason-div";

    const reason1Img = document.createElement("img");
    reason1Img.src = leaf;
    reason1Div.appendChild(reason1Img);

    const reason1Title = document.createElement("h3");
    reason1Title.innerText = "Fresh Ingredients";
    reason1Div.appendChild(reason1Title);

    const reason1Text = document.createElement("p");
    reason1Text.innerText = "We use only the freshest, locally sourced ingredients.";
    reason1Div.appendChild(reason1Text);

    reasonsContainer.appendChild(reason1Div)




    const reason2Div = document.createElement("div");
    reason2Div.className = "reason-div";

    const reason2Img = document.createElement("img");
    reason2Img.src = chef;
    reason2Div.appendChild(reason2Img);

    const reason2Title = document.createElement("h3");
    reason2Title.innerText = "Skilled Chefs";
    reason2Div.appendChild(reason2Title);

    const reason2Text = document.createElement("p");
    reason2Text.innerText = "Our experienced chefs craft each dish with passion and care.";
    reason2Div.appendChild(reason2Text);

    reasonsContainer.appendChild(reason2Div)



    const reason3Div = document.createElement("div");
    reason3Div.className = "reason-div";

    const reason3Img = document.createElement("img");
    reason3Img.src = people;
    reason3Div.appendChild(reason3Img);

    const reason3Title = document.createElement("h3");
    reason3Title.innerText = "Great Atmosphere";
    reason3Div.appendChild(reason3Title);

    const reason3Text = document.createElement("p");
    reason3Text.innerText = "Relax and enjoy a warm, welcoming environment.";
    reason3Div.appendChild(reason3Text);

    reasonsContainer.appendChild(reason3Div)



    const reason4Div = document.createElement("div");
    reason4Div.className = "reason-div";

    const reason4Img = document.createElement("img");
    reason4Img.src = restaurant;
    reason4Div.appendChild(reason4Img);

    const reason4Title = document.createElement("h3");
    reason4Title.innerText = "Something for Everyone";
    reason4Div.appendChild(reason4Title);

    const reason4Text = document.createElement("p");
    reason4Text.innerText = "From hearty classics to unique specials, there's a dish for everyone's taste.";
    reason4Div.appendChild(reason4Text);

    reasonsContainer.appendChild(reason4Div)



    content.appendChild(heroSection);
    content.appendChild(chooseUs);
}
import "./styles.css"
import showContactContent from "./contact.js";
import showHomeContent from "./home.js";
import showMenuContent from "./menu.js";

const content = document.getElementById("content");

function clearPageContent() {
    while (content.firstChild) {
        content.firstChild.remove();
    }
}

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");


const buttons = [homeButton, menuButton, contactButton];

showHomeContent(content);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(button => button.classList.remove("active"));
        button.className = "active";

        let activeButton = document.querySelector(".active");
        if (activeButton.id == "home-button") {
            clearPageContent();
            showHomeContent(content);
        }

        else if (activeButton.id == "menu-button") {
            clearPageContent();
            showMenuContent(content);
        }

        else if (activeButton.id == "contact-button")
        {
            clearPageContent();
            showContactContent(content);
        }
    })
});


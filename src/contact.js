export default function showContactContent(content) {
    const contactSection = document.createElement("section");
    contactSection.id = "contact";

    // Header
    const contactHeader = document.createElement("div");
    contactHeader.className = "contact-header";

    const eyebrow = document.createElement("p");
    eyebrow.className = "contact-eyebrow";
    eyebrow.innerText = "GET IN TOUCH";

    const title = document.createElement("h2");
    title.innerText = "Contact Us";

    const intro = document.createElement("p");
    intro.innerText =
        "Have a question or planning a visit? We'd love to hear from you.";

    contactHeader.appendChild(eyebrow);
    contactHeader.appendChild(title);
    contactHeader.appendChild(intro);

    // Main layout
    const contactContainer = document.createElement("div");
    contactContainer.className = "contact-container";

    
    // Contact form
    const contactForm = document.createElement("form");
    contactForm.className = "contact-form";

    const formTitle = document.createElement("h3");
    formTitle.innerText = "Send Us a Message";

    contactForm.appendChild(formTitle);

    const fields = [
        {
            label: "Your Name",
            name: "name",
            type: "text",
            placeholder: "Enter your name"
        },
        {
            label: "Your Email",
            name: "email",
            type: "email",
            placeholder: "Enter your email"
        }
    ];

    fields.forEach((field) => {
        const group = document.createElement("div");
        group.className = "form-group";

        const label = document.createElement("label");
        label.htmlFor = field.name;
        label.innerText = field.label;

        const input = document.createElement("input");
        input.id = field.name;
        input.name = field.name;
        input.type = field.type;
        input.placeholder = field.placeholder;
        input.required = true;

        group.appendChild(label);
        group.appendChild(input);
        contactForm.appendChild(group);
    });

    const messageGroup = document.createElement("div");
    messageGroup.className = "form-group";

    const messageLabel = document.createElement("label");
    messageLabel.htmlFor = "message";
    messageLabel.innerText = "Your Message";

    const messageInput = document.createElement("textarea");
    messageInput.id = "message";
    messageInput.name = "message";
    messageInput.placeholder = "How can we help you?";
    messageInput.rows = 5;
    messageInput.required = true;

    messageGroup.appendChild(messageLabel);
    messageGroup.appendChild(messageInput);
    contactForm.appendChild(messageGroup);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = "Send Message";

    contactForm.appendChild(submitButton);

    // Prevent accidental page reload until a backend is connected
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thanks for reaching out! The contact form is not connected yet.");
    });

    contactContainer.appendChild(contactForm);

    contactSection.appendChild(contactHeader);
    contactSection.appendChild(contactContainer);
    content.appendChild(contactSection);
}
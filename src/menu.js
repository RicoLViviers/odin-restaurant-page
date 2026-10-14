export default function showMenuContent(content) {
    const menuSection = document.createElement("section");
    menuSection.id = "menu";

    const menuTitle = document.createElement("h2");
    menuTitle.innerText = "Our Menu";
    menuSection.appendChild(menuTitle);

    const menuText = document.createElement("p");
    menuText.innerText = "Fresh ingredients. Thoughtfully prepared. Made to be enjoyed";
    menuSection.appendChild(menuText);

    const starterTitle = document.createElement("h3");
    starterTitle.className = "menu-category";
    starterTitle.innerText = "Starters";
    menuSection.appendChild(starterTitle);

    const starterContainer = document.createElement("div");
    starterContainer.id = "starter-container";

    // Dish 1
    const starter1 = document.createElement("div");
    starter1.className = "dishes";

    const starter1Img = document.createElement("img");
    starter1Img.src = "https://lifewithjanet.com/wp-content/uploads/2023/10/Garlic-Parmesan-Mushrooms.png";

    const starter1Content = document.createElement("div");
    starter1Content.className = "dish-content";

    const starter1Title = document.createElement("h2");
    starter1Title.innerText = "Garlic Parmesan Mushrooms";

    const starter1Text = document.createElement("p");
    starter1Text.innerText = "Garlic Parmesan Mushrooms, the ultimate savory treat for mushroom lovers everywhere.";

    const starter1Price = document.createElement("h3");
    starter1Price.innerText = "R85";

    starter1.appendChild(starter1Img);
    starter1Content.appendChild(starter1Title);
    starter1Content.appendChild(starter1Text);
    starter1Content.appendChild(starter1Price);
    starter1.appendChild(starter1Content);
    starterContainer.appendChild(starter1);

    // Dish 2
    const starter2 = document.createElement("div");
    starter2.className = "dishes";

    const starter2Img = document.createElement("img");
    starter2Img.src = "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600";

    const starter2Content = document.createElement("div");
    starter2Content.className = "dish-content";

    const starter2Title = document.createElement("h2");
    starter2Title.innerText = "Classic Bruschetta";

    const starter2Text = document.createElement("p");
    starter2Text.innerText = "Toasted bread topped with fresh tomatoes, basil, garlic, and a drizzle of olive oil.";

    const starter2Price = document.createElement("h3");
    starter2Price.innerText = "R65";

    starter2.appendChild(starter2Img);
    starter2Content.appendChild(starter2Title);
    starter2Content.appendChild(starter2Text);
    starter2Content.appendChild(starter2Price);
    starter2.appendChild(starter2Content);
    starterContainer.appendChild(starter2);

    // Dish 3
    const starter3 = document.createElement("div");
    starter3.className = "dishes";

    const starter3Img = document.createElement("img");
    starter3Img.src = "https://images.unsplash.com/photo-1547592180-85f173990554?w=600";

    const starter3Content = document.createElement("div");
    starter3Content.className = "dish-content";

    const starter3Title = document.createElement("h2");
    starter3Title.innerText = "Creamy Tomato Soup";

    const starter3Text = document.createElement("p");
    starter3Text.innerText = "A rich, creamy tomato soup made with ripe tomatoes and fragrant herbs.";

    const starter3Price = document.createElement("h3");
    starter3Price.innerText = "R75";

    starter3.appendChild(starter3Img);
    starter3Content.appendChild(starter3Title);
    starter3Content.appendChild(starter3Text);
    starter3Content.appendChild(starter3Price);
    starter3.appendChild(starter3Content);
    starterContainer.appendChild(starter3);

    menuSection.appendChild(starterContainer);

    // Main Course
    const mainCourseTitle = document.createElement("h3");
    mainCourseTitle.className = "menu-category";
    mainCourseTitle.innerText = "Main Courses";
    menuSection.appendChild(mainCourseTitle);
    
    const mainCourseContainer = document.createElement("div");
    mainCourseContainer.id = "main-course-container";

    // Dish 1
    const main1 = document.createElement("div");
    main1.className = "dishes";

    const main1Img = document.createElement("img");
    main1Img.src = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600";

    const main1Content = document.createElement("div");
    main1Content.className = "dish-content";

    const main1Title = document.createElement("h2");
    main1Title.innerText = "Grilled Steak";

    const main1Text = document.createElement("p");
    main1Text.innerText = "Juicy grilled steak seasoned with herbs and served with roasted vegetables.";

    const main1Price = document.createElement("h3");
    main1Price.innerText = "R185";

    main1.appendChild(main1Img);
    main1Content.appendChild(main1Title);
    main1Content.appendChild(main1Text);
    main1Content.appendChild(main1Price);
    main1.appendChild(main1Content);
    mainCourseContainer.appendChild(main1);

    // Dish 2
    const main2 = document.createElement("div");
    main2.className = "dishes";

    const main2Img = document.createElement("img");
    main2Img.src = "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600";

    const main2Content = document.createElement("div");
    main2Content.className = "dish-content";

    const main2Title = document.createElement("h2");
    main2Title.innerText = "Creamy Mushroom Pasta";

    const main2Text = document.createElement("p");
    main2Text.innerText = "Tender pasta tossed in a creamy mushroom sauce with garlic and Parmesan.";

    const main2Price = document.createElement("h3");
    main2Price.innerText = "R145";

    main2.appendChild(main2Img);
    main2Content.appendChild(main2Title);
    main2Content.appendChild(main2Text);
    main2Content.appendChild(main2Price);
    main2.appendChild(main2Content);
    mainCourseContainer.appendChild(main2);

    // Dish 3
    const main3 = document.createElement("div");
    main3.className = "dishes";

    const main3Img = document.createElement("img");
    main3Img.src = "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600";

    const main3Content = document.createElement("div");
    main3Content.className = "dish-content";

    const main3Title = document.createElement("h2");
    main3Title.innerText = "Roast Chicken";

    const main3Text = document.createElement("p");
    main3Text.innerText = "Herb-roasted chicken served with golden potatoes and seasonal vegetables.";

    const main3Price = document.createElement("h3");
    main3Price.innerText = "R160";

    main3.appendChild(main3Img);
    main3Content.appendChild(main3Title);
    main3Content.appendChild(main3Text);
    main3Content.appendChild(main3Price);
    main3.appendChild(main3Content);
    mainCourseContainer.appendChild(main3);

    // Dish 4
    const main4 = document.createElement("div");
    main4.className = "dishes";

    const main4Img = document.createElement("img");
    main4Img.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600";

    const main4Content = document.createElement("div");
    main4Content.className = "dish-content";

    const main4Title = document.createElement("h2");
    main4Title.innerText = "Classic Margherita Pizza";

    const main4Text = document.createElement("p");
    main4Text.innerText = "A crispy pizza topped with tomato sauce, fresh mozzarella, and fragrant basil.";

    const main4Price = document.createElement("h3");
    main4Price.innerText = "R125";

    main4.appendChild(main4Img);
    main4Content.appendChild(main4Title);
    main4Content.appendChild(main4Text);
    main4Content.appendChild(main4Price);
    main4.appendChild(main4Content);
    mainCourseContainer.appendChild(main4);

    menuSection.appendChild(mainCourseContainer);
    content.appendChild(menuSection);
}

function createFoodPopup(foodName) {
    
    const foodData = {
        "Galaxy Salad": {
            image: "/Adem/adem_media/salad.jpg",
            ingredients: "Lettuce, Starfruit, Space Berries",
            calories: "120 kcal"
        },
        "Martian Soup": {
            image: "/Adem/adem_media/Soup.jpg",
            ingredients: "Tomatoes, Mars Herbs, Galactic Spices",
            calories: "150 kcal"
        },
        "Asteroid Rolls": {
            image: "/Adem/adem_media/Rolls.jpg",
            ingredients: "Dough, Space Cheese, Lunar Olives",
            calories: "200 kcal"
        },
        "Neptune Noodles": {
            image: "/Adem/adem_media/Noodle.jpg",
            ingredients: "Blue Noodles, Galactic Sauce, Star Vegetables",
            calories: "250 kcal"
        },
        "Saturn Steak": {
            image: "/Adem/adem_media/steak.jpg",
            ingredients: "Space Beef, Saturn Pepper, Moon Garlic",
            calories: "400 kcal"
        },
        "Venus Vegetable Stir-fry": {
            image: "/Adem/adem_media/stir.jpg",
            ingredients: "Venus Veggies, Solar Soy Sauce, Comet Oil",
            calories: "300 kcal"
        },
        "Cosmic Cake": {
            image: "/Adem/adem_media/cake.jpg",
            ingredients: "Galaxy Flour, Lunar Chocolate, Starlight Sugar",
            calories: "500 kcal"
        },
        "Luna Ice Cream": {
            image: "/Adem/adem_media/ice.jpg",
            ingredients: "Moon Milk, Space Vanilla, Asteroid Crunch",
            calories: "350 kcal"
        },
        "Star Cheesecake": {
            image: "/Adem/adem_media/cheesecake.jpg",
            ingredients: "Cheese, Starfruit, Space Honey",
            calories: "400 kcal"
        }
    };

    const food = foodData[foodName] || {
        image: "https://via.placeholder.com/150",
        ingredients: "Unknown ingredients",
        calories: "Unknown calories"
    };

    
    const popupOverlay = document.createElement('div');
    popupOverlay.classList.add('popup-overlay');

    
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
    popupContainer.innerHTML = `
        <h2>${foodName}</h2>
        <img src="${food.image}" alt="${foodName}" />
        <p><strong>Ingredients:</strong> ${food.ingredients}</p>
        <p><strong>Calories:</strong> ${food.calories}</p>
        <button class="close-popup">Close</button>
    `;

    
    const closeButton = popupContainer.querySelector('.close-popup');
    closeButton.addEventListener('click', () => {
        document.body.removeChild(popupOverlay);
        document.body.removeChild(popupContainer);
    });

   
    document.body.appendChild(popupOverlay);
    document.body.appendChild(popupContainer);

    
    popupOverlay.style.opacity = '0';
    popupContainer.style.opacity = '0';
    setTimeout(() => {
        popupOverlay.style.opacity = '1';
        popupContainer.style.opacity = '1';
    }, 10);
}


document.querySelectorAll('.menu-column ul li').forEach(foodItem => {
    foodItem.addEventListener('mouseenter', () => {
        foodItem.style.textDecoration = 'underline';
        foodItem.style.cursor = 'pointer';
    });

    foodItem.addEventListener('mouseleave', () => {
        foodItem.style.textDecoration = 'none';
    });

    foodItem.addEventListener('click', () => {
        createFoodPopup(foodItem.textContent);
    });
});

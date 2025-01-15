document.querySelectorAll('.menu-column').forEach(column => {
    column.addEventListener('mouseenter', () => {
        column.style.transform = 'scale(1.05)';
        column.style.transition = 'transform 0.3s ease';
    });

    column.addEventListener('mouseleave', () => {
        column.style.transform = 'scale(1)';
    });
});


function createPopup(columnContent) {
    
    const popupOverlay = document.createElement('div');
    popupOverlay.classList.add('popup-overlay');

    
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
    popupContainer.innerHTML = `
        <h2>${columnContent}</h2>
        <p>Explore the selection of items in the ${columnContent} category:</p>
        <ul>
            <li>${columnContent} Item 1</li>
            <li>${columnContent} Item 2</li>
            <li>${columnContent} Item 3</li>
            <li>${columnContent} Item 4</li>
            <li>${columnContent} Item 5</li>
        </ul>
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


document.querySelectorAll('.menu-column > h3').forEach(header => {
    header.addEventListener('click', () => {
        createPopup(header.textContent);
    });
});

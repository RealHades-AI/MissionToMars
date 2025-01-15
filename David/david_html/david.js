function createStars() {
    const numStars = 100;
    const body = document.body;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.left = Math.random() * window.innerWidth + 'px';
        body.appendChild(star);
    }
}

function toggleStars() {
    const stars = document.querySelectorAll('.star');
    if (stars.length > 0) {
        stars.forEach(star => star.remove());
    } else {
        createStars();
    }
}

document.getElementById('toggle-stars').addEventListener('click', toggleStars);

// Begin met sterren aan
createStars();

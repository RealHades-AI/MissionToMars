// Selecteer de lijst met films en de videospeler
const movieListItems = document.querySelectorAll('.scroll-bar li');
const videoPlayer = document.getElementById('movie-video');

// Voeg eventlisteners toe aan elk filmlijstitem
movieListItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Simuleer een videobron op basis van de film
        const movieSources = [
            'interstellar.mp4',
            'gravity.mp4',
            'the-martian.mp4',
            'space-odyssey.mp4',
            'star-wars.mp4'
        ];
        
        // Verander de bron van de video
        videoPlayer.src = movieSources[index];
        videoPlayer.play();
    });
});

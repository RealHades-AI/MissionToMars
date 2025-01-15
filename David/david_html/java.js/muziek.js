// Dynamisch liedjes toevoegen
const songs = [
    "Succubus - Ken Carson ",
    "Aygo - Cycy",
    "Pull up - Playboi Carti",
    "Chill Bae - Lil Uzi"
];

const songList = document.getElementById("songs");
const currentSong = document.getElementById("current-song");

songs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song;
    li.addEventListener("click", () => {
        currentSong.textContent = song;
    });
    songList.appendChild(li);
});

// Zoekfunctie
document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filteredSongs = songs.filter(song => song.toLowerCase().includes(query));

    songList.innerHTML = "";
    filteredSongs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = song;
        li.addEventListener("click", () => {
            currentSong.textContent = song;
        });
        songList.appendChild(li);
    });
});

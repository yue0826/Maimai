// URL for the maimai data
const dataUrl = "https://dp4p6x0xfi5o9.cloudfront.net/maimai/data.json";

// Global variable to store song data
let songs = [];

// Fetch the song data on page load
fetch(dataUrl)
  .then(response => response.json())
  .then(data => {
    songs = data.songs; // Assuming the JSON has a 'songs' array
    displayAllSongs(songs);
  })
  .catch(error => console.error("Error fetching data:", error));

// Display all songs in the list
function displayAllSongs(songs) {
  const songList = document.getElementById("songList");
  songList.innerHTML = ""; // Clear existing content

  songs.forEach(song => {
    const listItem = document.createElement("li");
    listItem.textContent = song.title; // Assuming each song has a 'title' property
    songList.appendChild(listItem);
  });
}

// Display a random song
function getRandomSong() {
  const randomIndex = Math.floor(Math.random() * songs.length);
  return songs[randomIndex];
}

// Display a song in the song display area
function displaySong(song) {
  const songDisplay = document.getElementById("songDisplay");
  songDisplay.innerHTML = `
    <h3>${song.title}</h3>
    <p>Artist: ${song.artist || "Unknown"}</p>
    <p>Level: ${song.level || "N/A"}</p>
  `;
}

// Event listeners for buttons
document.getElementById("randomSong").addEventListener("click", () => {
  const randomSong = getRandomSong();
  displaySong(randomSong);
});

document.getElementById("practiceSong").addEventListener("click", () => {
  // For now, practice song is just a random song
  // You can add criteria for "practice" songs if needed
  const practiceSong = getRandomSong();
  displaySong(practiceSong);
});

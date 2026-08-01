//my information
const studentInfo = document.createElement("p");
studentInfo.textContent = "Justine Gounga - Student ID: 200641729";
document.body.prepend(studentInfo);

// api key
const apiKey = "611df3cae4754c3fae5b210f0cefd7a3";

//page elements
const gameInput = document.getElementById("gameInput");
const searchBtn = document.getElementById("searchBtn");
const gameInformation = document.getElementById("gameInformation");

//search when button is clicked
searchBtn.addEventListener("click", searchGame);

function searchGame() {
    const gameName = gameInput.value.trim();

    // prevent an empty search
    if (gameName === "") {
        alert("Please enter a game title.");
        return;
    }

    const url =
        `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(gameName)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to retrieve game data.");
            }

            return response.json();
        })
        .then(data => {
            console.log(data.results);
        })
        .catch(error => {
            console.log(error);
        });
}
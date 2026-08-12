//my information
const studentInfo = document.createElement("p");
studentInfo.textContent = "Justine Gounga - Student ID: 200641729";
document.body.prepend(studentInfo);

//tmdb api information
const baseURL = "https://api.themoviedb.org/3/search/movie";
const key = "702999b56803635fb580bdf2d1f9214b";
let url;

// grab the html elements
const movieInput = document.querySelector("#movieInput");
const searchBtn = document.querySelector("#searchBtn");
const movieInformation = document.querySelector("#movieInformation");

// search when the button is clicked
searchBtn.addEventListener("click", searchMovies);

// functions
function searchMovies() {
    let movieName = movieInput.value.trim();

    // prevent an empty search
    if (movieName === "") {
        alert("Please enter a movie title.");
        return;
    }

    // build the complete api url
    url = `${baseURL}?api_key=${key}&query=${encodeURIComponent(movieName)}`;

    // send the request to the tmdb api
    fetch(url)
        .then((response) => {
            // check whether the response was successful
            if (!response.ok) {
                throw new Error("Unable to retrieve movie data.");
            }

            // convert the response into json
            return response.json();
        })
        .then((json) => {
            // pass the json data into the display function
            console.log(json);
        })
        .catch((error) => {
            // display an error message
            movieInformation.textContent = error;
        });
}
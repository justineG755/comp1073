//my information
const studentInfo = document.createElement("p");
studentInfo.textContent = "Justine Gounga - Student ID: 200641729";
document.body.prepend(studentInfo);

//tmdb api information
//LINK TO DOCUMENTATION - https://developer.themoviedb.org/docs/getting-started
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

    //send the request to the tmdb api
    fetch(url)
        .then((response) => {
            //check whether the response was successful
            if (!response.ok) {
                throw new Error("Unable to retrieve movie data.");
            }

            //convert the response into json
            return response.json();
        })
        .then((json) => {
            // pass the json data into the display function
           // console.log(json);
           displayResults(json);
        })
        .catch((error) => {
            //display an error message
            movieInformation.textContent = error;
        });
}

function displayResults(json) {
    console.log(json);

    //clear the previous search results
    while (movieInformation.firstChild) {
        movieInformation.removeChild(movieInformation.firstChild);
    }

    //store the movies returned by the api
    let movies = json.results;

    //display a message if no movies were found
    if (movies.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No movies found.";
        movieInformation.appendChild(message);
    } else {

        //display all movies returned by the api
        for (let i = 0; i < movies.length; i++) {
            const movieCard = document.createElement("article");
            const heading = document.createElement("h2");
            const image = document.createElement("img");
            const rating = document.createElement("p");
            const releaseDate = document.createElement("p");
            const overview = document.createElement("p");

            const currentMovie = movies[i];

            //add the movie information
            heading.textContent = currentMovie.title;

            if (currentMovie.poster_path !== null) {
                image.src =
                    `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`;
                image.alt = currentMovie.title;
            }

            rating.textContent =
                `Rating: ${currentMovie.vote_average}`;

            releaseDate.textContent =
                `Released: ${currentMovie.release_date || "Not available"}`;

            overview.textContent =
                `Overview: ${currentMovie.overview || "Not available"}`;

            //put the movie card together
            movieCard.appendChild(heading);

            if (currentMovie.poster_path !== null) {
                movieCard.appendChild(image);
            }

            movieCard.appendChild(rating);
            movieCard.appendChild(releaseDate);
            movieCard.appendChild(overview);

            //add the movie card to the page
            movieInformation.appendChild(movieCard);
        }
    }
}
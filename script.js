const url = "http://www.omdbapi.com/?i=tt3896198&apikey=ff819dff"
const searchButton = document.getElementById("searchBtn");
const inputSection = document.getElementById("searchInput") 
const movieResults = document.getElementById("movieResults")

async function fetchMovie(query){
    const response = await fetch(`${url}&s=${query}`)
    const data = await response.json();

    // console.log(data.Search);
    if(data.Response == "True"){
        displayMovies(data.Search);
    }else{
        movieResults.innerHTML = "<p>No movies available for this keyword, try something else.</p>"
    }

}

searchButton.addEventListener("click", function(){
    var inputQuery = inputSection.value.trim()
    if(inputQuery) fetchMovie(inputQuery);
    else console.log("Enter a valid keyword");
})

function displayMovies(movies){
    movieResults.innerHTML = ""
    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>Year: ${movie.Year}</p>
            <button>Add to Favorites</button>
        `;

        movieCard.classList = "movie-card"

        movieResults.appendChild(movieCard);
    });
}


document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

let searchData = document.getElementById("search").value;
  fetch(`http://www.omdbapi.com/?t=${searchData}&apikey=5eb7b297`)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "True") {
        document.querySelector(".poster img").src = data.Poster;
        document.getElementById("movieTitle").textContent = data.Title;
        document.getElementById("movieYear").textContent = data.Year;
        document.getElementById("movieDirector").textContent = data.Director;
        document.getElementById("movieCast").textContent = data.Actors;
        document.getElementById("movieLenguage").textContent = data.Language;
        document.getElementById("movieGenre").textContent = data.Genre;
        document.getElementById("movieCountry").textContent = data.Country;
        document.getElementById("movieRating").textContent = data.imdbRating;
      } else {
        alert("Movie not found!");
      }
    })
    .catch(err => console.log(err.message))
});

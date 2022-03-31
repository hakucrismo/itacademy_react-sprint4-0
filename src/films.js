// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map( (movie) => movie.director );
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter( (movie) => director === movie.director );
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = getMoviesFromDirector(array, director);
  let totalScore = 0;
  let avegareScore = 0;
  let scoresArray = [];

  scoresArray = directorMovies.map( (pelicula) => pelicula.score); 
  totalScore = scoresArray.reduce( (acumulatedScore, actualScore) => acumulatedScore += actualScore, 0 );
  avegareScore = totalScore / directorMovies.length;
  return avegareScore;
} 

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {  
  let newMoviesList = []; 
  let titlesArray = [];
  let first20Titles = [];

  // inmutabilidad
  newMoviesList = array.map( (movie) => movie );

  // Extraer los títulos y ordenarlos.
  titlesArray = newMoviesList.map( (pelicula) => pelicula.title); 
  titlesArray.sort();


  // TODO Mostrar solo hasta 20 títulos, DESPUÉS de ordenarlos.
  first20Titles = titlesArray.slice(0, 20);

  return first20Titles;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

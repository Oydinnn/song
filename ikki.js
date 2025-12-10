class Movie{
  constructor(id, title, genre, duration, rating = 0){
    this.id = id,
    this.title = title,
    this.genre = genre,
    this.duration = duration,
    this.rating = rating
  }
}

const movie1 = new Movie(1, 'mov_js_olma', "documental", 31, 5)
const movie2 = new Movie(2, 'mov_js2_anor', "melodramma", 32, 2)
const movie3 = new Movie(3, 'mov_js3_ananas', "drama", 33, 3)

class Cinema{
  constructor(){
    this.movies = []

  }
  addMovie(movie){
    this.movies.push(movie)
  }

  findByGenre(genre){
    return this.movies.find(m => m.genre === genre)
  }

  longestMovie(){
    return this.movies.reduce(
      (longest, m) => m.duration > longest.duration ? m : longest, this.movies[0] 
    )
  }

  shortestMovie(){
    return this.movies.reduce(
      (shortest, movie) => movie.duration < shortest.duration ? movie : shortest, 
      this.movies[0]    
    )
  }

  highestRatedMovie(){
    return this.movies.reduce(
      (rate, movie) => rate.rating > movie.rating ? rate : movie,
      this.movies[0]
    )
  }

  listMovies(){
    return this.movies
  }

  clearCinema(){
    this.movies = []
    return this.movies
  }

  searchByTitle(keyword){
    return this.movies.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()))
  }
}
//m olma
const cinema = new Cinema()

cinema.addMovie(movie1)
cinema.addMovie(movie2)
cinema.addMovie(movie3)
// console.log(cinema.findByGenre('drama'));
// console.log(cinema.longestMovie());
// console.log(cinema.shortestMovie());
// console.log(cinema.highestRatedMovie());
// console.log(cinema.listMovies());
// console.log(cinema.clearCinema());
console.log(cinema.searchByTitle('r'));














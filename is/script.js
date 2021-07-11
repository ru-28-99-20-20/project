const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const a  = prompt("Один из последних просмотрегых фильмов?", ""),
      d  = prompt("На склдько его оцените?", ""),
      b = prompt("Один из последних просмотрегых фильмов?", ""),
      c  = prompt("На склдько его оцените?", "");

personalMovieDB.movie [a] = b;
personalMovieDB.movie [b] = c;
console.log(personalMovieDB);



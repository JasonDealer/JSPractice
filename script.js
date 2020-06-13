let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstTitle = prompt('Название одно из последних фильмов?', '');
let firstRating = prompt('На сколько вы его оцениваете?', '');
let secondTitle = prompt('Название одно из последних фильмов?', '');
let secondRating = prompt('На сколько вы его оцениваете?', '');

personalMovieDB.movies [firstTitle] = firstRating,
personalMovieDB.movies [secondTitle] = secondRating;

console.log(personalMovieDB);
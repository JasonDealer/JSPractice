let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*let firstTitle = prompt('Название одно из последних фильмов?', '');
let firstRating = prompt('На сколько вы его оцениваете?', '');
let secondTitle = prompt('Название одно из последних фильмов?', '');
let secondRating = prompt('На сколько вы его оцениваете?', '');

personalMovieDB.movies [firstTitle] = firstRating,
personalMovieDB.movies [secondTitle] = secondRating;
*/
for (let i=0; i<2; i++) {
    let a = prompt('Название одно из последних фильмов?', '');
    let b = prompt('На сколько вы его оцениваете?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies [a] = b;
        console.log('OK');
    }
    else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("Что-то мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 50) {
    alert("Неплохо");
} else if (personalMovieDB.count > 50){
    alert("Да вы киноман!");
} else {
    alert("ОшибОЧКА");
}

console.log(personalMovieDB);
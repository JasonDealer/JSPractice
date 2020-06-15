let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();



function detectLevel() {
    if (personalMovieDB.count < 10) {
        alert("Что-то мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 50) {
        alert("Неплохо");
    } else if (personalMovieDB.count > 50){
        alert("Да вы киноман!");
    } else {
        alert("ОшибОЧКА");
    }
}

detectLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();
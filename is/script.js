'use strict';


let numberOfFilms;
function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
}
}

start();
const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms (){
    for( let i = 0; i < 2; i++){
    const  a  = prompt("Один из последних просмотрегых фильмов?", ""),
           d  = prompt("На склдько его оцените?", "");
    if (a != null && d != null && a !="" && d != "" && a.length < 50){
      personalMovieDB.movie [a] = d;  
      console.log('done');
    }else{
        console.log('error');
    i--;
     }
  }
}
rememberMyFilms(); 

function derectFuncLewel(){
   if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
    }else if(10 >= personalMovieDB.count < 30){
    console.log('Вы классический зритель');
  }   else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
   }  else {
    console.log('Произошла ошибка');
   }
    console.log(personalMovieDB);
}

derectFuncLewel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }

}
showMyDB (personalMovieDB.privat);

function wtitenOfGenres (){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`ваш улюблений жанр?  ${i}`);;
    }
}
wtitenOfGenres();



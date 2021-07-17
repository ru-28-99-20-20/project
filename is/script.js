const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

for( let i = 0; i < 2; i++){
    const  a  = prompt("Один из последних просмотрегых фильмов?", ""),
           d  = prompt("На склдько его оцените?", "");
    if (a != null && d != null && a !="" && d != "" && a.length < 50){
      personalMovieDB.movie [a] = d;  
      console.log('done');
    }else{
        console.log('error')
    i--;
    }
    
}
if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
}else if(10 >= personalMovieDB.count < 30){
    console.log('Вы классический зритель');
}else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
}else {
    console.log('Произошла ошибка');
}
console.log(personalMovieDB);



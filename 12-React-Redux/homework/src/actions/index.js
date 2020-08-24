// `getMovies`,
// `getMovieDetail`, ----> el payload sera el objeto con los detalles de la pelicula que seleccionamos.
// `addMovieFavorite`
// `removeMovieFavorite`. ---> playload pelicula a eliminar

export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function removeMovieFavorite(playload){
    return {type: 'REMOVE_MOVIE_FAVORITE', playload }   

}
  
export function getMovies(titulo) {
    return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then(response => response.json())
        .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}

export function getMovieDetail(id){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${id}&plot=full`)
            .then(response => response.json())
            .then(json => {
            dispatch({ type: "MOVIE_DETAIL", payload: json });
            });
    };

}


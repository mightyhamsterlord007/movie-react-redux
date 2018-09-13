import { FETCH_MOVIES, FETCH_TITLE_MOVIE, FETCH_CLICKED_MOVIE } from '../constants';
import axios from 'axios';

import { MOVIE_API_KEY } from './apiKey';

// export const fetchMovies = () => {
//     return {
//         type: FETCH_MOVIES,
//         data: 'THIS IS DATA'
//     }
// } 

export const fetchMovies = () => dispatch => {
    
    axios
        .get(`http://www.omdbapi.com/?s=superman&apikey=${MOVIE_API_KEY}&p=10`)
        .then(results => {
            
            dispatch({
                type: FETCH_MOVIES,
                data: results
            });

        })
        .catch(err => {
            console.log(err);
        });

} 

export const fetchTitleMovies = (title) => dispatch => {

    axios
        .get(`http://www.omdbapi.com/?s=${title}&apikey=713fbeb2&p=10`)
        .then( result => {
            dispatch({
                type: FETCH_TITLE_MOVIE,
                data: result
            })
        })
        .catch(err => {
            console.log(err);
        });

}

export const getClickedMovie = (id) => dispatch => {

    axios
        .get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=713fbeb2`)
        .then(result => {
            
            dispatch({
                type: FETCH_CLICKED_MOVIE,
                data: result
            })

        }) 
        .catch(err => {
            console.log(err);
        });

}
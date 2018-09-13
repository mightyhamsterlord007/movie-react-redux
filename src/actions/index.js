import { FETCH_MOVIES } from '../constants';
import axios from 'axios';

// export const fetchMovies = () => {
//     return {
//         type: FETCH_MOVIES,
//         data: 'DATA FETCH MOVIES'
//     }
// } 

export const fetchMovies = () => dispatch => {
    
    axios
        .get(`http://www.omdbapi.com/?s=superman&apikey=713fbeb2&p=10`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        });

} 


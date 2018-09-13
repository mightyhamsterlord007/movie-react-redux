import { FETCH_MOVIES } from '../constants';
import axios from 'axios';

// export const fetchMovies = () => {
//     return {
//         type: FETCH_MOVIES,
//         data: 'THIS IS DATA'
//     }
// } 

export const fetchMovies = () => dispatch => {
    
    axios
        .get(`http://www.omdbapi.com/?s=superman&apikey=713fbeb2&p=10`)
        .then(result => {
            
            dispatch({
                type: FETCH_MOVIES,
                data: result
            });

        })
        .catch(err => {
            console.log(err);
        });

} 


import { FETCH_MOVIES } from '../constants';

export const fetchMovies = () => {
    return {
        type: FETCH_MOVIES,
        data: 'FETCH MOVIES'
    }
}
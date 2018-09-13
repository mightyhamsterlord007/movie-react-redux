import { FETCH_MOVIES } from '../constants';

let initialState = {
    fetchedMovies: null
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);

    switch(action.type) {

        case FETCH_MOVIES:
            
            let movies = action.data.data.Search;

            updated.fetchedMovies = movies;

            return updated;

        default: 
            return state;
    }

}
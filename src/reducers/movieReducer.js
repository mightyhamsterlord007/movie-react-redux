import { FETCH_MOVIES } from '../constants';

let initialState = {
    fetchedMovies: null
}

export default (state = initialState, action) => {

    switch(action.type) {

        case FETCH_MOVIES:

            return state;

        default: 
            return state;
    }

}
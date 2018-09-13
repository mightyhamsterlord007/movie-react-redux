import { FETCH_MOVIES, FETCH_TITLE_MOVIE, FETCH_CLICKED_MOVIE } from '../constants';

let initialState = {
    fetchedMovies: null,
    clickedMovie: null
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);

    switch(action.type) {

        case FETCH_MOVIES:
            
            let movies = action.data.data.Search;

            updated.fetchedMovies = movies;

            return updated;
        case FETCH_TITLE_MOVIE:

            let fetchedTitleMovie = action.data.data.Search;

            updated.fetchedMovies = fetchedTitleMovie;

            return updated;

        case FETCH_CLICKED_MOVIE:

            let clickedMovie = action.data.data;

            updated.clickedMovie = clickedMovie;

            return updated
        default: 
            return state;
    }

}
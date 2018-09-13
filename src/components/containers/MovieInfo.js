import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Movie } from '../views';

import { getClickedMovie } from '../../actions';

import Spinner from '../../common/Spinner';

 class MovieInfo extends Component {

  componentDidMount() {
      console.log(this.props.match.params.id);
      this.props.getClickedMovie(this.props.match.params.id);
  }

  render() {

    let { clickedMovie } = this.props.movies;

    let selectedMovie;

    if (clickedMovie === null) {
        selectedMovie = <Spinner />
    } else {
        selectedMovie = <Movie item={clickedMovie} />
    }

    return (
      <div>
        {selectedMovie}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    movies: state.movies
});

export default connect(mapStateToProps, { getClickedMovie })(MovieInfo);

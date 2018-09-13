import React, { Component } from 'react'

import { connect } from 'react-redux';
import { fetchMovies } from '../../actions'
import { Movies } from '../views';
import Spinner from '../../common/Spinner';

 class Search extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }  
  
  render() {

		console.log(this.props.movies)

		const { fetchedMovies } = this.props.movies;

		let movies;

		if ( fetchedMovies !== null) {
			movies = fetchedMovies.map((item) => {
				return <Movies key={item.imdbID} item={item} />
			});
		} else {
			movies = <Spinner />;
		}

    return (
      <div>
        {movies}
      </div>
    )
  }
}

const mapStateToProps = state => ({
	movies: state.movies
});

export default connect(mapStateToProps, { fetchMovies })(Search);
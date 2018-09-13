import React, { Component } from 'react'

import { connect } from 'react-redux';
import { fetchMovies } from '../../actions'

 class Search extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }  
  
  render() {

		console.log(this.props.movies)

    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
	movies: state.movies
});

export default connect(mapStateToProps, { fetchMovies })(Search);
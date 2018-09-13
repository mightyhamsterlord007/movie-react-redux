import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchMovies } from '../../actions';

class Home extends Component {

  componentDidMount() {
      this.props.fetchMovies();
  }  


  render() {
      
    return (
      <div>
        Hamster
      </div>
    )
  }
}

const mapStateToProps = state => ({
    movies: state.movies
});

export default connect(mapStateToProps, { fetchMovies })(Home);
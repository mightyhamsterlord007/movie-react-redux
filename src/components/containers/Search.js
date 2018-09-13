import React, { Component } from 'react'

import { connect } from 'react-redux';
import { fetchMovies, fetchTitleMovies } from '../../actions'
import { Movies } from '../views';
import Spinner from '../../common/Spinner';

 class Search extends Component {

	constructor(props) {
		super(props);

		this.search = React.createRef();

		this.state = {
			title: ''
		}

	}

  componentDidMount() {
    this.props.fetchMovies();
	}  
	
	handleSearch = (event) => {
		let value = this.search.current.value;
		let updated = Object.assign({}, this.state.title);
		updated = value;
		this.setState({
			title: updated
		});
	}

	handleSubmitSearch = (event) => {
		event.preventDefault();
		this.props.fetchTitleMovies(this.state.title);
		event.target.reset();
	}
  
  render() {

		//console.log(this.props.movies)

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
      <div style={{marginTop: 100, textAlign: 'center'}}>
				<form onSubmit={this.handleSubmitSearch}>
					<input ref={this.search} onKeyUp={this.handleSearch} />
					<br />
					<button>Search Movie</button>
				</form>
				<br />
        {movies}
      </div>
    )
  }
}

const mapStateToProps = state => ({
	movies: state.movies
});

export default connect(mapStateToProps, { fetchMovies, fetchTitleMovies })(Search);
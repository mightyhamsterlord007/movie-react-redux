import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Movies = (props) => {
    return (
        <div style={{float: 'left', height: 500, width: 500}}>
            <Link to={`movie/${props.item.imdbID}`} ><img src={props.item.Poster} /></Link>
            <br />
            <span>{props.item.Title}</span>
            <br />
            <span>{props.item.Year}</span>
        </div>
    )
}

export default Movies;
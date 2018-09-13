import React, { Component } from 'react';

const Movie = (props) => {
    return (
        <div style={{float: 'left', height: 500, width: 500}}>
            <img src={props.item.Poster} />
            <br />
            <span>{props.item.Title}</span>
            <br />
            <span>{props.item.Year}</span>
        </div>
    )
}

export default Movie;
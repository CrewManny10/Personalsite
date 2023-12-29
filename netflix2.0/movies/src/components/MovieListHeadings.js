import React from "react";

//accepts a heading prop which gets rendered within a bootstrap column
//doing it this way makes it reuseable, and can be use else were
const MovieListHeading = (props) => {
    return (
        <div className="col">
            <h1>{props.heading}</h1>
        </div>
    );
};

export default MovieListHeading;

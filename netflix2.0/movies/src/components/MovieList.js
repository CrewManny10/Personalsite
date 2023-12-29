import React from 'react';

//  A component to display the list of movies
// Pass movie in as props and loop over the collection with map.
// Display/render image using tbe Poster URL as the source
// Assigned our prop component a variable (FavoriteComponent)
// hence i'll have more control over what gets rendered
const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;

  // Adding new class to the parent div (image-container) give the ability to add a zoom effect
  // New overlay div that shows zooming effect when the user hover over the poster
  // The handleFavoriteClick function is from props and add to (onClick)
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='movie' />
          <div onClick={() => props.handleFavoritesClick(movie)}
            className='overlay d-flex align-items-center justify-content-center'>
            <FavoriteComponent/>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;


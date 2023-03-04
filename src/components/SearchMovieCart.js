import React from "react";

function SerachMovieCart(props) {
  return (
    <div className="search-movie-cart">
      <div className="cart-img">
        <img
          src={props.movie.Poster}
          alt=""
        />
      </div>
      <div className="cart-details smc-details">
        <div>
          <h3 className="movie-title">{props.movie.Title}Superman</h3>
          <h5 className="movie-gen">Genre : {props.movie.Genre}</h5>
          <span>
            <img
              className="star-icon"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt=""
            />
            {props.movie.imdbRating}
          </span>
        </div>
        <button className="fav-btn smc-btn" onClick={props.addMovieToMovies}>Add to Movie</button>
      </div>
    </div>
  );
}

export default SerachMovieCart;
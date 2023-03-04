import MovieCart from "./MovieCart";
import { store } from "../store";
import { data } from "../data";
import React from "react";
import { addMovies } from "../actions/index";

class Movies extends React.Component {
  //its call when the app is render
  componentDidMount = () => {
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  };
  checkFavourites=(movie)=>{
    const tempFav=store.getState().movies.favourites;
    if (tempFav.indexOf(movie)>=0) {
        return true;
    }
    return false;
  }
  render() {
    let movies;
    if (this.props.isTrue) {
        movies = store.getState().movies.list;
    } else {
        movies = store.getState().movies.favourites;
    }
    let count=0;
    return movies.map((movie) => {
      count++;
      return <MovieCart movie={movie} key={count} isFav={this.checkFavourites(movie)}/>;
    });
  }
}
export default Movies;
import { addFavourites,removeFavourites } from "../actions";
import { store } from "../store";

function MovieCart(props){
    
    const addFavouriteArray=()=>{
        store.dispatch(addFavourites(props.movie))
    }
    const removeFavouriteArray=()=>{
        store.dispatch(removeFavourites(props.movie))
    }
    return(
        <div className="movie-cart">
            <div className="cart-img">
                <img src={props.movie.Poster} alt=""/>
            </div>
            <div className="cart-details">
                <h3 className="movie-title">{props.movie.Title}</h3>
                <p className="movie-dec">{props.movie.Plot}</p>
                <h5 className="movie-gen">Genre : {props.movie.Genre}</h5>
                <div className="cart-bottom">
                    <span><img className="star-icon" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt=""/>{props.movie.imdbRating}</span>
                    {props.isFav?<button className="fav-btn unfav" onClick={removeFavouriteArray}>Unfavourite</button>:<button className="fav-btn" onClick={addFavouriteArray}>Favourite</button>}
                </div>
            </div>
        </div>
    )
}
export default MovieCart;
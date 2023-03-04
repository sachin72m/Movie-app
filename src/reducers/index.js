import { combineReducers } from "redux"

// for Movies Reducer----------------------------------------------------------
const initialMoviesState={
    list:[],
    favourites:[]
}
export function moviesReducer(state=initialMoviesState,action) {
    switch (action.type) {
        case "ADD_MOVIES":
            return {
                ...state,
                list:action.movies
            }
        case "ADD_MOVIE":
            return{
                ...state,
                list:[action.movie,...state.list]
            }
        case "ADD_FAVOURITE":
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case "REMOVE_FAVOURITES":
            const filterArray=state.favourites.filter((movie)=>
                movie.Title !== action.movie.Title
            )
            return{
                ...state,
                favourites:filterArray
            }
        default:
            return state;
    }
}
// -----------------------------------------------------------------------------------

// for Search Reducer-----------------------------------------------------------------
const initialSearchState={
    result:{}
}
export function searchReducer(state=initialSearchState,action){
   switch (action.type) {
    case "ADD_MOVIE_SEARCH_RESULT":
        return {
            ...state,
            result:action.movie
        }
    default:
        return state
   }
}
// ------------------------------------------------------------------------------------

// for Root Reducer--------------------------------------------------------------------

// const initialRootState={
//     movies:initialMoviesState,
//     search:initialSearchState
// }
// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies:moviesReducer(state.movies,action),
//         search:searchReducer(state.search,action)
//     } 
// }

export default combineReducers({
    movies:moviesReducer,
    search:searchReducer
})
// ------------------------------------------------------------------------------------
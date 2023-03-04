import React, { Component } from 'react';
import { addMovie, addMovieSearchResult } from '../actions';
import { store } from '../store';
import SearchMovieCart from "./SearchMovieCart"

class Navbar extends Component {
    constructor(){
        super();
        this.state={
            inpText:"",
            showSearchMovie:false
        }
    }

    onChangeInput=async (e)=>{
        const text=e.target.value;
        await this.setState({
            inpText:text,
        })
    }
    handleSearch=async ()=>{
        const url=`http://www.omdbapi.com/?apikey=b413d0fe&t=${this.state.inpText}`
        const movie=await fetch(url).then((response) => response.json()).then((data) => data);
        store.dispatch(addMovieSearchResult(movie));
        this.setState({
         showSearchMovie:true
        }) 
    }
    addMovieToMovies=()=>{
        store.dispatch(addMovie(store.getState().search.result));
        this.setState({
            showSearchMovie:false
           }) 
    }
    render() {
        return (
        <>
        <div className="nav">
            <div className="nav-search">
                <input className="search-inp" placeholder="Search Movies" onChange={this.onChangeInput}/>
                <button className="search-btn" onClick={this.handleSearch}>Search</button>
            </div>
        </div>
        {this.state.showSearchMovie?<SearchMovieCart movie={store.getState().search.result} addMovieToMovies={this.addMovieToMovies}/>:""}
        </>
        );
    }
}

export default Navbar;
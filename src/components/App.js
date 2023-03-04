import React from 'react';
import './style/App.css';
import Navbar from './Navbar';
import Movies from './Movies';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      toggle:true
    }
  }
  // ---------------------------for show movies and favourites acording to user--------------------------
  toggleToTrue=()=>{
    this.setState({
      toggle:true
    })
  }
  toggleToFalse=()=>{
    this.setState({
      toggle:false
    })
  }
  // --------------------------------------------------------------------------------------------------------
  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className='main-center'>
          <div className='main-nav'>
            <div className={this.state.toggle?"tab active":"tab"} onClick={this.toggleToTrue}>Movies</div>
            <div className={this.state.toggle?"tab":"tab active"} onClick={this.toggleToFalse} >Favourites</div>
          </div>
          <hr/>
          <Movies isTrue={this.state.toggle}/>
        </div>
      </div>
    );
  }
}

export default App;
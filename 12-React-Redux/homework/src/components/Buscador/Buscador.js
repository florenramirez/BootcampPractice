import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Buscador.css';
import {getMovies, addMovieFavorite} from '../../actions/index.js'



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
        {this.props.movies && this.props.movies.map((el,i) => 
          <div key={i} className= "row cnt">
            <NavLink className="col-4" to={`/movie/${el.imdbID}`}>
              {el.Title}
            </NavLink>
            <button className= "col-1" onClick={() => this.props.addMovieFavorite({title: el.Title, id: el.imdbID})}>Fav</button>
          </div>
              
            
        )}
          
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}


export default connect(
  mapStateToProps,
  {addMovieFavorite, getMovies }
)(Buscador);
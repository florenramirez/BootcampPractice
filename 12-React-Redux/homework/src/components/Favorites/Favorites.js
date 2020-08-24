import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';


export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies && this.props.movies.map((el,i) => 
            <div className= "row cnt">
                <Link className="col-3" to={`/movie/${el.id}`}>
                  {el.title}
                </Link>
                <button className= "col-1" onClick={() => this.props.removeMovieFavorite({title: el.title, id: el.imdbID})}>X</button>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
    movies: state.movies
  }
}


export default connect(mapStateToProps, {removeMovieFavorite}) (ConnectedList);

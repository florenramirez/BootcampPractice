import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        const { match: {params: {id}} } =this.props;
        this.props.getMovieDetail (id);

    }



    render() {
        const { Title, Year, Rated, Plot, Poster, Director, BoxOffice, imgRating, Genre, Awards } = this.props.movieDetail
        return (
            <div className="movie-detail">
                <div className = 'movie-card'>
                    <div className = 'container'>
                    <div className = 'photo-cnt'>
                        <div className ='details'>
                            <div className= 'title'>{Title} <span>{Rated}</span></div>
                            <div>{Year}</div>
                        </div>
                    </div>
                    <div className='column'>
                        <p>{Plot}</p>
                    </div>
                        <div>
                            <img src={Poster} />
                        </div>
                    </div>
                </div>
                 
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        movieDetail: state.movieDetail
    }
}

export default connect (mapStateToProps, {getMovieDetail})(Movie);
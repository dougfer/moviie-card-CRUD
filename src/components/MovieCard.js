import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id, imagePath } } = this.props;
    return (
      <div className="movie-card movie-card-body" data-testid="movie-card">
        <p className="movie-card-title">{title}</p>
        <img src={ imagePath } alt="title" />
        <p className="movie-card-storyline">{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>

      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;

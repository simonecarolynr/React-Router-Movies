import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();

  
  useEffect(() => {
    const id = props.match.params.id;

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // const onClickHandler = () => {
  //   saveMovie()
  // }

  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' render= {(props) => {return <MovieList {...props}/>}} />
      <Route path='/movies/:id' render={(props) =>{return <Movie {...props}/>}}/>
    </div>
  );
};

export default App;
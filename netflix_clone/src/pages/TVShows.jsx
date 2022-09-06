import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { fetchMovies, getGenres } from '../store';

import { firebaseAuth } from "../utils/firebase-config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

export default function TVShows() {

const [isScrolled, setIsScrolled]=useState(false);

  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);

  const genresLoaded=useSelector((state)=>state.netflix.genresLoaded);
 
  const navigater=useNavigate();
  const dispatch=useDispatch();
  

  useEffect(() => {
    dispatch(getGenres());
  }, []);


  useEffect(()=>{
    if(genresLoaded) {
      dispatch(fetchMovies({type:"tv"}));//Only get movies no season
    }
  },[genresLoaded]); // [] so it only runs once


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
   // if(currentUser) navigater("/")
  });

  return (
    <Container>
        <div className="navbar">
            <Navbar isScrolled={isScrolled}/>
        </div>

        <div className="data">
        <SelectGenre genres={genres} type="tv"/>
            {
                movies.length ? <Slider movies={movies}/> : <NotAvailable/>
            }
        </div>
        



    </Container>
  )
}

const Container=styled.div`
    .data{
        margin-top:8rem;
        .not-available{
            text-align:center;
            color:white:
            margin-top:4rem;
        }
    }
`;


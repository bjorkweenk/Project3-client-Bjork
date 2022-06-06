import React from 'react';
import { Container, Button } from 'react-bootstrap'
import { Link, AuthContext } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import StoresService from '../../services/store.service.js'

const HomePage = (props) => {

    const [cuisines, setFilteredCuisines] = useState();
    //const {user} = useContext(AuthContext)

    useEffect(() => {                                // <== ADD THE EFFECT
        StoresService
          .getAllCuisines()
          .then((response) => {
            console.log('response.data', response.data);
            setFilteredCuisines(response.data)
          });
        
      }, [] );

    /* const handleCuisine = (e) => {
        e.preventDefault();

        StoresService
        .getStoresByCuisine()
        .then((cuisine) => setFilteredCuisines(cuisine))
    } */

    return (
        <Container>
            <h1>Welcome to Sharelicious!</h1>
            <hr />
           {/*  <ul>
            {cuisines.map((cuisine) => (
        <div key={props.store._id} className="card">
          <h3><Link href={handleCuisine}>{cuisine}</Link></h3>
        </div>
      ))}
            </ul> */}
            
        </Container>
    )
}

export default HomePage;                 
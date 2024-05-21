import React, { useState, useEffect } from 'react';
import { fetchPets } from '../services/petService';

function PlanetsList() {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getPets = async () => {
        try {
          const petsData = await fetchPets();
          setPlanets(planetsData);
          setLoading(false);
        } catch (error) {
          setError('Failed to fetch planets. Please try again later.');
          setLoading(false);
        }
      };
      getPets();
    }, []);
  
    return (
      <div>
        <h2>Pets</h2>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <ul>
            {planets.map((planet) => (
              <li key={planet.name}>
                <div>
                  <h3>{pet.name}</h3>
                  <p>Name: {pet.name}</p>
                  <p>Age: {pet.age}</p>
                  <p>Breed: {pet.breed}</p>

              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default PetsList;
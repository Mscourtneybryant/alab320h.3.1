import React, { useState, useEffect } from 'react';
import { fetchStarships } from './services/api';
import Starship from './components/Starship';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const fetchedStarships = await fetchStarships();
      setStarships(fetchedStarships);
    };

    getStarships();
  }, []);

  return (
    <div className="app">
      <div id="starship"><h1>STAR WARS STARSHIPS</h1></div>
      <div id="starship-container">
        {starships.map(starship => (
          <Starship key={starship.name} name={starship.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

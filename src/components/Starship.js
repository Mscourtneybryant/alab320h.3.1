import React from 'react';

function Starship({ name }) {
  return (
    <div className="starship-card">
      <div className="starship-name">{name}</div>
    </div>
  );   
}

export default Starship;

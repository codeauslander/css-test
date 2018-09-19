import React from 'react';
import './Grid.css';
import './basic.css';


const Grid = () => {
  return (
    <main>
      <h1 className="title">AUTO-FIT</h1>
      <div className="container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <h1 className="title">AUTO-FILL</h1>
      <div className="container2">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </main>
    
  );
};

export default Grid;

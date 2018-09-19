import React from 'react';
import './Grid.css';
import './basic.css';


const Grid = () => {
  return (
    <main>
      <p>FLEXBOX HEADER</p>
      <div className="flexbox-header">
          <div>HOME</div>
          <div>SEARCH</div>
          <div>LOGOUT</div>
      </div>
      <br />
      <p>GRID PAGE</p>
      <div className="grid-page">
          <div className="header">
              <div>HOME</div>
              <div>SEARCH</div>
              <div>LOGOUT</div>
          </div>
          <div className="menu">MENU</div>
          <div className="content">CONTENT</div>
          <div className="footer">FOOTER</div>
      </div>
    </main>
  );
};

export default Grid;

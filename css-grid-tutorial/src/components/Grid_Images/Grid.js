import React from 'react';
import './Grid.css';
import './basic.css';

import wolf from './img/full_wolf_moon.jpg';
import cats from './img/cute-kittens.jpg';
import duck from './img/duck.jpg';

const Grid = () => {
  return (
    <div className="container">
      <div><img src={duck}/></div>
      <div className="vertical"><img src={wolf}/></div>
      <div className="horizontal"><img src={cats}/></div>
      <div><img src={duck}/></div>
      <div><img src={wolf}/></div>
      <div className="big"><img  src={cats}/></div>
      <div><img src={duck}/></div>
      <div className="vertical"><img src={wolf}/></div>
      <div><img  src={cats}/></div>
      <div className="horizontal"><img src={duck}/></div>
      <div><img src={wolf}/></div>
      <div className="big"><img  src={cats}/></div>
      <div><img src={duck}/></div>
      <div className="horizontal"><img src={wolf}/></div>
      <div><img  src={cats}/></div>
      <div className="big"><img src={duck}/></div>
      <div><img src={wolf}/></div>
      <div className="vertical"><img  src={cats}/></div>
    </div>
  );
};

export default Grid;

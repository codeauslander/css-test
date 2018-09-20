import React from 'react';
import './Flexbox.css';
import wolf from './img/full_wolf_moon.jpg';
import cats from './img/cute-kittens.jpg';
import duck from './img/duck.jpg';

const Flexbox = () => {
  return (
    <div className="container">
      <div className="normal"><img src={wolf}/></div>
      <div  className="big"><img src={cats}/></div>
      <div className="big"><img src={duck}/></div>
      <div className="normal"><img src={wolf}/></div>
      <div className="big"><img src={cats}/></div>
      <div className="normal"><img src={duck}/></div>
      <div className="big"><img src={wolf}/></div>
      <div className="normal"><img src={cats}/></div>
      <div className="big"><img src={duck}/></div>
      <div className="big"><img src={wolf}/></div>
      <div className="normal"><img src={cats}/></div>
    </div>
  );
};

export default Flexbox;

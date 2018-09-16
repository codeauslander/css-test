import React from 'react';

const Card = (props) => {
  console.log(props.image);
  return (
    <article className='card'>
      <img src={props.src} alt="image_card" className={props.className}/>
      <h1 className="tittle"></h1>
      <p className="description"></p>
      <ul className="list">
        <li></li>
      </ul>
      
      <button className="github"></button>
      <button className="live"></button>
      <button className="video"></button>
    </article>
  )
}

export default Card;

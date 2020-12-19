import React from 'react';
import placeholder from '../assets/img/placeholderL.png';

export default function DislayContainer(props) {
  return (
    <div className="DisplayContainer">
      <header>
        <div className="DisplayContainer--logo">
          <img src={placeholder} alt="placeholder L"/>
        </div>
        <h2>{props.title}</h2>
      </header>
      <section className="DisplayContainer--main">
        {props.children}
      </section>
    </div>
  )
}

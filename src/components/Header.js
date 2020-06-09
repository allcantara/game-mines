import React from 'react';
import './style/header.css'

import mine from '../assets/mine.png'

export default props => {
  return (
    <div className="header-container">
      <div className="flag-container">
        <div className="flag-button">
          <img src={mine} className="mine-image" />
        </div>
        <span className="flag-left">{props.flagsLeft}</span>
      </div>
      <button className="button" onClick={props.onNewGame}>
        <span className="button-label">Novo Jogo</span>
      </button>
    </div>
  );
}

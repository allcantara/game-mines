import React from 'react';

import './style/levelSelection.css'

export default props => {
  return (
    <div >
      <div className="frame">
        <div className="container-frame">
          <span className="title">Selecione o nível do Jogo:</span>
          <button className="button bg-easy"
            onClick={() => props.onLevelSelected(0.1)} >
            <span className="button-label-frame">Fácil</span>
          </button>

          <button className="button bg-normal"
            onClick={() => props.onLevelSelected(0.2)} >
            <span className="button-label-frame">Intermediário</span>
          </button>

          <button className="button bg-hard"
            onClick={() => props.onLevelSelected(0.3)} >
            <span className="button-label-frame">Difícil</span>
          </button>
        </div>
      </div>
    </div>
  );
}


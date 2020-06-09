import React from 'react';

import Mine from './Mine'
// import Flag from './Flag'

import './style/field.css'

export default props =>  {
  const { mined, opened, nearMines, exploded, flagged } = props

  let styleField = 'field'
  if(opened) styleField+= ' opened'
  if(exploded) styleField+= ' exploded'
  // if(flagged) styleField+= ' flagged'
  if(!opened && !exploded) styleField+= ' regular'

  let color = null
  if(nearMines > 0) {
    if(nearMines === 1) color = '#2A28D7'
    if(nearMines === 2) color = '#2B520F'
    if(nearMines > 2 && nearMines < 6) color = '#F9060A'
    if(nearMines >= 6) color = '#F221A9'
  }

  return (
    <button className={styleField} disabled={opened} onClick={props.onOpen} onDoubleClick={props.onSelect} >
      {
        !mined && opened && nearMines > 0
        ? <span className="label" style={{color: color ? color : '#000'}} >{nearMines}</span> : <span></span>
      }
      {mined && opened ? <Mine /> : false}
      {/* {flagged && !opened ? <Flag /> : false} */}
    </button>
  );
}

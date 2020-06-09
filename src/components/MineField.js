import React from 'react';

import Field from './Fields'

import './style/mineField.css'

export default props => {
  const rows = props.board.map((row, rowIndex) => {
    const columns = row.map((field, fieldIndex) => {
      return <Field { ...field } key={fieldIndex}
        onOpen={() => props.onOpenField(rowIndex, fieldIndex)}
        onSelect={e => props.onSelectField(rowIndex, fieldIndex)}
      />
    })

    return <div style={{ display: 'flex' }} key={rowIndex} >{columns}</div>
  })

  return (
    <div className="container-mine-field" >{rows}</div>
  )
}



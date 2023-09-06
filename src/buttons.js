import React from 'react'

const Buttons = (props) => {
  return (
    <div>
      <button type="button" className={'btn btn-'+props.color} onClick={props.f1} >{props.text}</button>
    </div>
  )
}

export default Buttons;

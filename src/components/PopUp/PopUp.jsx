import React from 'react'

function PopUp(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popupContainer'>
            <button className='btn' onClick={() => props.setTrigger(false)}>X</button>
            { props.children }
        </div>
    </div>
  ) : "";
}
export default PopUp;
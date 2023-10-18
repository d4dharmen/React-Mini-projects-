import React from 'react'

function Button({name, bgColor}) {
  return (
    <div className="main">
        <button className= {`button ${bgColor}`}> {!name ? "click me": name} </button>
    </div>
  )
}

export default Button;
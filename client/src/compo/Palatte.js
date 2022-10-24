import React, { useState } from 'react'
import { send } from "../socketApi";

function Palatte() {
    const [color, setColor] = useState("")
  return (
    <div className='flex flex-1'>
        <input type="color" value={color} onChange={e => setColor(e.target.value)}/>
        <button>click</button>
        <span>{color}</span>
    </div>
  )
}

export default Palatte
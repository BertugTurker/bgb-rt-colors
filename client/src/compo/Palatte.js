import React, { useState } from 'react'
import { send } from "../socketApi";

function Palatte({ activeColor }) {
    const [color, setColor] = useState("#000")
  return (
    <div className='border-2 border-rose-500 gap-2 flex flex-col w-32 p-10 items-center'>
        <span>{color}</span>
        <input className='w-28' type="color" value={activeColor} onChange={e => setColor(e.target.value)}/>
        <button className='border-2 border-rose-500 bg-white' onClick={() => send(color)}>click</button>
        
    </div>
  )
}

export default Palatte
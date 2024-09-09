import React, { useState } from 'react'
import './App.css'

const IncreDecre = () => {
    const[num, setNum] = useState(0)
    const increment = () => {
        setNum(num + 1)
    }
    const decrement = () => {
        if(num === 0) {
            alert('Number cannot be less than 0')
        }
        else{
        setNum(num - 1)
        }
    }
  return (
    <>
    <div className='conatiner'>
        <h1>{num}</h1>
      <div className='btn'></div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
    </>
  )
}

export default IncreDecre

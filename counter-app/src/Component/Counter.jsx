import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0);

    const handelAdd = (val)=>{
        setCount(pre => pre+val)
    }
  return (
    <div>
        <h1>Counter App</h1>
        <h3 data-testid="counter"> Counter --- {count}</h3>
        <button data-testid="add-btn" onClick={()=>{handelAdd(5)}}>Add</button>
        <button data-testid="reduce-btn" onClick={()=>{handelAdd(-5)}}>Reduce</button>
    </div>
  )
}

export default Counter
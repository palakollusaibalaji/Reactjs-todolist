import React, { useState } from "react";


const FinalReducer = () => {
  
const [count,setcount] = useState(0)

const increament = () => {
 setcount(count + 1);
}

const decreament = () => {
  setcount(count-1);
}

  return (
    <>
    <h1>Hello</h1>
    <button onClick={() => {increament()}}>+</button>
    <p>{count}</p>
    <button onClick={() => {decreament()}}>-</button>
    </>
  )
 }

 export default FinalReducer;




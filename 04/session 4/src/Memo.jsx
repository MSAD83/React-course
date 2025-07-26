import React, { useState } from 'react'

export default function Memo() {
  const [counter1, setCounter1]=useState(0)
  const [counter2, setCounter2]=useState(0)



  return (
    <div>
      <button onClick={()=> setCounter1(c => c + 1)}>Change counter1</button>
      <button onClick={()=> setCounter2(c => c + 1)}>Change counter2</button>
      <div>Counter: {counter1}</div>
      <div>Counter: {counter2}</div>
      <MyComponent counter={counter1}/>
      <MyMemoComponent counter={counter2}/>


    </div>
  )
}
function MyComponent({counter}){
  return (<div>MyComponent {counter}</div>
  )
}
function MyMemoComponent({counter}){
  return(
    <div>MyMemoComponent {counter}</div>
  )
}
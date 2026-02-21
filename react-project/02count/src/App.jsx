import {useState} from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState()
  // let counter = 6

  let addValue = () => {
    console.log('clicked',counter)
    if(counter <= 19){
    setCounter(counter + 1)
  }
  }

  let removeValue = () => {
    if (counter > 0){
    setCounter(counter - 1)
  }}

  return (
    <>
      <h1>this is counter project</h1>
    <h2>Count value: {counter}</h2>
    <button 
    onClick={addValue}
    >Add value</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value</button>
    </>
  )
}

export default App

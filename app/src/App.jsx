import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  useEffect(() => {
    fetch("http://localhost:5000/test-route")
    .then((response => response.json()))
    .then(data => {
      console.log(data.message)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])
  

  return (
    <div className='test-container'>
      <h1> Hello! </h1>
    </div>
  )
}

export default App

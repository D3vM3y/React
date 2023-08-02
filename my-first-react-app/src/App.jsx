import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let newString = prompt("Hello there, please type in your username");

function DisplayString(string) {
  return string;
}

function App() {

  let string = DisplayString(newString);

  return (
    <>
      <h1>{string}</h1>
      <p>Let's get some React App up and running!</p>
      <button>Click me</button>
    </>
  )
}

export default App

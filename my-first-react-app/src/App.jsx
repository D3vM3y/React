import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AskForUserInput() {
  // let userInput = "something new";
  let userInput = prompt("What's on your mind?");

  let heading = document.getElementById("heading");
  console.log(heading);
  heading.innerText = userInput;


}

function App() {
  let input = "hello there";

  return (
    <>
      <h1 id="heading">Hello World</h1>
      <p>Let's get some React App up and running!</p>
      <button onClick={AskForUserInput}>click me</button>
    </>
  )
}

export default App

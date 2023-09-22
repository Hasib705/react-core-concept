import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Team from './team'
import Users from './users'
import Friends from './Friends'

function App() {
  function handleClick(num){
    alert(num);
  }
  const actors = ['sharkuk', 'salman', 'sahed', "dulkar salman", 'mahes babu', 'Riyaz'];

  return (
    <>
    <h1>React core concept</h1>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
  {/* <button onClick={handleClick}>Click Here</button> */}
  <button onClick={()=>handleClick(3)}>Click Here</button>
      <h1>Hi, I am learning React</h1>
      
      {
        actors.map(actor => <Actor name= {actor}></Actor>)
      }
      {/* <Actor name={"sharuk Khan"}></Actor> */}

      {/* <Todo task="Learn web development" isDone='true'></Todo>
      <Todo task="Learn guiter" isDone='true'></Todo>
      <Todo task="Create a Youtube Channel" isDoen='false'></Todo> */}
      {/* <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Student2></Student2> */}
    </>
  )
}

function Person() {
  const website = "programing hero";
  const person = { name: 'Hasibul Hasan', age: 27, course: "web development" }
  return <h3>I am {person.name} age {person.age} learning {person.course} from {website}.</h3>
}


function Student() {

  const style = {
    border: "2px solid green",
    margin: '55px',
    padding: "34px",
    borderRadius: '6px'
  }
  return (
    <div style={style}>
      <h4>Hi</h4>
      <p>My name is Hasib.</p>
    </div>
  )
}


function Student2() {

  return (
    <div className='student'>
      <h4>Hi</h4>
      <p>My name is Hasibul Hasan.</p>
    </div>
  )
}

export default App

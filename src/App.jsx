import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Celebrity from './Celebrity'

function App() {
  const [count, setCount] = useState(0)
  const singers = ['Justin Beaber', 'Selena Gomez', 'Taylor Swift', 'Pitbul', 'Ariana Grande']
  const celebrity = [
    {id: 1, name : 'sakib', age: 32},
    {id: 2, name : 'Salamn', age: 34},
    {id: 3, name : 'Reaz', age: 38},
    {id: 4, name : 'Shuvo', age: 30},
    {id: 5, name : 'Tahsan', age: 35}
  ]
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {
        celebrity.map(celeb => (
          <Celebrity name={celeb}></Celebrity>
        ))
      }

      {/* <Actor name={"Jannatul Ohi"}></Actor> */}
      {
        singers.map(singer => (
        <Actor name={singer}></Actor>)
      )}
        {/* <Todo 
          task="learn HTML"
          isDone={true}>
        </Todo>
        <Todo 
          task="learn CSS" 
          isDone={true}>
        </Todo>
        <Todo 
          task="learn CSS Framework 'Tailwind'" 
          isDone={false}>
        </Todo>
        <Todo 
          task="learn JavaScript"
          isDone={true}> 
        </Todo>
        <Todo 
          task="learn JavaScript Framework 'React'"
          isDone={false}> 
        </Todo> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

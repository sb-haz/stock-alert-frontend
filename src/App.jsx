import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './index.css';  // Tailwind and global styles
// import './app.css';    // Custom styles
import './styles.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-4xl font-bold">Hello, Tassilwind CSS!</h1>
        <button className="bg-green-500 hover:bg-green-600 p-2 rounded">Clisscsk Me</button>
      </div>



      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
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
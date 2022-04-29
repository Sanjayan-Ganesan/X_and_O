import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TicTacToe from './Tic_Tac_Toee/TicTacToe'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <TicTacToe/>
    </div>
  )
}

export default App

import { useState } from "react"

const TURNS = {
  x: "x",
  o: "o",
}

// 1. const board = Array(9).fill(null)

const Square= ({ children, updateBoard, index}) => {
  return(
  <div className="square">
    {children}
  </div>
  )
}

function App() {
  //2.
  // const board = Array(9).fill(null)
  //3.
  // const [board, setBoard] = useState(Array(9).fill(null))
  // console.log(board)
  //:) podriamos hacerlo manual para verl en screen:
  const [board, setBoard] = useState(["x", "x", "x", "0", "0", "0", "x", "0", "x"])
  return (
  <main className="board">
    <h1>Triqui</h1> 
    <section className="game">
      {
        board.map((_, index) => {
          return (
           <Square
            key={index}
            index={index}
           >
            {/* :) */}
            {board[index]}
            {/* {index} */}
           </Square>
          )
        })
      }
    </section>
  </main>
  )
}

export default App

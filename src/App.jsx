import { useState } from "react"

const TURNS = {
  x: "x",
  o: "o",
}

// 1. const board = Array(9).fill(null)

const Square= ({ children, isSelected,updateBoard, index}) => {
  const className =`square ${isSelected ? "is-selected" :""}`
  const handleClick = () => {
    updateBoard()
  }

  return(
  <div onClick={handleClick} className={className}>
    {children}
  </div>
  )
}

function App() {
  //2.
  // const board = Array(9).fill(null)
  //3.
  const [board, setBoard] = useState(Array(9).fill(null))
  // console.log(board)
  //:) podriamos hacerlo manual para verl en screen:
  // const [board, setBoard] = useState(["x", "x", "x", "0", "0", "0", "x", "0", "x"])

  const [turn, setTurn] = useState(TURNS.x)

  const updateBoard = () => {}

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
            updateBoard={updateBoard}
           >
            {/* :) */}
            {board[index]}
            {/* {index} */}
           </Square>
          )
        })
      }
    </section>
    <section className="turn">
      <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
      <Square  isSelected={turn === TURNS.o}>{TURNS.o}</Square>
    </section>
  </main>
  )
}

export default App

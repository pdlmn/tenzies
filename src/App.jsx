import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import uniqid from 'uniqid'
import Die from './components/Die'

const App = () => {
  const [dice, setDice] = useState([])
  const [win, setWin] = useState(false)

  const generateNumber = () => {
    return Math.ceil(Math.random() * 6)
  }

  const createNewDice = () => {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: generateNumber(),
        isHeld: false,
        id: uniqid()
      })
    }
    return newDice
  }

  const rollDice = () => {
    setDice(prevDice => prevDice.map((dice) =>
      (dice.isHeld)
      ? dice
      : { ...dice, value: generateNumber() }
    ))
  }

  const holdDie = (id) => {
    setDice(prevDice => prevDice.map((dice) => 
      (dice.id === id)
        ? { ...dice, isHeld: !dice.isHeld }
        : dice
    ))
  }

  const resetGame = () => {
    setDice(createNewDice())
    setWin(false)
  }

  const checkForWin = () => {
    const isWon = dice.every((die) => die.isHeld && die.value === dice[0].value)
    if (isWon) setWin(true)
  }

  ;(function initDice() {
    dice.length < 1 && setDice(createNewDice())
  })()

  const diceElements = dice.map(
    (die) => (
      <Die 
        value={die.value}
        isHeld={die.isHeld}
        key={die.id}
        handleClick={() => holdDie(die.id)}
      />
    ))

  useEffect(checkForWin, [dice])

  return (
    <div className="container">
      {win && <Confetti numberOfPieces={600} recycle={false}/>}
      <header className="explanation">
        <h1>Welcome to Tenzies!</h1>
        <p>Click on a die to hold its value. You win when all values you hold are the same.</p>
      </header>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="btn" onClick={win ? resetGame : rollDice}>
        {win ? "New game" : "Roll dice"}
      </button>
    </div>
  );
}

export default App;

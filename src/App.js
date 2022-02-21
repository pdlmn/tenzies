import { useState } from 'react'
import uniqid from 'uniqid'
import Die from './components/Die'

const App = () => {
  const [dice, setDice] = useState([])

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
    setDice(createNewDice())
  }

  ;(function initDice() {
    dice.length < 1 && setDice(createNewDice())
  })()

  const diceElements = dice.map(
    (die) => <Die value={die.value} isHeld={die.isHeld} key={die.id} />
  )

  return (
    <div className="container">
      <div className="die-container">
        {diceElements}
      </div>
      <button className="btn" onClick={rollDice}>Roll dice</button>
    </div>
  );
}

export default App;

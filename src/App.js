import Die from './components/Die'

const App = () => {
  const createNewDice = () => {
    const dice = []
    for (let i = 0; i < 10; i++) {
      dice.push(<Die value={1} />)
    }
    return dice
  }

  return (
    <div className="container">
      {createNewDice()}
    </div>
  );
}

export default App;

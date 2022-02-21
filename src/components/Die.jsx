const Die = ({ value, isHeld, handleClick }) => {
  const heldDiceStyle = {
    background: isHeld ? "rgb(70, 220, 90)" : "white"
  }
  
  return (
    <div 
      style={heldDiceStyle} 
      onClick={handleClick}
      className="die"
    >
      {value}
    </div>
  )
}

export default Die

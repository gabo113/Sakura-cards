import React from 'react'

const Shotme = () => {
    const threeCards = cards.filter((card, index) => index < 3)

  return (
    <div>
        <button onClick={()=>{Shotme()}}>Shot me</button>
    </div>
  )
}

export default Shotme
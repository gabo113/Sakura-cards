import React, {useEffect, useState} from 'react'
import { allCards } from '../functions/functions'

const CardsIndex = () => {
  const [cards, setCards] = useState(null)
  
  useEffect(() => {
    allCards(setCards)
  },[])  

  const shuffle = () => {
    const shakingCards = cards.sort(() => Math.random() - 0.5)   

    console.log(shakingCards);   
  }

  const shotme = () => {
    const threeCards = cards.filter((card, index) => index < 3)
    console.log (threeCards)
  }  

  return (
    <div>
      {cards != null ? (
        cards.map(Cards => (
          <div key={Cards.id}>            
            <img src={Cards.cardsReverse.sakuraReverse} className='rounded float-start' height={100} width={75} alt="" />           
          </div>
        ))
      ) : ('no hay cartas')} 
      <div className='buttons'> 
      <button onClick={() => {shuffle() }}>Shuffle</button>      
      <button onClick={()=>{shotme()}}>Shot me</button>
      </div>
    </div>

  )
}

export default CardsIndex
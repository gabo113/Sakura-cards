import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { oneCard } from '../functions/functions'

const Cards = () => {
  const [card, setCard] = useState([])
  const params = useParams()

  useEffect(()=> {
    oneCard(params.id, setCard)
  },[])

  return (
    <div>
      <h2>{card.spanishName}</h2>
      <img src={card.sakuraCard} alt="" />
      {/* <p>{card.meaning}</p> */}
    </div>
  )
}

export default Cards
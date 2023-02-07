import axios from "axios";

const allCards = async (state) => {
    const addCards = await axios.get('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    state(addCards.data)
}



export { 
    allCards
}
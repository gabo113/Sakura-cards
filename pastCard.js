const aplicacion = document.querySelector('.container')

const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')
// console.info(id)
const url = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/"
// console.info(`${url}/${id}`)

fetch(`${url}/${id}`)
.then(response => response.json())
.then(data => {
    const spanishName = document.createElement('p')
    const meaning = document.createElement('p')
    
    spanishName.innerHTML = data.spanishName   
    meaning.innerHTML = data.meaning

    const sakuraCard = new Image();
    sakuraCard.src = data.sakuraCard;

    aplicacion.appendChild(spanishName)
    aplicacion.appendChild(meaning)
    aplicacion.appendChild(sakuraCard)
})
.catch(err => console.info(err))
const aplicacion = document.querySelector('.container')

const url = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/"

fetch(url)
.then(response => response.json())
.then(data => {
    data.forEach(cart => {
        
        // const cardsReverse = document.createElement('img')
        const cardsReverse = new Image();
        cardsReverse.src = cart.cardsReverse.sakuraReverse
        cardsReverse.setAttribute('id', cart.id)
        // p.innerHTML = cart.cardsReverse.sakuraReverse
        cardsReverse.addEventListener('click', function() {
            window.location.href = `./pastCard.html?id=${cart.id}`
        })        
        aplicacion.appendChild(cardsReverse)
    });
    console.info(data)
})
.catch(err => console.info(err))
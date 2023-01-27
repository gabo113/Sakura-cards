const aplicacion = document.querySelector('.container')

const url = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/"

fetch(url)
.then(response => response.json())
.then(data => {
    data.sort(function() {
        return Math.random() - 0.5});
    
    data.forEach(cart => {        
        const cardsReverse = new Image(75, 100);
        cardsReverse.src = cart.cardsReverse.sakuraReverse
        cardsReverse.setAttribute('id', cart.id)
        
        cardsReverse.addEventListener('click', function() {
            window.location.href = `./pastCard.html?id=${cart.id}`
        })        
        aplicacion.appendChild(cardsReverse)
    });
    console.info(data)
})
.catch(err => console.info(err))
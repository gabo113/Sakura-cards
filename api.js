const aplicacion = document.querySelector('.container')

const url = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/"

fetch(url)
.then(response => response.json())
.then(data => {
    data.forEach(cart => {
        console.info(cart.spanishName)
        const p = document.createElement('p')
        p.setAttribute('id', cart.id)
        p.innerHTML = cart.spanishName
        p.addEventListener('click', function() {
            window.location.href = `./pastCard.html?id=${cart.id}`
        })        
        aplicacion.appendChild(p)
    });
    console.info(data)
})
.catch(err => console.info(err))
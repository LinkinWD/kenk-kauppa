const kengät = document.querySelectorAll('.kengät')
const kuva = document.querySelector('#kuva')


kengät.forEach((kenkä) => {
    kenkä.addEventListener('click', ()=> {
        const osoite = kenkä.firstChild.src;
        kuva.src = osoite

    })
})
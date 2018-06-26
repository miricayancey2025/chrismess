const form = document.querySelector('form')
let i = 1
const revealFavorite = function(ev){
    ev.preventDefault()
    const fav_input = document.querySelector('input').value
    const header = document.querySelector('.small')
    const list = document.querySelector('#flicks')
    header.textContent = 'Favorite Chris is ' + fav_input
    list.innerHTML += `<p>${i}  ${fav_input}</p>`
    i++
    form.reset()
}

form.addEventListener('submit',revealFavorite)

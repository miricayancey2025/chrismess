const form = document.querySelector('form')
const revealFavorite = function(ev){
      ev.preventDefault()
    const fav_input = document.querySelector('input').value
    const header = document.querySelector('.small')
    header.textContent = 'Favorite Chris is ' + fav_input
}

form.addEventListener('submit',revealFavorite)

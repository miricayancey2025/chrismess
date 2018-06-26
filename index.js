const form = document.querySelector('form')
const movieForm = function(ev){
    ev.preventDefault()
    const fav_input = document.querySelector('input').value
    const header = document.querySelector('.small')
    const list = document.querySelector('#flicks')
    header.textContent = 'Favorite Chris is ' + fav_input
    let item = document.createElement('li')
    item.textContent = fav_input
    list.appendChild(item)
    form.reset()
}

form.addEventListener('submit',moveiForm)

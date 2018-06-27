const form = document.querySelector('form')
const movieForm = function(ev){
    ev.preventDefault()
    const movie = document.querySelector('#movie_name').value // takes value of movie name
    const chris = document.querySelector('#chris_name').value // takes value of chris name
    const movie_list = document.querySelector('#flicks') //finds div
    let item = document.createElement('li') //creates element
    item.textContent = movie + " starring " + chris // updates text to be added to element
    movie_list.appendChild(item) //adds updated element to div
    form.reset()
}

form.addEventListener('submit',movieForm)

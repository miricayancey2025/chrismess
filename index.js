const button = document.querySelector('Button')
const button2 = document.querySelector('.button')
const button3 = document.querySelector('.button2')
const updateText = function () { 
const heading = document.querySelector('h1')
heading.textContent = 'IT\'s\ bout to be a party!!'
}


const updateHeading2 = function(){
    const head = document.querySelector('.heading')
    head.textContent = 'Ps. The lesser Chis is Chris Pine'
}

const revealFavorite = function(){

    const fav = document.querySelector('input').value
    const header = document.querySelector('.small')
    header.textContent = 'Favorite Chris is ' + fav
        event.preventDefault()
}

button2.addEventListener('click',updateHeading2)
button.addEventListener('click', updateText)
button3.addEventListener('click',revealFavorite)

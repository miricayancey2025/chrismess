const button = document.querySelector('Button')
const button2 = document.querySelector('.button')
const updateText = function () { 
const heading = document.querySelector('h1')
heading.textContent = 'IT\'s\ bout to be a party!!'
}


const updateHeading2 = function(){
    const head = document.querySelector('.heading')
    head.textContent = 'Ps. The lesser Chis is Chris Pine'
}
button2.addEventListener('click',updateHeading2)
button.addEventListener('click', updateText)
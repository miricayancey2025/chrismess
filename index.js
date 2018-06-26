const button = document.querySelector("Button")
const updateText = function () { 
const heading = document.querySelector("h1")
heading.textContent = 'New Heading!!'
}
button.addEventListener('click', updateText)
const form = document.querySelector('#movieForm')
const button = document.querySelector('Button')
const button2 = document.querySelector('.button')
const button3 = document.querySelector('.button2')

const updateText = function () { 
const heading = document.querySelector('h1')
heading.textContent = 'What a MESS... A CHRIS mess!'
}
const updateHeading2 = function(){
    const head = document.querySelector('.heading')
    head.textContent = 'Ps. The lesser Chis is Chris Pine'
}
const revealFavorite = function(){

    const fav = document.querySelector('input').value
    const header = document.querySelector('.small')
    if(fav === 'Pine'){
        header.textContent = 'Favorite Chris is ' + fav + '. How Dare you!! I have never been more disappointed in someone in my LIFE. Pack your bags. Turn in your ring. Put your head down. BOI. Shame.'
        event.preventDefault()    
    }
    else if(fav === 'Hemsworth'){
        header.textContent = 'Favorite Chris is ' + fav + '. Respect. Understandable. Boy has mad muscles and is The God of Thunder so what can you do? Approved'
        event.preventDefault()    
    }
    else if(fav === 'Pratt'){
        header.textContent = 'Favorite Chris is ' + fav + '. AS IT SHOULD BE. You will never find a funnier or more wholesome Chris. (We do not include Chris Evans).'
        event.preventDefault()    
    }
    else if(fav === 'Evans'){
        header.textContent = 'Favorite Chris is ' + fav + '. Boy is a real life cinnamon roll as a person. Making Mr.Rogers look like a gosh darn chump. Plus he IS Captain America, which doesn\'t\ compare to Thor but it\'s\ something. Would carry an old lady down the street.'
        event.preventDefault()    
    }
    else{
    header.textContent = 'Favorite Chris is ' + fav
        event.preventDefault()
}
}

const spanProperty = function(name, value){
    const movie_span = document.createElement('span') //creates span form movie title
    movie_span.setAttribute('class', name) //sets attribute for movie title
    movie_span.textContent = value;
    return movie_span
}

const movieForm = function(ev){
    ev.preventDefault()
    const movie = document.querySelector('#movie_name').value + " starring " // takes value of movie name
    const chris = document.querySelector('#chris_name').value // takes value of chris name
    const movie_div = document.querySelector('#flicks') //finds div
    const movie_list = document.createElement('ul') //creates list element
   
    const movie_span = spanProperty('movie_element', movie)
    const name_span = spanProperty('name_element', chris)


    movie_list.appendChild(movie_span) //appends that to a movie list
    movie_list.appendChild(name_span)//appends that to a movie list
    movie_div.appendChild(movie_list) //appends that list item into the div
    form.reset()
}


button2.addEventListener('click',updateHeading2)
button.addEventListener('click', updateText)
button3.addEventListener('click',revealFavorite)
form.addEventListener('submit',movieForm)
//one li of two spans of different class names
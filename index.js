const form = document.querySelector('#movieForm')
const button = document.querySelector('Button')
const button2 = document.querySelector('.button')
const button3 = document.querySelector('.button2')
//names are confusing because I'm lazy but
//update text updates the first h1 element it finds
//so it updates chris mess by queryselecting any h1 and getting the first one
//and changing the heading content to a new messagge
const updateText = function () { 
const heading = document.querySelector('h1')
heading.textContent = 'IT\'s\ bout to be a party!!'
}

//udate heading 2 skips the heading in between after chrissmess because that's an h2 (because I can)
//and instead gets only the second heading which I've geniously called heading
//query selector change text content
const updateHeading2 = function(){
    const head = document.querySelector('.heading')
    head.textContent = 'Ps. The lesser Chis is Chris Pine'
}
//reveal favorite interacts with the h2 element which, for fun, is picked up using a class name instead of
//finding the first h2 element
//it query selects the VALUE from the input area
//it also query selecs the h2 header class name small
//then there are some fun if statements thrown in for the hell of it to add in my opinion to life
//of course there's a default statement that isn't my opinion in case you enter anything but the three marvel chrisses and the lesser chris
//there is also an event suppressor in order to stop it from automatically refreshing
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

const movieForm = function(ev){
    ev.preventDefault()
    debugger
    const movie = document.querySelector('#movie_name').value // takes value of movie name
    const chris = document.querySelector('#chris_name').value // takes value of chris name
    const movie_div = document.querySelector('#flicks') //finds div
    const movie_list = document.createElement('li') //creates list element
    const span = document.createElement('span') //creates span form movie title
    const span2 = document.createElement('span')//creates span for chris name

    span.setAttribute('class', 'movie_element') //sets attribute for movie title
    span2.setAttribute('class', 'name_element')//sets attributes for chris name
    span.textContent = movie //sets innerhtml of first span to movie
    span2.textContent = " starring " + chris //sets innerhtml of second span to chris


    movie_list.appendChild(span) //appends that to a movie list
    movie_list.appendChild(span2)//appends that to a movie list
    movie_div.appendChild(movie_list) //appends that list item into the div
    form.reset()
}
button2.addEventListener('click',updateHeading2)
button.addEventListener('click', updateText)
button3.addEventListener('click',revealFavorite)
form.addEventListener('submit',movieForm)
//one li of two spans of different class names
const form = document.querySelector('form')
const movieForm = function(ev){
    ev.preventDefault()
    debugger
    const movie = document.querySelector('#movie_name').value // takes value of movie name
    const chris = document.querySelector('#chris_name').value // takes value of chris name
    const movie_div = document.querySelector('#flicks') //finds div
    const movie_list = document.createElement('li') //creates list element
    const span = document.createElement('span') //creates span form movie title
    const span2 = document.createElement('span')//creates span for chris name
<<<<<<< HEAD

    span.setAttribute('class', 'movie_element') //sets attribute for movie title
    span2.setAttribute('class', 'name_element')//sets attributes for chris name
    span.textContent = movie //sets innerhtml of first span to movie
    span2.textContent = " starring " + chris //sets innerhtml of second span to chris


    movie_list.appendChild(span) //appends that to a movie list
    movie_list.appendChild(span2)//appends that to a movie list
=======
    span.setAttribute('class', 'movie_element') //sets attribute for movie title
    span2.setAttribute('class', 'name_element')//sets attributes for chris name
    span.innerHTML = movie //sets innerhtml of first span to movie
    span2.innerHTML = " starring " + chris //sets innerhtml of second span to chris
    movie_list.appendChild(span) //appends that to a movie list
    movie_list.appendChild(span2)//appends that to a movie list
    //by using the appends with the innerHTML should not be able to hack
>>>>>>> c5c3882927ec77b57a7a013499a81e63e7ab8825
    movie_div.appendChild(movie_list) //appends that list item into the div
    form.reset()
}

form.addEventListener('submit',movieForm)
//one li of two spans of different class names

///unaffected extra mess
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
button2.addEventListener('click',updateHeading2)
button.addEventListener('click', updateText)
button3.addEventListener('click',revealFavorite)
//END of unaffected extra mess
const movie_list = []
class App{
    constructor(){
        const form = document.querySelector('form#movieForm')
        
        form.addEventListener('submit',(ev) =>{//arrows are functions now
            ev.preventDefault()
            this.submitForm(ev)
    })

}

///////////////////////////////////////////
renderProperty(name, value){
    const movie_span = document.createElement('span') //creates span form movie title
    movie_span.classList.add(name) //sets attribute for movie title
    movie_span.textContent = value + ' ';
    return movie_span
}
/////////////////////////////////////////
renderItem(movie){
    const item = document.createElement('ul')
    const check = document.createElement('button')
    check.classList.add('favorite')
    check.textContent = "Fav"
    check.addEventListener('click', function(){check.textContent = 'Favorted!'})

    item.classList.add('movie')
    const props = Object.keys(movie)
    props.forEach((propertyName)=>{
        const span = this.renderProperty(propertyName, movie[propertyName])
        item.appendChild(span)
        item.appendChild(check)    
    })
    return item;
}

/////////////////////////////////////////
submitForm(ev){
    const f = ev.target

    const movie = {
        movie_name:  f.title.value + ' starring ',
        chris_name: f.cast.value,
    }
    const item = this.renderItem(movie)
    const delete_btm = document.createElement('button')
    delete_btm.classList.add('delete')
    delete_btm.textContent = 'x'
    item.appendChild(delete_btm)
    const deleteIt = function(){
        this.parentNode.remove()
        }
    delete_btm.addEventListener('click', deleteIt)
    movie_list.push(item)
    const list = document.querySelector('#movie_ul')
    list.appendChild(item) //appends that list item into the div
    f.reset()
    f.title.focus()
}
}// end of clas encapsulation
const app = new App()


         ///content editable
        //local storage
       //favorite
      //add event handler for the gen button
     //graded tomorrow
class App{
    constructor(){
        
        const own_form = document.querySelector('form#create_own')
        const gen_btn = document.querySelector('#rando')
        this.plotArray = []
        this.favArray = []
        this.plots = [
            "I don't know how I am going to get home. Worse yet, I am alone and have to...",
            "Finding yourself between two men who are at odds with one another is a bit complicated but when one is thirty-two and the other is eight years old it, can be downright... ",
            "45 minutes ago my cover was blown. I'd been under for... ",
            "I always thought that if you forgot all the bad things that happened to you that it was inevitable that you would forget all the good things, too. I never thought that focusing so much on the bad things would attract them. ",
            "The harder she scratched away at her forearm, the quicker the flesh fell away. From outside the containment unit, Dr. Elana Miles and Dr. Mark Rustenburg watched on in dismay as the infection spread... ",
            "It's hard to describe the sound of ripping flesh... ",
            'She could hear the shower water running when she came in the front door. “That’s strange,” she said. ',
            "My name is Rowan Cohen and for four hours a day, I work as an online computer tech helping inexperienced users navigate their systems. I get paid well enough to cover the basics, which is all anybody ever really needs. My real job comes when the sun goes down. Unfortunately, vampire hunting doesn’t pay well. At least not until now... ", 
            "No one appreciates fairy godmothers. I give, give, give and do I even get a thank you in return? That’s right, no. Well, now it’s my turn... ",
            "Thunderstorms really wig me out. Not heebie-jeebies like, I’m talking about the shakes and hyperventilating and everything in between. ",
            "Have you ever seen a floor covered in blood? At first glance, there is a simple beauty to it and how the red contrasts with the white linoleum. It doesn't immediately register that what you're looking at is actually blood. Slowly... ",
            "He could feel its prickly tendrils poking through the thin cotton of his denim pockets. He wanted to remove it but was afraid...",
            "Today I got the phone call.  ","We’d never make it before dawn. ","One of these days, I’m going to say no.",
            "I thought space was supposed to be silent. So, what the hell was that roar?",
            "She died two years ago, but I saw her for the first time today.",' “When was the last time you saw him?” "The last time I saw him."',"The smell of smoke lingered long after the blaze had died. ", 
            "Yellow leaves crackled underfoot. I held still. Those were not my footsteps. ",
            "Flight was second nature to him.",'"Is that a threat, Sugar?" she smirked.','Pick up the sword.',
            'Remind me again why I wanted to be a June bride.',
            'Excited. "Listen to the rain pounding on the roof!" Grim."Thats not rain" ',
            'Ryder sat in front of her computer, staring at a screen full of photos. “Delete,” she whispered and the screen went blank.',
            'I refused to let them see me cry.',
            'The sign says, “No Trespassing.” Jacob says, with a careless grin, "Fuck that"',
            'Heartbeats shouldn’t be this loud.','Only animals’ eyes are supposed to glow at night.','I didn’t expect to be happy he was dead.',
            'This was absolutely the wrong time for the fuse to blow.',
            '“I’d wish you a Happy New Year, but I have a feeling it would be a little inappropriate at a murder scene.”',
            'Eyes that green were definitely dangerous.','"Where did you come from?”','It was too damn quiet.',
            'It didn’t take long to realize that, once they found the body, I was going to be suspect number one.',
            'Chris woke to the sound of crying. It was 3 o’clock in the morning and he’d been alone when he went to bed.',
            'The first thing that went through my head was “she’s a witch!” from that Monty Python movie.',
            'Manipulating people is so easy I almost stopped doing it. Almost.',
            "They thought it would kill you. I knew it wouldn't.",'Wyn swindled the Magnificent Seven','The day the virus struck..',
            'Look, you didn’t hear this story from me, alright? I never opened my trap and breathed a word toyou, understand? Now that that’s clear, listen, it wasn’t an accident. You hear me? It wasn’t an accident.',
            '“It was a freezing night in Hell when I met your mother."',
            'It was a foggy morning in Cleveland when Dad got arrested. Mom wasted no time packing us up and shipping us to the middle of nowhere, United States, tersely saying that Dad had finally done it. He’d picked the last nerve the police had for him clean.',
            'Devoss calmly brushed a hand down his blood-speckled shirt',
            'The last time Embry went outside was two months and three days ago.',
            'Blood doesnt taste good.','Once Upon A Time there was a girl made of stars.','Sometimes it takes a Villain to make a Hero.',"She wished to be mighty. He couldn't deny her of anything.",
        ]
        this.list = document.querySelector('#for_save')
        gen_btn.addEventListener('click', (ev) =>{
            ev.preventDefault()
            this.queryBase(ev)
        })
        own_form.addEventListener('submit', (ev) =>{
            ev.preventDefault()
            this.genOwn(ev)
        })
    }


      queryBase(ev){
        const plot_header = document.querySelector('#for_auto')
     const index = Math.floor(Math.random() * this.plots.length );  
        plot_header.textContent = this.plots[index];
    }

    
        spanProperty(genre, value){
        const span = document.createElement('span')
        span.classList.add(genre)
        span.textContent = value + ' '
        return span
    }


    makeItem(plot_item){//adds in the attributes needed to create a full item
        const item = document.createElement('ul')
        item.classList.add('plot_item')
        const add_btn = document.createElement('button')
        add_btn.classList.add('fav')
        add_btn.textContent = '+'
        add_btn.addEventListener('click',function(){
            if(add_btn.textContent === '+'){
            add_btn.textContent = '-'
            }
        else{
            add_btn.textContent = '+'
        }
        })
        const props = Object.keys(plot_item)
        
        props.forEach((propertyName) =>{
            const span = this.spanProperty(propertyName, plot_item[propertyName])
            item.appendChild(span)
            item.appendChild(add_btn)
        })
        const delete_btn = document.createElement('button')
        delete_btn.classList.add('delete')
        delete_btn.innerHTML = '<i class="far fa-trash-alt" title="deleter"></i>'
        delete_btn.addEventListener('click', (ev) => this.deleteSave(plot_item, item))
        item.appendChild(delete_btn)

        
        return item;
    }
         //   this.favArray.splice(this.favArray.indexOf(plot_item),1)
     ///    this.favArray.push(plot_item)

    deleteSave(plot_item, item){//delete save is done and great
        this.list.removeChild(item)
        this.plotArray.splice(this.plotArray.indexOf(plot_item),1)
    }
    genOwn(ev){ //generates your own plot
        const f = ev.target
        const plot_item = {
            genre : f.genre.value + ' : ',
            plot : f.plot.value,
        }
        this.plotArray.push(plot_item)
        const item = this.makeItem(plot_item)
        this.list.appendChild(item)
        f.reset()
        f.genre.focus()
    }}///end of clas encapsulation
const app = new App()
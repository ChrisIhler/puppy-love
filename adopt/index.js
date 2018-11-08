const dogs = require('./dogs')
function cardGen(dogs){
    document.querySelector('.container .row').innerHTML = ''
    let dogCardHTML = []
    for(let dog of dogs){
        let starVal = []
        for(let i = 0; i < dog.rating; i++){
            starVal.push('<i class="fas fa-star"></i>')
        }
        while(starVal.length < 5){
            starVal.push('<i class="far fa-star"></i>')
        }
        let dogCard = 
            `<div class="card">
                <img class="card-img-top" src="${dog.img}" alt="Image of ${dog.name}">
                <div class="card-body">
                    <h5 class="card-title">${dog.name}</h5>
                    <h6><span class="starVal">${starVal.join('')}</span></h6>
                    <h6>Adoption fee: <span class="adoptionFee">$${dog.adoptionFee}</span>.<sup>00</sup></h6>

                    <p class="card-text">${dog.desc}</p>
                    <button class="btn btn-primary">Add to your family <span class="idx hidden">${dog.id}</span></button>
                    <button class="remove btn btn-secondary hidden">Remove Me :( <span class="idx hidden">${dog.id}</span></button> 
                    <i class="fas fa-check-circle hidden"></i>
                    
                </div>
            </div>`#

        dogCardHTML.push(dogCard)
    }

    document.querySelector('.container .row').innerHTML += dogCardHTML.join('')
    let cards = document.querySelectorAll('.card')
    for (let card of cards) {
        card.style.animation = 'grow .2s linear'
    }
    
    //add select function for unselected cards
    let primaryCardButtons = document.querySelectorAll('.card .btn-primary')
    for (let button of primaryCardButtons) {
        button.addEventListener('click', function (e) { select(e) })
    }
   
    //make dogs selected if in local storage
    let selectedDogsString = localStorage.getItem('adoptionCart')
    if(selectedDogsString === null){ selectedDogsString = '[]'}
    let selectedDogsArray = JSON.parse(selectedDogsString)
    let secondaryCardButtons = document.querySelectorAll('.card .btn-secondary')
    
    for (let dogs of selectedDogsArray) {
        for(let button of secondaryCardButtons){
            let index = Number(button.children[0].textContent)
            if (dogs.id === index) {
                button.classList.remove('hidden')
                button.nextElementSibling.classList.remove('hidden')
                button.previousElementSibling.classList.add('hidden')
                
                button.addEventListener('click', function (e) {
                    let index = Number(e.target.children[0].textContent)
                    removeFromLocal(index)
                    e.target.classList.add('hidden')
                    e.target.previousElementSibling.classList.remove('hidden')
                    e.target.nextElementSibling.classList.add('hidden')
                })
            }
        }
    }

  
        
}


cardGen(dogs)

document.querySelector('#filterSort').addEventListener('change', function(e){filterCards(e)})

function filterCards(e){
    let cards = document.querySelectorAll('.card')
    for(let card of cards){
        card.style.animation = 'shrink .2s linear'
    }


    const inputs = document.querySelectorAll('#filterSort input')
    let results = [...dogs]
    for(let input of inputs){
        
        if (input.checked === true){
            switch(input.name){
                case 'rating':
                    if (input.id === 'oneUp') {
                        results = results.filter(dog => dog.rating >= 1)
                    }
                    else if (input.id === 'twoUp') {
                        results = results.filter(dog => dog.rating >= 2)
                    }
                    else if (input.id === 'threeUp') {
                        results = results.filter(dog => dog.rating >= 3)
                    }
                    else {
                        results = results.filter(dog => dog.rating >= 4)
                    }
                    break

                case 'fee':
                    if(input.id === 'free'){
                        results = results.filter(dog => dog.adoptionFee === 0)
                    }
                    else if (input.id === 'ltOneHundred') {
                        results = results.filter(dog => dog.adoptionFee < 100)
                    }
                    else if (input.id === 'ltTwoHundred') {
                        results = results.filter(dog => dog.adoptionFee < 200)
                    }
                    else {
                        results = results.filter(dog => dog.adoptionFee < 500)
                    }
                    break
                
                case 'kidFriendly':
                    results = results.filter( dog => dog.tags.includes('kf'))
                    break

                case 'houseTrained':
                    results = results.filter(dog => dog.tags.includes('ht'))
                    break
                
                default: 
                    if (input.id === 'small'){
                        results = results.filter( dog => dog.size === 'small')
                    }
                    else if(input.id === 'medium'){
                        results = results.filter(dog => dog.size === 'medium')
                    }
                    else{
                        results = results.filter(dog => dog.size === 'large')
                    }

            }
            
        }
        
    }
    
    if(results.length === 0){
        document.querySelector('.container .row').innerHTML = 'No dogs meet your criteria. <u class="clearFilter">clear filters</u>'
        document.querySelector('u').addEventListener('click', clearFilter)
    }
    else{
        cardGen(results)
    }

}

function clearFilter(){
    let inputs = document.querySelectorAll('input')
    for(let input of inputs){
        input.checked = false
    }
    cardGen(dogs)
}

let clearFilterBtns = document.querySelectorAll('.clearFilter')
for (let button of clearFilterBtns){
    button.addEventListener('click', clearFilter)
}

function select(e){
    //add to local storage
    let idx = Number(e.target.children[0].textContent)
    addToLocal(idx)
    e.target.classList.add('hidden')
    e.target.nextElementSibling.classList.remove('hidden')
    e.target.nextElementSibling.nextElementSibling.classList.remove('hidden')
    const removeButtons = document.querySelectorAll('.remove')
    for (let button of removeButtons){
        button.addEventListener('click', function (e) {
            removeFromLocal(idx)
            e.target.classList.add('hidden')
            e.target.previousElementSibling.classList.remove('hidden')
            e.target.nextElementSibling.classList.add('hidden')
        })
    }
}

let toggle = true
document.querySelector('.filterbtn').addEventListener('click', function(){ 
    let slider = document.querySelector('.col-md-3')
    if(toggle){
        slider.style.animation = 'slideOut .25s linear'
        slider.style.left = 0;
    }
    else{
        setTimeout(
            function(){
                setTimeout(function(){
                    slider.style.animation = 'slideIn .25s linear'
                }, 0)
                slider.style.left = '-800px'
            }, 250)
    }
        toggle = !toggle
})

// document.querySelector('#adopt-btn').addEventListener('click',function(){
//     console.log('fired')
//     let checkCircles = document.querySelectorAll('.fa-check-circle')
//     let storageArray = []
//     for(let i = 0; i < checkCircles.length;){
//         if(!checkCircles[i].classList.contains('hidden')){
//             let dogName = checkCircles[i].parentElement.children[0].textContent
//             for(let dog of dogs){
//                 if(dog.name === dogName)
//                 storageArray.push(dog)
//             }
//         }
//     }
//     let storageString = JSON.stringify(storageArray)
//     localStorage.setItem('adoptionCart', storageString)
// })


function addToLocal(idx){
    let storageString = localStorage.getItem('adoptionCart')
    if(storageString === null){storageString = '[]'}
    let storageArray = JSON.parse(storageString)
    storageArray.push(dogs[idx - 1])
    storageString = JSON.stringify(storageArray)
    localStorage.setItem('adoptionCart', storageString)
}

function removeFromLocal(idx){
    let storageString = localStorage.getItem('adoptionCart')
    let storageArray = JSON.parse(storageString)
    for(let dogIdx in storageArray){
        if(storageArray[dogIdx].id === idx){
            storageArray.splice(dogIdx, 1)
        }
    }
    storageString = JSON.stringify(storageArray)
    localStorage.setItem('adoptionCart', storageString)
}
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
            `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${dog.img}" alt="Image of ${dog.name}">
                <div class="card-body">
                    <h5 class="card-title">${dog.name}</h5>
                    <h6><span class="starVal">${starVal.join('')}</span></h6>
                    <h6>Adoption fee: <span class="adoptionFee">$${dog.adoptionFee}</span>.<sup>00</sup></h6>

                    <p class="card-text">${dog.desc}</p>
                    <a href="#" class="btn btn-primary">Add to your litter</a>
                </div>
            </div>`

        dogCardHTML.push(dogCard)
    }

    document.querySelector('.container .row').innerHTML += dogCardHTML.join('')
    let cards = document.querySelectorAll('.card')
    for (let card of cards) {
        card.style.animation = 'grow .2s linear'
    }
}
cardGen(dogs)

document.querySelector('#filterSort').addEventListener('change', function(e){filterCards(e)})

function filterCards(e){
    console.log(e.target)
    let cards = document.querySelectorAll('.card')
    for(let card of cards){
        card.style.animation = 'shrink .2s linear'
    }
    // if(e.target.checked === false){
    //     switch(e.target.name){
    //         case 'size':
    //             if(e.target.id === 'small'){
    //                 cardGen(dogs.filter(dog => dog.tags.includes('sm')))
    //             }
    //             else if(e.target.id === 'medium'){
    //                 cardGen(dogs.filter(dog => dog.tags.includes('md')))
    //             }
    //             else{
    //                 cardGen(dogs.filter(dog => dog.tags.includes('lg')))
    //             }
    //             break
    //         case 'rating':
    //             if(e.target.id === 'oneUp'){

    //             }
    //             else if (e.target.id === 'twoUp'){

    //             }
    //             else if (e.target.id === 'threeUp'){
                    
    //             }
    //             else{

    //             }
    //     }
    // }

    const inputs = document.querySelectorAll('#filterSort input')
    let results = [...dogs]
    for(let input of inputs){
        
        if (input.checked === true){
            switch(input.name){
                case 'rating':
                    if (input.id === 'twoUp') {
                        results = results.filter(dog => dog.rating >= 2)
                    }
                    break

                case 'fee':
                    if(input.id === 'free'){
                        results = results.filter(dog => dog.adoptionFee === 0)
                    }
                    break
                
                case 'kidFriendly':
                    results = results.filter( dog => dog.tags.includes('kf'))
                    break

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
    console.log(results)

}

function clearFilter(){
    let inputs = document.querySelectorAll('input')
    console.log('function firing')
    for(let input of inputs){
        input.checked = false
    }
    cardGen(dogs)
}

let clearFilterBtns = document.querySelectorAll('.clearFilter')
for (let button of clearFilterBtns){
    button.addEventListener('click', clearFilter)
}


const dogs = require('./dogs')
function cardGen(){
    document.querySelector('.container .row').innerHTML = ''
    let dogCardHTML = []
    for(let dog of dogs){
        let starVal = []
        for(let i = 1; i < dog.rating; i++){
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
                    <h6>${starVal.join('')}</h6>
                    <h6>Adoption fee: $${dog.adoptionFee}.<sup>00</sup></h6>

                    <p class="card-text">${dog.desc}</p>
                    <a href="#" class="btn btn-primary">Add to your litter</a>
                </div>
            </div>`

        dogCardHTML.push(dogCard)
    }

    document.querySelector('.container .row').innerHTML += dogCardHTML.join('')
}
cardGen()

document.querySelector('#filterSort').addEventListener('change', function(e){filterCards(e)})

function filterCards(e){
    console.log(e.target)
    let cards = document.querySelectorAll('.card')
    for(let card of cards){
        card.style.animation = 'shrink .2s linear'
    }
    dogs

}

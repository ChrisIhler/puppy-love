const dogs = [
    {
        name: 'Butterscotch',
        adoptionFee: 75,
        rating: 4,
        img:'../img/dogs/dog1.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags:['ht'],
        size: 'small'
    },
    {
        name: 'Bob Barker',
        adoptionFee: 150,
        rating: 5,
        img: '../img/dogs/dog2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf', 'ht'],
        size: 'medium'
    },
    {
        name: 'Kyle',
        adoptionFee: 0,
        rating: 1,
        img: '../img/dogs/dog3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: [],
        size: 'small'
    },
    {
        name: 'Max',
        adoptionFee: 200,
        rating: 4,
        img: '../img/dogs/dog4.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'large'
    },
    {
        name: 'Stella',
        adoptionFee: 75,
        rating: 3,
        img: '../img/dogs/dog5.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf', 'ht'],
        size: 'medium'
    },
    {
        name: 'Penny',
        adoptionFee: 150,
        rating: 4,
        img: '../img/dogs/dog6.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'large'
    },
    {
        name: 'Francisco',
        adoptionFee: 0,
        rating: 2,
        img: '../img/dogs/dog7.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'medium'
    },
    {
        name: 'Groucho',
        adoptionFee: 200,
        rating: 5,
        img: '../img/dogs/dog8.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf'],
        size: 'medium'
    },
    {
        name: 'Big Bowser',
        adoptionFee: 500,
        rating: 5,
        img: '../img/dogs/dog9.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf'],
        size: 'small'
    },
    {
        name: 'Teddy',
        adoptionFee: 0,
        rating: 3,
        img: '../img/dogs/dog10.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: [],
        size: 'large'
    },
    {
        name: 'Spot',
        adoptionFee: 75,
        rating: 3,
        img: '../img/dogs/dog11.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf']
    },
    {
        name: 'King Boof',
        adoptionFee: 500,
        rating: 5,
        img: '../img/dogs/dog12.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf', 'ht'],
        size: 'large'
    },
    {
        name: 'Mortimer',
        adoptionFee: 0,
        rating: 2,
        img: '../img/dogs/dog13.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'medium'
    },
    {
        name: 'Evie',
        adoptionFee: 150,
        rating: 4,
        img: '../img/dogs/dog14.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht', 'kf'],
        size: 'medium'
    },
    {
        name: 'Scruffy',
        adoptionFee: 250,
        rating: 4,
        img: '../img/dogs/dog15.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'small'
    },
    {
        name: 'Lil Brudder',
        adoptionFee: 0,
        rating: 4,
        img: '../img/dogs/dog16.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf'],
        size: 'small'
    },
    {
        name: 'Fluffy',
        adoptionFee: 50,
        rating: 3,
        img: '../img/dogs/dog17.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'large'
    },
    {
        name: 'Rat Dog',
        adoptionFee: 200,
        rating: 4,
        img: '../img/dogs/dog18.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht', 'kf'],
        size: 'sm'
    },
    {
        name: 'Clover',
        adoptionFee: 175,
        rating: 4,
        img: '../img/dogs/dog19.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf'],
        size: 'medium'
    },
    {
        name: 'Floof',
        adoptionFee: 200,
        rating: 5,
        img: '../img/dogs/dog20.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht', 'kf'],
        size: 'small'
    }
]

module.exports = dogs
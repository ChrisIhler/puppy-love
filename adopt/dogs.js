const dogs = [
    {
        name: 'Butterscotch',
        id: 1,
        adoptionFee: 75,
        rating: 4,
        img:'../img/dogs/dog1.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags:['ht'],
        size: 'small'
    },
    {
        name: 'Bob Barker',
        id: 2,
        adoptionFee: 150,
        rating: 5,
        img: '../img/dogs/dog2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf', 'ht'],
        size: 'medium'
    },
    {
        name: 'Kyle',
        id: 3,
        adoptionFee: 0,
        rating: 1,
        img: '../img/dogs/dog3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: [],
        size: 'small'
    },
    {
        name: 'Max',
        id: 4,
        adoptionFee: 200,
        rating: 4,
        img: '../img/dogs/dog4.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'large'
    },
    {
        name: 'Stella',
        id: 5,
        adoptionFee: 75,
        rating: 3,
        img: '../img/dogs/dog5.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf', 'ht'],
        size: 'medium'
    },
    {
        name: 'Penny',
        id: 6,
        adoptionFee: 150,
        rating: 4,
        img: '../img/dogs/dog6.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'large'
    },
    {
        name: 'Francisco',
        id: 7,
        adoptionFee: 0,
        rating: 2,
        img: '../img/dogs/dog7.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'medium'
    },
    {
        name: 'Groucho',
        id: 8,
        adoptionFee: 200,
        rating: 5,
        img: '../img/dogs/dog8.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf'],
        size: 'medium'
    },
    {
        name: 'Big Bowser',
        id: 9,
        adoptionFee: 500,
        rating: 5,
        img: '../img/dogs/dog9.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf'],
        size: 'small'
    },
    {
        name: 'Teddy',
        id: 10,
        adoptionFee: 0,
        rating: 3,
        img: '../img/dogs/dog10.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: [],
        size: 'large'
    },
    {
        name: 'Spot',
        id: 11,
        adoptionFee: 75,
        rating: 3,
        img: '../img/dogs/dog11.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf']
    },
    {
        name: 'King Boof',
        id: 12,
        adoptionFee: 500,
        rating: 5,
        img: '../img/dogs/dog12.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf', 'ht'],
        size: 'large'
    },
    {
        name: 'Mortimer',
        id: 13,
        adoptionFee: 0,
        rating: 2,
        img: '../img/dogs/dog13.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'medium'
    },
    {
        name: 'Evie',
        id: 14,
        adoptionFee: 150,
        rating: 4,
        img: '../img/dogs/dog14.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht', 'kf'],
        size: 'medium'
    },
    {
        name: 'Scruffy',
        id: 15,
        adoptionFee: 250,
        rating: 4,
        img: '../img/dogs/dog15.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'small'
    },
    {
        name: 'Lil Brudder',
        id: 16,
        adoptionFee: 0,
        rating: 4,
        img: '../img/dogs/dog16.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf'],
        size: 'small'
    },
    {
        name: 'Fluffy',
        id: 17,
        adoptionFee: 50,
        rating: 3,
        img: '../img/dogs/dog17.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht'],
        size: 'large'
    },
    {
        name: 'Rat Dog',
        id: 18,
        adoptionFee: 200,
        rating: 4,
        img: '../img/dogs/dog18.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht', 'kf'],
        size: 'sm'
    },
    {
        name: 'Clover',
        id: 19,
        adoptionFee: 175,
        rating: 4,
        img: '../img/dogs/dog19.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['kf'],
        size: 'medium'
    },
    {
        name: 'Floof',
        id: 20,
        adoptionFee: 200,
        rating: 5,
        img: '../img/dogs/dog20.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['ht', 'kf'],
        size: 'small'
    }
]

module.exports = dogs
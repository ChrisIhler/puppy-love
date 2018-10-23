const dogs = [
    {
        name: 'Butterscotch',
        adoptionFee: 75,
        rating: 4,
        img:'img/dog/dog1.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags:[ 'sm']
    },
    {
        name: 'Bob Barker',
        adoptionFee: 150,
        rating: 5,
        img: 'img/dog/dog2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['md', 'kd']
    },
    {
        name: 'Kyle',
        adoptionFee: 0,
        rating: 1,
        img: 'img/dog/dog3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['sm']
    },
    {
        name: 'Max',
        adoptionFee: 200,
        rating: 4,
        img: 'img/dog/dog4.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['lg']
    },
    {
        name: 'Stella',
        adoptionFee: 75,
        rating: 3,
        img: 'img/dog/dog5.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['md', 'kd']
    },
    {
        name: 'Penny',
        adoptionFee: 150,
        rating: 4,
        img: 'img/dog/dog6.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['lg']
    },
    {
        name: 'Francisco',
        adoptionFee: 0,
        rating: 2,
        img: 'img/dog/dog7.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['md']
    },
    {
        name: 'Groucho',
        adoptionFee: 200,
        rating: 5,
        img: 'img/dog/dog8.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['md', 'kd']
    },
    {
        name: 'Xavier',
        adoptionFee: 500,
        rating: 5,
        img: 'img/dog/dog9.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['sm']
    },
    {
        name: 'Teddy',
        adoptionFee: 0,
        rating: 3,
        img: 'img/dog/dog10.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['lg']
    },
    {
        name: 'Spot',
        adoptionFee: 75,
        rating: 3,
        img: 'img/dog/dog11.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['lg', 'kd']
    },
    {
        name: 'King Boof',
        adoptionFee: 500,
        rating: 5,
        img: 'img/dog/dog12.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['lg', 'kd']
    },
    {
        name: 'Mortimer',
        adoptionFee: 0,
        rating: 2,
        img: 'img/dog/dog13.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['md']
    },
    {
        name: 'Evie',
        adoptionFee: 150,
        rating: 4,
        img: 'img/dog/dog14.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['md', 'kd']
    },
    {
        name: 'Scruffy',
        adoptionFee: 250,
        rating: 4,
        img: 'img/dog/dog15.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['sm']
    },
    {
        name: 'Lil Brudder',
        adoptionFee: 0,
        rating: 4,
        img: 'img/dog/dog16.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['sm']
    },
    {
        name: 'Fluffy',
        adoptionFee: 50,
        rating: 3,
        img: 'img/dog/dog17.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['lg']
    },
    {
        name: 'Rat Dog',
        adoptionFee: 200,
        rating: 4,
        img: 'img/dog/dog18.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['sm', 'kd']
    },
    {
        name: 'Clover',
        adoptionFee: 175,
        rating: 4,
        img: 'img/dog/dog19.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['md']
    },
    {
        name: 'Floof',
        adoptionFee: 200,
        rating: 5,
        img: 'img/dog/dog20.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: ['sm', 'kd']
    }
]
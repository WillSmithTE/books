import harrypotter from './resources/harrypotter.jpg';

export const bookApi = {
    search: async (searchTerm) => {
        return dummyBooks;
    }
};

const dummyBooks = [
    {
        name: `Michael Jordan - The Life`,
        author: 'J.K. Rowling',
        imgUrl: harrypotter
    },
    {
        name: `The Power of Now`,
        author: 'J.K. Rowling',
        imgUrl: harrypotter
    },
    {
        name: `Lord of the Rings`,
        author: 'J.K. Rowling',
        imgUrl: harrypotter
    },
]
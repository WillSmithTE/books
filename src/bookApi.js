import harrypotter from './resources/harrypotter.jpg';
import howtomotivateyourchild from './resources/howtomotivateyourchild.jpeg';
import michaeljordan from './resources/michaeljordan.jpeg';
import thepowerofnow from './resources/thepowerofnow.jpeg';
import lordoftherings from './resources/lordoftherings.jpeg';
import range from './resources/range.jpeg';
import uuid from "uuid";

export const bookApi = {
    search: async (searchTerm) => {
        await new Promise(r => setTimeout(r, 1000));
        return withKeys;
    }
};

const dummyBooks = [
    {
        name: `Harry Potter`,
        author: 'J.K. Rowling',
        imgUrl: harrypotter
    },
    {
        name: `Michael Jordan - The Life`,
        author: 'Roland',
        imgUrl: michaeljordan
    },
    {
        name: `The Power of Now`,
        author: 'Eckhart Tolle',
        imgUrl: thepowerofnow
    },
    {
        name: `Lord of the Rings`,
        author: 'J.R.R. Tolkien',
        imgUrl: lordoftherings
    },
    {
        name: `Range`,
        author: 'David Epstein',
        imgUrl: range
    },
    {
        name: `How to Motivate Your Child`,
        author: 'Andrew Martin',
        imgUrl: howtomotivateyourchild
    },
]
export const withKeys = dummyBooks.map((book) => ({key: uuid(), ...book}))

import harrypotter from './resources/harrypotter.jpg';

export const bookApi = {
    search: async (searchTerm) => {
        return searchTerm ? [
            {
                name: `Harry Potter et le prisonnier d'Azkaban`,
                author: 'J.K. Rowling',
                imgUrl: harrypotter
            }
        ] : [];
    }
};
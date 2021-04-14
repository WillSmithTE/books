import React, { useEffect, useState } from 'react';
import { bookApi } from './bookApi';
import { SearchBox } from './SearchBox';
import { SearchResults } from './SearchResults';

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    useEffect(() => {
        if (searchTerm) {
            bookApi.search(searchTerm)
                .then(setResults)
        }
    }, [searchTerm]);
    return results.length ?
        <>
            <SearchBox setSearchTerm={setSearchTerm} />
            <SearchResults books={results} />
        </> :
        <SearchBox setSearchTerm={setSearchTerm} />
};
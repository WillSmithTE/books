import React, { useEffect, useState } from 'react';
import { bookApi, withKeys } from './bookApi';
import { ResultsAndSearchBox } from './ResultsAndSearchBox';
import { SearchBox } from './SearchBox';

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
        <ResultsAndSearchBox setSearchTerm={setSearchTerm} results={results}/> :
        <SearchBox setSearchTerm={setSearchTerm} />
};
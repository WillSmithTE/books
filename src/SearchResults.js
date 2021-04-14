import { Row } from "./Row";

export const SearchResults = ({books}) => {
    return <>
        <Row books={books.slice(0, 3)} />
        <Row books={books.slice(3, 7)} />
        <Row books={books.slice(7, 10)} />
    </>;
};
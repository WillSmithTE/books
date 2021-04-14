import { Book } from "./Book";
import { Row } from "./Row";

export const SearchResults = ({books}) => {
    return books.map((book) => <Row book={book}/>);
};
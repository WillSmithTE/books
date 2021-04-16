import { makeStyles } from "@material-ui/core";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        alignItems: 'center',
        paddingTop: '5%',
        margin: '0 auto',
    }
}));

export const ResultsAndSearchBox = ({ setSearchTerm, results }) => {
    const { container } = useStyles();
    return <div className={container}>
        <SearchBox setSearchTerm={setSearchTerm} />
        <SearchResults books={results} />
    </div >;
}
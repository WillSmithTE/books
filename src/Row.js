import styled from 'styled-components';
import { Book } from './Book';

export const Row = ({books = []}) => <FlexBox>
    <Book book={books[0]}/>
    <Book book={books[1]}/>
    <Book book={books[2]}/>
</FlexBox>;

const FlexBox = styled.div`
display: flex
`;
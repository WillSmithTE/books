import styled from 'styled-components';
import { Book } from './Book';

export const Row = ({book}) => <FlexBox>
    <Book book={book}/>
</FlexBox>;

const FlexBox = styled.div`
display: flex
direction: row
`;
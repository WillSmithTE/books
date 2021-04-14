import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Book = ({ book: { name, author, price, imgUrl } = {} }) => {
    return <BookContainer>
        <Typography variant='h5'>{name}</Typography>
        {imgUrl && <BookImage alt='book' src={imgUrl} />}
    </BookContainer>;
};

const BookContainer = styled.div`
    height: 300px;
    width: 250px;
    border: 1px solid white;
    margin: 10px;
`;

const BookImage = styled.img`
    max-height: 200px;
`;

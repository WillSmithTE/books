import styled from 'styled-components';
import { Button, Card, Typography } from '@material-ui/core';

export const Book = ({ book: { name, author, imgUrl } = {} }) => {
    return <BookContainer>
        <InsideBook>
            <BookImage alt={name} src={imgUrl} />
            <Text text={name} />
            <Text text={author} />
            <DownloadButton />
        </InsideBook>
    </BookContainer>;
};

const DownloadButton = () => <Button style={{ backgroundColor: '#676565', width: '60%', margin: '2rem auto 0' }}>Download</Button>

const Text = ({ text }) => <TextContainer>
    <Typography variant='h5'>{text}</Typography>
</TextContainer>;

const TextContainer = styled(Card)`
    background-color: #EEEEEE;
    margin-top: 1.5rem;
`;

const BookContainer = styled(Card)`
    background-color: #C4C4C4
`;

const InsideBook = styled.div`
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
`;

const BookImage = styled.img`
    max-height: 200px;
`;

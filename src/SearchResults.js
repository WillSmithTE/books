import { Book } from "./Book";
import { Row } from "./Row";
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";
import { useState } from "react";

export const SearchResults = ({ books }) => {
    const [slide, setSlide] = useState(0);
    const slides = books.map((book, index) => {
        return { ...book, content: <Book book={book} />, onClick: () => setSlide(index) };
    });
    console.error('here!')
    return <>
        <h1>HI</h1>
        <Carousel
            slides={slides}
            goToSlide={slide}
            offsetRadius={4}
            showNavigation={false}
            config={config.gentle}
        />
    </>;
};
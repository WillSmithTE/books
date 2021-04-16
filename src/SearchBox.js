import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { SearchBoxContainer } from './SearchBox.styled';

const useStyles = makeStyles((theme) => ({
    searchBar: {
        backgroundColor: "white",
        minWidth: '250px'
    },
    searchButton: {
        marginTop: '1rem',
        backgroundColor: '#FFE600',
        '&:hover': {
            backgroundColor: "#f00",
         },
    }
}));

export const SearchBox = ({ setSearchTerm }) => {
    const { handleSubmit, register, watch } = useForm();
    const { searchBar, searchButton } = useStyles();
    const onSubmit = ({ search }) => {
        setSearchTerm(search);
    };

    const showSearchButton = Boolean(watch('search'));
    const getButtonStyle = () => showSearchButton ? {} : {visibility: 'hidden'};

    return <form onSubmit={handleSubmit(onSubmit)}>
        <SearchBoxContainer>
            <TextField
                autoFocus
                className={searchBar}
                variant="outlined"
                {...register('search')}
            />
            <Button className={searchButton} variant='outlined' style={getButtonStyle()}>Get it free</Button>
        </SearchBoxContainer>
    </form>
};
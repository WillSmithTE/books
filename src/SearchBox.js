import React from 'react';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

export const SearchBox = ({setSearchTerm}) => {
    const { handleSubmit, register } = useForm();
    const onSubmit = ({search}) => {
        setSearchTerm(search);
    };

    return <form onSubmit={handleSubmit(onSubmit)}>

        <TextField
            autoFocus
            style={{
                backgroundColor: "white",
                minWidth: '250px'
            }}
            variant="outlined"
            {...register('search')}
        />
        <input type="submit" hidden />

    </form>
};
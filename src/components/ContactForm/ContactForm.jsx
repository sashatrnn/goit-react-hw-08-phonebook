import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      Notiflix.Notify.info(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const SubmitButton = styled(Button)({
    margin: '1rem 0 0',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: '3px',
    border: 0,
    color: 'white',
    height: '48px',
    padding: '0 30px',
    width: '180px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  });

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > :not(style)': { m: 2 },
          }}
        >
          <TextField
            fullWidth
            required
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            required
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            name="phone"
            value={number}
            onChange={handleChange}
          />
          <SubmitButton type="submit">Add contact</SubmitButton>
        </Box>
      </form>
    </Container>
  );
};

export default ContactForm;

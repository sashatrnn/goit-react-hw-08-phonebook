import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/contactSlice';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(setContactsFilter(event.target.value.toLowerCase()));
  };

  return (
    <Container component="main" maxWidth="xs">
      <TextField
        fullWidth
        id="input-with-icon-textfield"
        label="Find contacts by name"
        variant="standard"
        onChange={handleFilter}
        size="large"
      />
    </Container>
  );
};

export default Filter;

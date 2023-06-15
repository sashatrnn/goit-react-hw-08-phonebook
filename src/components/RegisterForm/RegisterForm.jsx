import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  const SubmitButton = styled(Button)({
    margin: '1rem 0 0',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: '3px',
    border: 0,
    color: 'white',
    height: '48px',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '400px' }}>
        <TextField
          name="name"
          label="Name"
          type="text"
          fullWidth
          required
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          fullWidth
          required
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          fullWidth
          required
          sx={{ marginBottom: '20px' }}
        />
        <SubmitButton type="submit">Register</SubmitButton>
      </Box>
    </form>
  );
};

export default RegisterForm;

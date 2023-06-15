import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const ColorButton = styled(Button)({
    color: '#FE6B8B',
    outline: '#FE6B8B',
    borderColor: '#FE6B8B',
    '&:hover': {
      borderColor: '#FE6B8B',
      boxShadow: '4px 8px 19px -3px rgba(0,0,0,0.27)',
    },
  });

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <AccountCircle />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} />
      <ColorButton
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => handleDelete(id)}
      >
        Delete
      </ColorButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactItem;

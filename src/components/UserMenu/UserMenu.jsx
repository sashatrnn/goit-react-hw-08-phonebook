import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <NavLink to="/" className={css.navLink}>
          <MapsHomeWorkTwoToneIcon
            sx={{ marginRight: '20px', fontSize: '40px', color: '#bbb39b' }}
          />
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={css.NavLinkMenu}>
            <ContactPhoneTwoToneIcon
              sx={{ fontSize: '45px', color: '#bbb39b' }}
            />
          </NavLink>
        )}
      </Box>
      {isLoggedIn ? (
        <Box
          sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}
        >
          {user && (
            <Typography sx={{ marginRight: '20px', fontSize: '20px' }}>
              {user.name}
            </Typography>
          )}
          <LoginTwoToneIcon
            sx={{ cursor: 'pointer', fontSize: '30px' }}
            type="button"
            title="Log Out"
            onClick={() => dispatch(logOut())}
          />
        </Box>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <NavLink to="/login" className={css.navLink}>
            <LoginTwoToneIcon sx={{ marginRight: '20px', fontSize: '30px' }} />
          </NavLink>
          <NavLink to="/register" className={css.navLink}>
            <HowToRegTwoToneIcon sx={{ fontSize: '30px' }} />
          </NavLink>
        </Box>
      )}
    </Box>
  );
};

export default UserMenu;

import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Your PhoneBook
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Keep your contacts in our app. Convenient, fast, safe! Сlick on the
          symbol <HowToRegTwoToneIcon /> for quick registration, or on the
          symbol <LoginTwoToneIcon /> for logging into the account. 
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;

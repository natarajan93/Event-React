import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');  
  };

  return (
    <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Typography variant="body1" gutterBottom>
        You may have mistyped the address, or the page has moved.
      </Typography>
      <Button variant="contained" sx={{backgroundColor:'#0a2558'}} onClick={handleGoHome}>
        Go to Home Page
      </Button>
    </Container>
  );
};

export default NotFound;

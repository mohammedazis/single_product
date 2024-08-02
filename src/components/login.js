import React from 'react';
import Product from './product';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Checkbox,
  Button,
  IconButton,
  Typography,
  Box,
  Stack
} from '@mui/material';
import { Facebook, Twitter, Google, GitHub } from '@mui/icons-material';
import { keyframes } from '@emotion/react';

const landingEffect = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const moveEffect = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/product');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          backgroundImage: 'url(https://bestinau.com.au/wp-content/uploads/2019/01/free-images.jpg), url(https://cdn.wallpapersafari.com/23/58/X8ZQ9k.jpg), url(https://bestinau.com.au/wp-content/uploads/2019/01/free-images-download-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
          animation: `${landingEffect} 1s ease-out, ${moveEffect} 5s infinite`,
          zIndex: -1,
        }}
      />
      <Grid container spacing={4}>
        <Grid
          item
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white',
            zIndex: 1,
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            The best offer
            <br />
            <Typography component="span" variant="h3" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              for your business
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </Typography>
        </Grid>

        <Grid item md={6} sx={{ position: 'relative' }}>
          <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', boxShadow: 5 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField fullWidth label="First name" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Last name" variant="outlined" />
                </Grid>
              </Grid>
              <TextField fullWidth label="Email" variant="outlined" margin="normal" />
              <TextField fullWidth label="Password" variant="outlined" type="password" margin="normal" />
              <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <Checkbox />
                <Typography variant="body2">Subscribe to our newsletter</Typography>
              </Box>
              <Button fullWidth variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleSignUp}>
                Sign Up
              </Button>
              <Typography variant="body2" align="center" sx={{ mb: 2 }}>or sign up with:</Typography>
              <Stack direction="row" justifyContent="center" spacing={2}>
                <IconButton color="primary">
                  <Facebook />
                </IconButton>
                <IconButton color="primary">
                  <Twitter />
                </IconButton>
                <IconButton color="primary">
                  <Google />
                </IconButton>
                <IconButton color="primary">
                  <GitHub />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;

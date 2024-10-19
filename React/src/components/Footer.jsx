import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton, ThemeProvider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Theme from './custometheme'
const Footer = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        component="footer"
        sx={{
          backgroundColor: '#0000',
          color: '#00000',
          padding: '40px 0',
          boxShadow: '0 0 3px black',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" sx={{ width: '60%' }}>
                Bus Stop, Teachers Colony, Kumalan Kuttai, Erode, Tamil Nadu 638011
              </Typography>
            </Grid>


            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Branches
              </Typography>
              <Link href="" color="inherit" underline="none" sx={{ display: 'block', margin: '4px 0' }}>
                Chidambaram
              </Link>
              <Link href="" color="inherit" underline="none" sx={{ display: 'block', margin: '4px 0' }}>
                Chennai
              </Link>
              <Link href="" color="inherit" underline="none" sx={{ display: 'block', margin: '4px 0' }}>
                Velachery
              </Link>
            </Grid>


            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box>
                <IconButton href="" color="inherit" aria-label="Facebook">
                  <Facebook />
                </IconButton>
                <IconButton href="" color="inherit" aria-label="Twitter">
                  <Twitter />
                </IconButton>
                <IconButton href="" color="inherit" aria-label="Instagram">
                  <Instagram />
                </IconButton>
                <IconButton href="" color="inherit" aria-label="LinkedIn">
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <hr style={{ marginTop: '10px', }} />
          <Box mt={2}>
            <Typography variant="body2" align="center">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;

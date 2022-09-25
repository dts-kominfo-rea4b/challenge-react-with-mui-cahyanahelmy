import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            paddingY: 2
          }}
        >
          <Typography variant="subtitle1" noWrap component="div" sx={{ flexGrow: 1 }}>
            Call a Friend
          </Typography>
          <Typography variant="subtitle1" noWrap component="div">
            Your friendly contact app
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

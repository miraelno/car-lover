import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material';


function Header() {
  return (
    <React.Fragment>
      <AppBar position="static" elevation={0}></AppBar>

      <Toolbar>
        <Typography variant="h6" noWrap>
          Car Lover
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;

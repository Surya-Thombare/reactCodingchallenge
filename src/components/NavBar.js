import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate } from "react-router-dom";
import Pop from "./Popover";

export default function ButtonAppBar() {
    let user = localStorage.getItem('user')
    let userData = JSON.parse(user);
    const onLogout = () => {
        console.log('here');
        localStorage.removeItem("user");
        localStorage.removeItem("valid");
    }
    if(!localStorage.getItem('user')) return <Navigate to="/signup" />;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hello { userData.name}
          </Typography>
          <Pop />
          <Button color="inherit" onClick={onLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

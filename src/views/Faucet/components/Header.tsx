import React from 'react';
import {
    AppBar, Toolbar, IconButton, Typography, Button, makeStyles,
} from '@mui/material';
import MenuIcon from '@mui/material/MenuItem';


const Header: React.FC = () => {
    
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    PCM Faucet
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

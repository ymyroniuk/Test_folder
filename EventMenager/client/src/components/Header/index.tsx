import { ShoppingBasket } from '@mui/icons-material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = (props) => {
    return (
    <Box sx={{ flexGrow: 1 }}>
     <AppBar position='static'>
        <Toolbar>
            <IconButton 
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <MenuIcon />
            </IconButton>
            <Typography 
                variant='h6'
                sx={{ flexGrow: 2 }}
            >
                Uevent
            </Typography>
            {/* <IconButton 
                color="inherit" 
            > */}
            {/* {props ? <ShoppingBasket /> : <div>sign in</div>} */}
            <Box mr={3}>
                <Button color="inherit" variant="outlined">Log In</Button>
            </Box>
                <Button color="secondary" variant="contained">Sign Up</Button>
            {/* </IconButton> */}
        </Toolbar>
     </AppBar>
    </Box>
    )
}
export default Header;
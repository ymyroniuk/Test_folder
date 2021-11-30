import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import TextField from '@mui/material/TextField';

const Welcome: React.FC = () => {
    return(
        <>
            <Header />
                <h1>Welcome</h1>
            <div>
            <TextField 
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined"
                    fullWidth
                    sx={{mb: "1.5rem"}}
                    /> 
            </div>
            <div>
            <Link to="/about"> about</Link>
            </div>
            <div>
            <Link to="/list-items">cards</Link> 
            </div>
            <div>
                <Link to="/sign-up">Sign up</Link>
            </div>
        </>
    )
}

export default Welcome;
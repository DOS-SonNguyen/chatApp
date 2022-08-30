import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';

import firebase, { auth } from '../../firebase/config'; 

const fbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {

    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider);
    };

    return (
        <Container maxWidth="sm">
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 350,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A22027' : '#fff',
                }}
                elevation={4}
            >
                <Grid
                    container spacing={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant="h4" component="div" gutterBottom>
                            Login
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">Login with Google</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={handleFbLogin}>Login with Facebook</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Login;
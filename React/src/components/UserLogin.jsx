import { Backdrop, Box, Button, Checkbox, FormControlLabel, Paper, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import Ob from './Object'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import Theme from './custometheme'
import CircularProgress from '@mui/material/CircularProgress';


export let userob = 0;

const UserLogin = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [logins, setLogins] = useState()
    const [check, setCheck] = useState()

    const [open,setOpen]=useState(false)

    const login = (e) => {
        e.preventDefault();

        setOpen(true)
        axios.get(`https://event-management-system-whpz.onrender.com/user/userlogin/${username}/${password}`, {
            'headers': {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.data) {
                setOpen(false)
                setCheck(false)
                console.log("hi");

                console.log(res.data.id);
                userob = res.data.id;
               
                setLogins(true)


            } else {
                setOpen(false)
                setCheck(true)
                console.log("failed");
                setLogins(false)
            }
        })
    }
    return (
        <>
            <ThemeProvider theme={Theme}>
                {logins && <Navigate to={'/userdashboard'} replace={true} />}
                <Box sx={Ob.logincontainer}>
               
                    <form onSubmit={login} style={Ob.form} >
                        <Paper elevation={24} sx={Ob.theme}>

                            <Typography variant='h6' sx={{
                                textAlign: 'center',
                                fontWeight: '550',
                                color: '#0a2558',
                            }}>USER LOGIN</Typography>
                            <TextField sx={Ob.input} label="UserName" variant="outlined"
                                size="small" required onChange={(e) => setUsername(e.target.value)} error={check}
                                helperText={check ? 'Login Failed' : ''} />
                            <TextField sx={Ob.input}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                size="small"
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                error={check}
                                helperText={check ? 'Login Failed' : ''}
                            />

                            <FormControlLabel sx={{
                                marginTop: '10px',

                            }} control={
                                <Checkbox size='small' />
                            }
                                label="Remember me"
                            />


                            <Button sx={Ob.color} variant="contained" type='submit'>Submit</Button>

                            <Typography sx={{ textAlign: 'center', paddingTop: '10px' }}>Don't have an account?</Typography>
                            <Typography sx={{ textAlign: 'center' }}><Link to={'/usersignup'} style={{ textDecoration: 'none' }}>SignUp </Link> here</Typography>
                        </Paper>
                    </form>
                   
                    <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={open}
                   
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>

                </Box>

            </ThemeProvider>

        </>
    )
}

export default UserLogin;


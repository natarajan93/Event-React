import { Backdrop, Box, Button, Checkbox, formControlClasses, FormControlLabel, Paper, TextField, ThemeProvider, Typography } from '@mui/material'
import Ob from './Object.js'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Theme from './custometheme'
import CircularProgress from '@mui/material/CircularProgress';





function Login() {
    const [login, setLogin] = useState(false)
    const [check, setCheck] = useState(false)
    const [name, setName] = useState()
    const [pass, setPass] = useState()
    const [open, setOpen] = useState(false)


    const handleLoginName = (e) => {
        setName(e.target.value)

    }
    const handleLoginPassword = (e) => {
        setPass(e.target.value)

    }
    const submit = (e) => {
        e.preventDefault();
        setOpen(true)
        if (name === 'admin' && pass === 'admin') {
            setOpen(false)
            setLogin(true);

        } else {
             setOpen(false)
            setCheck((check) => !check)
        }
    }
    return (
        < >
            <ThemeProvider theme={Theme}>
                {login && <Navigate to="/admin/dashboard" replace={true} />}
                <Box sx={Ob.logincontainer}>
                    <form onSubmit={submit} style={Ob.form} >
                        <Paper elevation={24} sx={Ob.theme}>

                            <Typography variant='h6' sx={{
                                textAlign: 'center',
                                fontWeight: '550',
                                color: '#0a2558',
                            }}>ADMIN LOGIN</Typography>
                            <TextField sx={Ob.input} label="UserName" variant="outlined"
                                size="small" onChange={handleLoginName} required error={check} />
                            <TextField sx={Ob.input}
                                onChange={handleLoginPassword}
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

                            <Typography sx={{ fontSize: '12px', fontWeight: '450', marginTop: '10px' }}>UserName: <span style={{ fontWeight: '550' }}> admin</span></Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: '450' }}>Password: <span style={{ fontWeight: '550' }}> admin</span></Typography>

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

export default Login
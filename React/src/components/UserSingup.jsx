import { Backdrop, Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, ThemeProvider, Typography } from '@mui/material'
import Ob from './Object.js'
import axios from 'axios'
import { useState } from 'react'
import UserDashbord from './UserDashbord.jsx'
import { Navigate } from 'react-router-dom'
import Theme from './custometheme'
import CircularProgress from '@mui/material/CircularProgress';
function UserSingup() {


    const [login, setLogin] = useState()
    const [open, setOpen] = useState(false)
    const [signupdata, setSignUpData] = useState({
        userName: '',
        password: '',
        mobileNumber: '',
        gender: '',
        email: '',
    })

    const handlesignup = (e) => {

        setSignUpData({ ...signupdata, [e.target.name]: e.target.value })
    }
    const signUp = (e) => {
        e.preventDefault();
        setOpen(true)
        axios.post('https://event-management-system-whpz.onrender.com/user/sallalldata', signupdata)
            .then((res) => {
                setOpen(false)
                setLogin(true);

                console.log(res)

            }
            )
    }

    return (
        < >
            <ThemeProvider theme={Theme}>
                {login && <Navigate to={'/userlogin'} replace={true} />}
                <Box sx={Ob.logincontainer}>
                    <form onSubmit={signUp} style={Ob.form}>
                        <Paper elevation={24} sx={Ob.theme}>

                            <Typography variant='h6' sx={{
                                textAlign: 'center',
                                fontWeight: '550',
                                color: '#0a2558',

                            }}>SIGN UP</Typography>
                            <TextField sx={Ob.input} label="UserName" variant="outlined"
                                name='userName'
                                size="small" required onChange={handlesignup} />
                            <TextField sx={Ob.input} label="Email" variant="outlined" name='email' type='email'
                                size="small" required onChange={handlesignup} />
                            <TextField sx={Ob.input} label="Phone" variant="outlined" name='mobileNumber'
                                size="small" onChange={handlesignup} error={isNaN(signupdata.mobileNumber)}
                                helperText={isNaN(signupdata.mobileNumber) ? 'Please enter a valid number' : ''} />
                            <TextField sx={Ob.input}
                                required
                                size="small"
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                name='password'
                                autoComplete="current-password"
                                onChange={handlesignup}
                            />
                            <FormControl>

                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Female" checked={signupdata.gender === 'Female'} onChange={handlesignup} name='gender' control={<Radio />} label="Female" />
                                    <FormControlLabel value="Male" checked={signupdata.gender === 'Male'} onChange={handlesignup} name='gender' control={<Radio />} label="Male" />
                                    {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                                </RadioGroup>
                            </FormControl>

                            <FormControlLabel sx={{
                                marginTop: '10px',

                            }} control={
                                <Checkbox size='small' />
                            }
                                label="Remember me"
                            />


                            <Button sx={Ob.color} variant="contained" type='submit'>Submit</Button>



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

export default UserSingup
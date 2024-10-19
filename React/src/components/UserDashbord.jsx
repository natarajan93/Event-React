import { Avatar, Box, Button, Menu, MenuItem, Paper, styled, ThemeProvider, Typography, useMediaQuery } from '@mui/material'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import Footer from './Footer'
import Ob from './Object'
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import Theme from './custometheme'


const UserDashbord = () => {

    const res = useMediaQuery("(max-width:900px)")
    const [event, setEvent] = useState([]);

    useEffect(() => {
        axios.get('https://event-management-system-whpz.onrender.com/event/images')
            .then((res) => {
                console.log(res.data)

                setEvent(res.data)
            })
    }, [])
    const [menu1, setMenu1] = useState(false)

    return (
        <>
            <ThemeProvider theme={Theme}>
                <Box>
                    {!res ?
                        <Paper sx={Ob.usernav} >
                            <Typography variant='h4' sx={{ paddingLeft: '20px', fontWeight: '550' }} >EVENT</Typography>

                            <Box sx={{ gap: '15px', display: 'flex',alignItems:'center' }}>
                                <a href='#' style={{ color: 'white', fontSize: '18px', textDecoration: 'none', fontWeight: '500' }}>HOME</a>
                                <a href='#event' style={{ color: 'white', fontSize: '18px', textDecoration: 'none', fontWeight: '500' }}>EVENT</a>
                                <a href='#footer' style={{ color: 'white', fontSize: '18px', textDecoration: 'none', fontWeight: '500' }}>CONTACT</a>
                                <Link to={'/userlogin'}><Button variant='contained' sx={{ backgroundColor: 'rgba(217, 203, 210, 0.30)', borderRadius: '20px', }}>LOGIN</Button></Link>
                                <Link to={'/adminlogin'}><Button variant='contained' sx={{ backgroundColor: 'rgba(217, 203, 210, 0.30)', borderRadius: '20px', marginRight: '10px' }}>ADMIN</Button></Link>
                            </Box>
                        </Paper>
                        :
                        <Paper sx={Ob.usernav}>
                            <Typography variant='h4' sx={{ paddingLeft: '20px', fontWeight: '550', fontSize: { xs: '15px', sm: '19px', md: '24px', lg: '28px' } }} >EVENT</Typography>
                            <Box sx={{ display: 'flex', gap: '20px', marginRight: '20px' }}>
                                <Box sx={{ gap: '10px', display: 'flex', alignItems: 'center' }}>
                                    <a href='#' style={{ color: 'white', fontSize: '10px', textDecoration: 'none', fontWeight: '500'}}>HOME</a>
                                    <a href='#event' style={{ color: 'white', fontSize: '10px', textDecoration: 'none', fontWeight: '500' }}>EVENT</a>
                                    <a href='#footer' style={{ color: 'white', fontSize: '10px', textDecoration: 'none', fontWeight: '500' }}>CONTACT</a>
                                    <Box>
                                    </Box>
                                </Box>
                                <Box sx={{display:'flex',alignItems:'center', position: 'relative'}}><LoginIcon onClick={() => setMenu1((menu1) => !menu1)} sx={{ cursor: 'pointer' }} />
                                    <Box sx={{ display: menu1 ? 'grid' : 'none', position: 'absolute', overflow: 'hidden', right:'0px',top:'20px', backgroundColor: 'rgba(217, 203, 210, 0.30)', borderRadius: '10px' }}>
                                        <Button sx={{
                                            width: '100%',
                                            fontSize: '11px',
                                            '&:hover': {
                                                backgroundColor: 'rgba(217, 203, 210, 0.30)',

                                            },
                                        }} ><Link to={'/adminlogin'} style={{ color: 'white', textDecoration: 'none' }} >Admin</Link></Button>
                                        <Button sx={{
                                            width: '100%',
                                            fontSize: '11px',

                                            '&:hover': {
                                                backgroundColor: 'rgba(217, 203, 210, 0.30)',
                                            },
                                        }}><Link to={'/userlogin'} style={{ color: 'white', textDecoration: 'none' }} replace={true}>Login</Link></Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    }
                    <img src="usernav.jpeg" alt="" style={{
                        width: '100%',
                        zIndex: '-1',
                    }} />
                    {event.length === 0 && <Box sx={{
                        width: '100%',
                        height: '80vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}> <CircularProgress sx={{
                        color: '#0a2558',
                    }} size={50} />
                    </Box>}

                    {event.length > 0 && (
                        <Box sx={{ marginTop: { md: '50px', xs: '20px', sm: '30px', lg: '55px' } }} id='event'>
                            <Typography variant='h4' sx={{ color: '#0a2558', textAlign: 'center', fontWeight: '550', fontSize: { xs: '15px', sm: '19px', md: '24px', lg: '28px' } }}>POPULAR EVENTS</Typography>
                            <Box sx={{ paddingBottom: { xs: '50px', md: '100px', sm: '60px', lg: '110px' } }}>
                                {event.map((item, index) => (
                                    <UserCard object={item} key={index} />
                                ))}
                            </Box>
                            <div id='footer'>
                                <Footer />
                            </div>
                        </Box>
                    )}


                </Box>

            </ThemeProvider>
        </>



    )
}

export default UserDashbord
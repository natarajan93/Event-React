import { Avatar, Box, Button, Menu, MenuItem, Paper, ThemeProvider, Typography, useMediaQuery } from '@mui/material'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Ob from './Object'
import Theme from './custometheme'



const LoginUserPage = () => {
    const res = useMediaQuery("(max-width:900px)")
    const [menu, setMenu] = useState(false)
    const [event, setEvent] = useState([]);
    const [menu1, setMenu1] = useState(false)

    useEffect(() => {
        axios.get('https://event-management-system-whpz.onrender.com/event/images')
            .then((res) => {
                console.log(res.data)
                setEvent(res.data)
            })
    }, [])
    return (
        <>
            <ThemeProvider theme={Theme}>
                <Box>
                    {!res ?
                        <Paper sx={Ob.usernav} >
                            <Typography variant='h4' sx={{ paddingLeft: '20px', fontWeight: '550' }} >EVENT</Typography>
                            <Box sx={{ gap: '20px', display: 'flex',alignItems:'center' }}>
                                <a href='#' style={{ color: 'white', fontSize: '18px', textDecoration: 'none', fontWeight: '500' }}>HOME</a>
                                <a href='#event' style={{ color: 'white', fontSize: '18px', textDecoration: 'none', fontWeight: '500' }}>EVENT</a>
                                <a href='#footer' style={{ color: 'white', fontSize: '18px', textDecoration: 'none', fontWeight: '500' }}>CONTACT</a>
                                <Box>
                                    <Avatar src="/broken-image.jpg" onClick={() => setMenu((menu) => !menu)} sx={{ position: 'relative', marginRight: '20px', cursor: 'pointer', backgroundColor: 'rgba(217, 203, 210, 0.30)' }} />
                                    <Box sx={{
                                        display: menu ? 'block' : 'none',
                                        maxWidth: 'fit-content',
                                        backgroundColor: 'rgba(217, 203, 210, 0.30)',
                                        textAlign: 'center',
                                        position: 'absolute',
                                        borderRadius: '10px',
                                        boxShadow: '0 0 4px black',
                                        overflow: 'hidden',
                                    }} >
                                        <Button sx={{
                                            width: '100%',
                                            '&:hover': {
                                                backgroundColor: 'rgba(217, 203, 210, 0.30)',

                                            },
                                        }} ><Link to={'/adminlogin'} style={Ob.menulink}>Admin</Link></Button>
                                        <Button sx={{
                                            width: '100%',
                                            '&:hover': {
                                                backgroundColor: 'rgba(217, 203, 210, 0.30)',
                                            },
                                        }}><Link to={'/'} replace={true} style={Ob.menulink} >Logout</Link></Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                        :
                        <Paper sx={Ob.usernav}>
                            <Typography variant='h6' sx={{ paddingLeft: '20px', fontWeight: '550' }} >EVENT</Typography>
                            <Box sx={{ display: 'flex',alignItems:'center',gap:'20px' }}>
                                <a href='#' style={{ color: 'white', fontSize: '10px', textDecoration: 'none', fontWeight: '500' }}>HOME</a>
                                <a href='#event' style={{ color: 'white', fontSize: '10px', textDecoration: 'none', fontWeight: '500' }}>EVENT</a>
                                <a href='#footer' style={{ color: 'white', fontSize: '10px', textDecoration: 'none', fontWeight: '500' }}>CONTACT</a>
                                <Box>
                                    <Avatar src="/broken-image.jpg" onClick={() => setMenu1((menu1) => !menu1)} sx={{ position: 'relative', marginRight: '20px', cursor: 'pointer', backgroundColor: 'rgba(217, 203, 210, 0.30)', width: '25px', height: '25px' }} />
                                    <Box sx={{ display: menu1 ? 'grid' : 'none', position: 'absolute', overflow: 'hidden', right: '0px', backgroundColor: 'rgba(217, 203, 210, 0.30)', borderRadius: '10px' }}>
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

export default LoginUserPage
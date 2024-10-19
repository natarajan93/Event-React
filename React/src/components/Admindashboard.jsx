import { Box, Button, Paper, styled, ThemeProvider, Typography, useMediaQuery } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupIcon from '@mui/icons-material/Group';
import FeedbackIcon from '@mui/icons-material/Feedback';
import React, { useState } from 'react'
// import Users from './Users';
// import Dashboard from './Dashboard';
// import Eventlist from './Eventlist';
// import Addevent from './Addevent';
// import Events from './Events';
import Ob from './Object'
import { NavLink } from 'react-router-dom';
import Theme from './custometheme'
import LocalMallIcon from '@mui/icons-material/LocalMall';

const NavlinkStyled = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '10vh',
    width:'50%',
    fontFamily: `'Poppins', sans-serif`,



    [theme.breakpoints.up('md')]: {
        paddingLeft: '10px',
        marginLeft: '0px',
        marginRight: '0px',
        height: '7vh',
        width:'100%',
        justifyContent: 'flex-start',
        fontSize: '17px',

      
    },


    alignItems: 'center',
    justifyContent:'center',
    paddingLeft: '0px',

    "&.active": {
        backgroundColor: 'rgba(240, 240, 240, 0.20)',

    },
}));


function Admindashboard() {



   
    const res = useMediaQuery("(max-width:899px)")
    return (

        <>
        <ThemeProvider theme={Theme}>
            <Box sx={Ob.container}>
                <Paper elevation={1} sx={Ob.themes}>
                    {!res ? <Typography variant='h5' sx={{
                        fontWeight: '550',
                        paddingLeft: '10px',
                        color: 'white',
                        marginTop: '20px',
                    }}>EVENT</Typography> : null}
                    <Box sx={Ob.navbar}>

                        {!res ? <NavlinkStyled to={'/admin/dashboard'}><DashboardIcon /> &nbsp;Dashboard</NavlinkStyled> : <NavlinkStyled to={'/admin/dashboard'} >  <DashboardIcon sx={Ob.icon}/></NavlinkStyled>}
                        {!res ? <NavlinkStyled to={'/admin/event'}>  <FormatListBulletedIcon />&nbsp;Event </NavlinkStyled> : <NavlinkStyled to={'/admin/event'} ><FormatListBulletedIcon  sx={Ob.icon} /></NavlinkStyled>}
                        {!res ? <NavlinkStyled to={'/admin/users'}><GroupIcon />&nbsp;Users</NavlinkStyled> : <NavlinkStyled to={'/admin/users'} ><GroupIcon  sx={Ob.icon} /></NavlinkStyled>}
                        {!res ? <NavlinkStyled to={'/admin/booked'}><LocalMallIcon />&nbsp;Booked</NavlinkStyled> : <NavlinkStyled to={'/admin/booked'} ><LocalMallIcon  sx={Ob.icon} /></NavlinkStyled>}
                        {!res ? <NavlinkStyled to={'/'} sx={{position:'absolute',bottom:'5px'}} > <LogoutIcon sx={{marginLeft:'10px'}} />&nbsp;Log out </NavlinkStyled> : <NavlinkStyled to={'/'}> <LogoutIcon sx={Ob.icon} /></NavlinkStyled>}

                    </Box>
                </Paper>
             </Box>


            </ThemeProvider>
        </>

    )
}

export default Admindashboard
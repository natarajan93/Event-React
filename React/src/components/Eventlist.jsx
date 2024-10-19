import { Badge, Box, Paper, ThemeProvider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Ob from './Object'
import Admindashboard from './Admindashboard'
import { Link } from 'react-router-dom'
import Theme from './custometheme'
import axios from 'axios'

const Eventlist = () => {
 const [eventCount,setEventCount]=useState(0)


    useEffect(() => {
        axios.get('https://event-management-system-whpz.onrender.com/event/images')
            .then((res) => {
                setEventCount(res.data.length)
                console.log(res.data)
                
            }
            )
    }, []);




    return (
        <>
<ThemeProvider theme={Theme}>
            <Box sx={Ob.mainAdmin}>
                <Box sx={{
                    width: {
                        xs: '0%',
                        md: '15%',
                        lg: '16%',
                    }
                }} >
                    <Admindashboard />
                </Box>
                <Box sx={Ob.dashboard}>

                    <Paper sx={Ob.appbar} elevation={1}>
                        <Typography variant='h5' sx={{
                            fontWeight: '550',
                            paddingLeft: '10px',
                        }}>Event</Typography>
                    </Paper>
                    <Box sx={Ob.layar}>
                        <Link to={'/admin/Addevent'} style={Ob.dashboardlink}>
                            <Paper sx={Ob.task} elevation={3}>
                                <img src="/addevent.png" alt="add" width={'140px'} />
                                <Typography variant='h5'> Add event</Typography>
                            </Paper>
                        </Link>
                        <Link to={'/admin/events'} style={Ob.dashboardlink}>
                            <Paper sx={Ob.task} elevation={10}>
                            <Badge badgeContent={eventCount} sx={{
                                        '& .MuiBadge-badge': {
                                            fontSize: '1.2rem',
                                            height: '30px',
                                            minWidth: '30px',
                                            borderRadius: '50%',
                                            backgroundColor: '#FF0000',
                                            fontWeight: '550',

                                        },
                                        position: 'absolute',
                                        left: '95px',
                                        top: '25px',
                                    }}
                                        color="primary"></Badge>
                                <img src="/events.png" alt="user" width={'140px'} />
                                <Typography variant='h5'> Event list</Typography>
                            </Paper>
                        </Link>

                    </Box>

                </Box>
            </Box>
            </ThemeProvider>
        </>
    )
}

export default Eventlist
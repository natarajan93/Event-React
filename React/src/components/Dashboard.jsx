import { Badge, Box, Paper, ThemeProvider, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Ob from './Object'
import Admindashboard from './Admindashboard'
import { Link } from 'react-router-dom'
import Theme from './custometheme'
import axios from 'axios'


const Dashboard = () => {

    const [usercount, setUserCount] = useState(0)
    const [bookcount, setBookCount] = useState(0)

    useEffect(() => {
        axios.get('https://event-management-system-whpz.onrender.com/user/getalldata', {
            'headers': {
                'Content-Type': 'application/json'
            }

        }).then((res) => {
            setUserCount(res.data.length)

        }
        )
    }, [])
    useEffect(() => {
        axios.get('https://event-management-system-whpz.onrender.com/booking/getall', {
            'headers': {
                'Content-Type': 'application/json'
            }

        }).then((res) => {
            setBookCount(res.data.length);
        }

        )


    }, [])
    const res = useMediaQuery("(max-width:899px)")
    console.log(res);
    
    return (
        <>
            <ThemeProvider theme={Theme}>
                <Box >

                    <Admindashboard />



                    <Box sx={Ob.dashboard}>

                        <Paper sx={Ob.appbar} elevation={1}>
                            <Typography variant='h5' sx={{
                                fontWeight: '550',
                                paddingLeft: '10px',
                            }}>Dashboard</Typography>
                        </Paper>
                        <Box sx={Ob.layar}>

                            <Link to={'/admin/event'} style={Ob.dashboardlink}>
                                <Paper sx={Ob.task} elevation={4}>

                                    <img src="/eventlist.png" alt="Img" width={'100px'} />
                                    <Typography variant='h5'> Event</Typography>
                                </Paper>
                            </Link>

                            <Link to={'/admin/users'}  style={res?Ob.dashboardlink:Ob.dashboardlink1}>
                                <Paper sx={Ob.task} elevation={4}>
                                    <Badge badgeContent={usercount} sx={{
                                        '& .MuiBadge-badge': {
                                            fontSize: '1.2rem',
                                            height: '30px',
                                            minWidth: '30px',
                                            borderRadius: '50%',
                                            backgroundColor: '#FF0000',
                                            fontWeight: '550',

                                        },
                                        position: 'absolute',
                                        left: '70px',
                                        top: '20px',
                                    }}
                                        color="primary"></Badge>
                                    <img src="/users.png" alt="user" width={'100px'} />
                                    <Typography variant='h5'> Users</Typography>
                                </Paper>
                            </Link>
                            <Link to={'/admin/booked'} style={Ob.dashboardlink}>
                                <Paper sx={Ob.task} elevation={4}>
                                    <Badge badgeContent={bookcount} sx={{
                                        '& .MuiBadge-badge': {
                                            fontSize: '1.2rem',
                                            height: '30px',
                                            minWidth: '30px',
                                            borderRadius: '50%',
                                            backgroundColor: '#FF0000',
                                            fontWeight: '550',

                                        },
                                        position: 'absolute',
                                        left: '80px',
                                        top: '20px',
                                    }}
                                        color="primary"></Badge>
                                    <img src="/booked.png" alt="user" width={'110px'} />
                                    <Typography variant='h5'>Booked</Typography>
                                </Paper>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>

        </>
    )
}

export default Dashboard
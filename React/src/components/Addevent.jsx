import { Backdrop, Box, Button, Paper, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Ob from './Object'
import axios from 'axios'
import Admindashboard from './Admindashboard'
import Theme from './custometheme'
import CircularProgress from '@mui/material/CircularProgress';


const a = {
    marginTop: '15px',
}

const Addevent = () => {

    const [success, setSuccess] = useState(true)
    const [file, setFile] = useState(null);

    const [eve, setEve] = useState({
        eventName: '',
        eventPrice: '',
        eventDescription: '',
    });
    const [open, setOpen] = useState(false)
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleInput = (e) => {
        setEve({ ...eve, [e.target.name]: e.target.value });
    };

    const addEvent = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('eventName', eve.eventName);
        formData.append('eventPrice', eve.eventPrice);
        formData.append('eventDescription', eve.eventDescription);
        setOpen(true)
        axios.post('https://event-management-system-whpz.onrender.com/event/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                console.log(res)
                setOpen(false)
                setSuccess(false)
                setTimeout(() => {
                    setSuccess(true)
                    setFile(null)
                    setEve({ eventName: '', eventPrice: '', eventDescription: '' })
                }, 2700)
            }
            )
            .catch((err) => console.error(err));
    };

    return (

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
                        <Typography variant='h5' sx={{ fontWeight: '550',paddingLeft:'10px' }}>
                            Add event
                        </Typography>
                    </Paper>


                    {success ?
                        <Paper sx={Ob.addeventpaper} elevation={10}>
                            <form onSubmit={addEvent} style={{ display: 'grid', marginTop: '20px', width: '80%', marginLeft: 'auto', marginRight: 'auto' }} >
                                <TextField
                                    label='Event Name'
                                    onChange={handleInput}
                                    name='eventName'
                                    fullWidth
                                    margin='normal'
                                    sx={{
                                        marginTop: {
                                            xs: '20px',
                                            sm: '20px',
                                            md: '50px',
                                            lg: '50px',
                                        },
                                    }}
                                    required
                                />
                                <TextField
                                    label='Event Price'
                                    onChange={handleInput}
                                    name='eventPrice'
                                    fullWidth
                                    margin='normal'
                                    required
                                    error={isNaN(eve.eventPrice)}
                                    helperText={isNaN(eve.eventPrice) ? 'Please enter a valid number' : ''}
                                />

                                <TextField
                                    label="Description"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    onChange={handleInput}
                                    name='eventDescription'
                                    fullWidth
                                    margin='normal'
                                    required
                                />
                                <TextField
                                    type='file'
                                    onChange={handleFileChange}
                                    name='imageData'
                                    fullWidth
                                    margin='normal'
                                    required
                                />
                                <Button
                                    variant='contained'
                                    sx={{
                                        marginTop: '15px',
                                        backgroundColor: '#008000',
                                        height: '6vh',
                                        fontSize: '15px'
                                    }}
                                    type="submit"
                                >
                                    Add Event
                                </Button>
                            </form>
                            <Backdrop
                                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                                open={open}

                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        </Paper> :
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '90vh',
                        }}>
                            <img src="/success.gif" alt="Success" width={'500px'} />
                        </Box>

                    }
                </Box>
            </Box>
        </ThemeProvider>
    );
};


export default Addevent
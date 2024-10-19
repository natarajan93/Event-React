import { Alert, Backdrop, Box, Button, CardMedia, Paper, ThemeProvider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Ob from './Object'
import Theme from './custometheme'
import axios from 'axios';
import { userob } from './UserLogin';
import CircularProgress from '@mui/material/CircularProgress';

const img = {
    width: {
        xs: '140px',
        sm: '300px',
        md: '450px',
        lg: '500px',
    },
}

const UserCard = ({ object }) => {

    const [selectedDate, setSelectedDate] = useState(null)
    const [open, setOpen] = useState(true);
    const [api, setApi] = useState(true);
    const [bookopen, setBookOpen] = useState(false)
    const [alert1, setAlert1] = useState(false)
    const [alert2, setAlert2] = useState(false)

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate.$d.toLocaleDateString());
        console.log(newDate.$d.toLocaleDateString());
    };
    const [book, setBook] = useState({
        bookingDate: '',
        eventId: '',
        userId: '',
    })
    const handleBooking = async (id) => {
        if (userob !== 0) {
            const updatedBook = {
                bookingDate: selectedDate,
                eventId: id,
                userId: userob,
            };

            await setBook(updatedBook);

            if (selectedDate !== null) {
                setBookOpen(true)
                axios.post('https://event-management-system-whpz.onrender.com/booking/savebooking', updatedBook)
                    .then((res) => {
                        console.log("Booking saved:", res);
                        if (api) {
                            setBookOpen(false)
                            setOpen(false);
                        }
                    })

                    .catch((error) => {
                        console.error("Error saving booking:", error);
                        setApi(false)
                        alert("Please Try Again Later")
                    });
            } else {
                setAlert2(true)
                setTimeout(() => {
                    setAlert2(false)
    
                }, 4000);

            }
        } else {
            setAlert1(true)
            setTimeout(() => {
                setAlert1(false)

            }, 4000);

        }
    };


    return (
        <>
            <ThemeProvider theme={Theme}>
                {alert1 && <Alert sx={Ob.alert} severity="info">Please Login.</Alert>}
                {alert2 && <Alert sx={Ob.alert1} severity="warning">Please select the event data.</Alert>}

                <Box>
                    <Paper sx={Ob.card} elevation={5}>
                        <CardMedia component="img" image={`data:image/jpeg;base64,${object.imageData}`} alt="IMG" sx={img} />
                        <Box>
                            <Box sx={Ob.cardicon}>
                                <FavoriteIcon sx={{ fontSize: { xs: '6px', sm: '8px', md: '22px', lg: '25px', } }} />
                            </Box>
                            <Typography variant='h5' sx={Ob.cardname}>{object.eventName}</Typography>
                            <Typography sx={Ob.carddes}>{object.eventDescription}</Typography>
                            <Typography variant='h5' sx={Ob.cardprice}><CurrencyRupeeIcon sx={Ob.cardpriceicon} />{object.eventPrice} <span style={Ob.cardoffer}> 25%off</span><del style={Ob.cardofferprice}> 5000</del> </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Button variant='contained' size="small" sx={Ob.cardbutton} onClick={() => handleBooking(object.id)}>{open ? 'BOOKING' : 'BOOKED'}</Button>
                                <Box>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker

                                            onChange={handleDateChange}
                                            sx={Ob.bookingdate}
                                            slotProps={{ textField: { size: 'small' } }}
                                        />
                                    </LocalizationProvider>
                                </Box>
                            </Box>
                        </Box>

                    </Paper>
                    <Backdrop
                        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                        open={bookopen}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Box>

            </ThemeProvider>
        </>
    )
}

export default UserCard
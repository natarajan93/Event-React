import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop, Box, Button, TablePagination, TextField, ThemeProvider, Typography } from '@mui/material';
import Ob from './Object';
import Admindashboard from './Admindashboard';
import Theme from './custometheme'



const Events = () => {


    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setrowsPerPage] = React.useState(4)
    const [values, setValues] = React.useState([]);
    const [del, setDel] = React.useState(false)
    const [showUpdate, setShowUpdate] = React.useState(true)
    const [updateValue, setUpdateValue] = React.useState({
        eventName: '',
        eventPrice: '',
        eventDescription: '',
    })
    const [updateid, setUpdateId] = React.useState({})
    const [file, setFile] = React.useState(null);
    const [success, setSuccess] = React.useState(true)
    const [open, setOpen] = React.useState(false)





    const handlePageChange = (event, newpage) => {
        setPage(newpage);
    }
    const handlePerPageChange = (event) => {
        setrowsPerPage(+event.target.value);
        setPage(0);
    }
    React.useEffect(() => {

        axios.get('https://event-management-system-whpz.onrender.com/event/images')
            .then((res) => {
                console.log(res.data)
                setValues(res.data)
            }
            )
    }, [del]);



    const handleDelete = (id) => {
        setOpen(!open)
        axios.delete(`https://event-management-system-whpz.onrender.com/event/delete/${id}`)
            .then((res) => {
                console.log(res)
                setOpen(!open)
                setDel((del) => !del)

            })

    }



    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const handleUpdate = (row) => {
        console.log(row);
        setUpdateId(row)
        setShowUpdate((showUpdate) => !showUpdate)


    }

    const handleInput = (e) => {
        setUpdateValue({ ...updateValue, [e.target.name]: e.target.value })
    }


    const updateData = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('eventName', updateValue.eventName);
        formData.append('eventPrice', updateValue.eventPrice);
        formData.append('eventDescription', updateValue.eventDescription);
        setOpen(!open)
        axios.put(`https://event-management-system-whpz.onrender.com/event/updata/${updateid.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((res) => {
            console.log(res)
            setOpen(!open)
            setSuccess(false)
            setTimeout(() => {
                // setSuccess(true)
                setShowUpdate(true)
                setFile(null)
                setDel((del) => !del)
                setUpdateValue({ eventName: '', eventPrice: '', eventDescription: '' })
            }, 2600)
        }
        )
            .catch((err) => console.error(err));

    }






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
                        <Typography variant='h5' sx={{
                            fontWeight: '550',
                            paddingLeft: '10px',
                        }}>Event list</Typography>
                    </Paper>
                    {values.length === 0 ? <Box sx={{
                        width: '100%',
                        height: '80vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}> <CircularProgress sx={{
                        color: '#0a2558',
                    }} />
                    </Box>
                        :
                        showUpdate ?

                            // F0F0F0
                            <TableContainer component={Paper} sx={{ marginTop: '1px', borderRadius: '0px' }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: '#F0F0F0' }}>
                                            <TableCell sx={Ob.head} align='center'>Id</TableCell>
                                            <TableCell sx={Ob.head} align="center">Image</TableCell>
                                            <TableCell sx={Ob.head} align="center">EventName</TableCell>
                                            <TableCell sx={Ob.head} align="center">Price</TableCell>
                                            <TableCell sx={Ob.head} align="center">Action</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {values && values
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" align='center'>
                                                        {row.id}
                                                    </TableCell>
                                                    <TableCell align="center"><img src={`data:image/jpeg;base64,${row.imageData}`} alt="IMG" width={'100px'} /></TableCell>
                                                    <TableCell align="center">{row.eventName}</TableCell>
                                                    <TableCell align="center">{row.eventPrice}</TableCell>
                                                    <TableCell align="center"> <Button onClick={() => handleUpdate(row)} sx={{ textTransform: 'none',fontSize:{xs:'9px',sm:'10px',md:'11px',lg:'12px'} }} variant='contained' size='small' color='primary'>  Update</Button>   <Button sx={{ textTransform: 'none',marginTop:{xs:'3px',sm:'4px',md:'0px',lg:'0px'},fontSize:{xs:'9px',sm:'10px',md:'11px',lg:'12px'} }} variant='contained' size='small' color='error' onClick={() => handleDelete(row.id)}>Delete</Button> </TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                                <TablePagination
                                    rowsPerPageOptions={[4, 8, 10]}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    count={values.length}
                                    component="div"
                                    onPageChange={handlePageChange}
                                    onRowsPerPageChange={handlePerPageChange}
                                />
                            </TableContainer>
                            :

                            success ?
                                <Paper sx={Ob.addeventpaper} elevation={10}>
                                    <form onSubmit={updateData} style={{ display: 'grid', marginTop: '30px', width: '80%', marginLeft: 'auto', marginRight: 'auto' }} >
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

                                            error={isNaN(updateValue.eventPrice)}
                                            helperText={isNaN(updateValue.eventPrice) ? 'Please enter a valid number' : ''}
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
                                            Update
                                        </Button>

                                    </form>
                                    <Backdrop
                                        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                                        open={open}

                                    >
                                        <CircularProgress color="inherit" />
                                    </Backdrop>
                                </Paper>
                                :
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
                </Box >
            </Box>
        </ThemeProvider>
    );
}
export default Events;
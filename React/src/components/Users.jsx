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
import { Box, TablePagination, ThemeProvider, Typography } from '@mui/material';
import Ob from './Object.js';
import Admindashboard from './Admindashboard.jsx';
import Theme from './custometheme.jsx';



export default function Users() {

    const [values, setValues] = React.useState([])
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setrowsPerPage] = React.useState(5)


    const handlePageChange = (event, newpage) => {
        setPage(newpage);
    }
    const handlePerPageChange = (event) => {
        setrowsPerPage(+event.target.value);
        setPage(0);
    }



    React.useEffect(() => {
        axios.get('https://event-management-system-whpz.onrender.com/user/getalldata', {
            'headers': {
                'Content-Type': 'application/json'
            }

        }).then((res) => {setValues(res.data)
       
        }
        )


    }, [])



    return (
        <ThemeProvider theme={Theme}>
            <Box sx={Ob.mainAdmin}>
                <Box sx={{
                    width: {
                        xs: '0%',
                        sm: '0%',
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
                        }}>Users</Typography>
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

                        <TableContainer component={Paper} sx={{ marginTop: '1px', borderRadius: '0px' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#F0F0F0' }}>
                                        <TableCell sx={Ob.head} align='center'>Id</TableCell>
                                        <TableCell sx={Ob.head} align="center">Name</TableCell>
                                        <TableCell sx={Ob.head} align="center">Gender</TableCell>
                                        <TableCell sx={Ob.head} align="center">MobileNumber</TableCell>
                                        <TableCell sx={Ob.head} align="center">Email</TableCell>
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
                                                <TableCell align="center">{row.userName}</TableCell>
                                                <TableCell align="center">{row.gender}</TableCell>
                                                <TableCell align="center">{row.mobileNumber}</TableCell>
                                                <TableCell align="center">{row.email}</TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                            <TablePagination
                                rowsPerPageOptions={[5, 6,7]}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                count={values.length}
                                component="div"
                                onPageChange={handlePageChange}
                                onRowsPerPageChange={handlePerPageChange}
                            />
                        </TableContainer>

                    }
                </Box >
            </Box>
        </ThemeProvider>
    );
}
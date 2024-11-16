import React, { useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, TablePagination } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function VisitorTable() {
    const classes = useStyles();
    const [visitors, setVisitors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [error, setError] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [noOfVisitors, setNoOfVisitors] = useState(null);

    const fetchVisitors = async () => {
        try {
            setLoading(true);
            const response = await axios.post('https://live.framework-futuristic.com/api/v1/get-visitors', {
                dateFrom,
                dateTo
            });
            setVisitors(response.data.visitors);
            setNoOfVisitors(response.data.noOfVisitors);
            setError('');
        } catch (error) {
            console.error('Error fetching visitors:', error);
            if (error.response) {
                setError(error.response.data.message || 'Unknown error');
            } else {
                setError(error.message || 'Unknown error');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDateFromChange = (e) => {
        setDateFrom(e.target.value);
    };

    const handleDateToChange = (e) => {
        setDateTo(e.target.value);
    };

    const handleSearchClick = () => {
        if (dateFrom && dateTo) {
            fetchVisitors();
        } else {
            setError('Please select both From and To dates.');
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, visitors.length - page * rowsPerPage);

    const exportToCsv = () => {
        const csvRows = [
            ['ID', 'IP Address', 'User Agent', 'Visited Link', 'Visited At', 'Visited Time']
        ];

        visitors.forEach(visitor => {
            csvRows.push([
                visitor.id,
                visitor.ip_address,
                visitor.user_agent,
                visitor.visited_link,
                visitor.visited_at,
                visitor.visited_time
            ]);
        });

        const csvData = csvRows.map(row => row.join(',')).join('\n');
        const blob = new Blob([csvData], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'visitors.csv';
        link.click();
    };

    return (
        <div>
            <h2 className='text-xl underline text-cyan-500'  style={{ color:"#164E63" , fontWeight: 'bold' , fontSize: '34px' , textAlign: 'center' }}  >Visitors Table</h2>
            <div className="flex items-center my-4 space-x-4">
                <TextField
                    id="dateFrom"
                    label="From"
                    type="date"
                    value={dateFrom}
                    onChange={handleDateFromChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="dateTo"
                    label="To"
                    type="date"
                    value={dateTo}
                    onChange={handleDateToChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained" onClick={handleSearchClick} className="text-lg font-extrabold bg-blue-500 "  style={{ backgroundColor: '#164E63' }}> Search</Button>
                <Button variant="contained" onClick={exportToCsv} className="text-lg font-extrabold bg-green-500" style={{ backgroundColor: '#164E63' }}>Export to CSV</Button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                 {/* <p>No. of Visitors: {noOfVisitors}</p> */}
                   
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small">
                            <TableHead className="bg-green-300">
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>IP Address</TableCell>
                                    <TableCell>User Agent</TableCell>
                                    <TableCell>Visited Link</TableCell>
                                    <TableCell>Visited At</TableCell>
                                    <TableCell>Visited Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? visitors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : visitors
                                ).map(visitor => (
                                    <TableRow key={visitor.id}>
                                        <TableCell>{visitor.id}</TableCell>
                                        <TableCell>{visitor.ip_address}</TableCell>
                                        <TableCell>{visitor.user_agent}</TableCell>
                                        <TableCell>{visitor.visited_link}</TableCell>
                                        <TableCell>{visitor.visited_at}</TableCell>
                                        <TableCell>{visitor.visited_time}</TableCell>
                                    </TableRow>
                                ))}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 33 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[25, 50, 100]}
                        component="div"
                        count={visitors.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>
            )}
        </div>
    );
}

export default VisitorTable;

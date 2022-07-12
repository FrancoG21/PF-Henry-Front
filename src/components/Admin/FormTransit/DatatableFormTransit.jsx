import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DatatableFormTransit() {
    const rows = [
        {
            "userId": 'Franco',
            "pet": "coca",
            "image": "https://i.postimg.cc/1tKP9NkV/tristan.jpg",
            "donation": 2000,
            "state": "aproved",
        },
        {
            "userId": 'Lucas',
            "pet": "pirata",
            "image": "https://i.postimg.cc/xTNzPCXW/Mesa-de-trabajo-13-6.png",
            "donation": 1000,
            "state": "pending",
        },
    ];
    return (
        <TableContainer component={Paper} className='table' >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell className="tableCell" >User</TableCell>
                        <TableCell className="tableCell">Pet</TableCell>
                        <TableCell className="tableCell">Donation</TableCell>
                        <TableCell className="tableCell">State</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.userId}>
                            <TableCell className="tableCell">{row.userId}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.image} alt="" className="image" />
                                    {row.pet}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.donation}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`state${row.state}`}>{row.state}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

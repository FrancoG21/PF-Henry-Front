import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AdminDonation() {

    return (
        <TableContainer component={Paper}  className='table' >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                
                <TableCell className="tableCell" >User</TableCell>
                <TableCell className="tableCell">Donation</TableCell>
                <TableCell className="tableCell">State</TableCell>
                {/* statdo si es donador o usuario */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.userId}>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                        <img src={row.image} alt="" className="image" />
                        {row.user}
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
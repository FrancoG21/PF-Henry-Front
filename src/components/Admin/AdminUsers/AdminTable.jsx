import React, {useEffect, useState} from 'react'
import './estilos.css'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom'

const AdminTable = () => {

const [user, setUser] = useState(null)


useEffect(() => {
  axios.get('/user/all').then((r)=>{setUser(r.data)})
}, [])

                  
      return (
        <TableContainer component={Paper}  className='table' >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Id</TableCell>
                <TableCell className="tableCell" >User</TableCell>
                <TableCell className="tableCell">Apellido</TableCell>
                <TableCell className="tableCell">Pet</TableCell>
                <TableCell className="tableCell">Email</TableCell>
                <TableCell className="tableCell">Donacion</TableCell>
                <TableCell className="tableCell">Estado</TableCell>
                <TableCell className="tableCell">Peticoines</TableCell>
                <TableCell className="tableCell">Baneos</TableCell>
                <TableCell className="tableCell">Admin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user && user.map((e) => (
                <TableRow key={e.id}>
                  
                  <TableCell className="tableCell">{e.id}</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWarpper">
                    <img src={e.picture} alt="" className="image" />
                    {e.name}
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">{e.lastname}</TableCell>
                  <TableCell className="tableCell">{e.Pets.map((pet)=>pet.name)}</TableCell>
                  <TableCell className="tableCell">{e.email}</TableCell>
                  <TableCell className="tableCell">{e.id}</TableCell>
                  <TableCell className="tableCell">{e.id}</TableCell>
                  <TableCell className="tableCell">{e.PetitionGets.id}
                    <Link to={'/admin/petitionuser/' + e.id}> Ver </Link> 
                    </TableCell>
                    <TableCell className="tableCell">
                    <button> Banear </button>
                    </TableCell>
                    <TableCell className="tableCell">
                    <button> Admin </button>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default AdminTable
import React, {useEffect, useReducer, useState} from 'react'
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
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";
import BasicRating from './Rating';

const AdminTable = () => {

const [user, setUser] = useState(null)

const token = useSelector(state=>state.usuario)

useEffect(() => {
  axios.get('/user/all').then((r)=>{setUser(r.data)})
}, [])

const [ignore, forceUpdate] = useReducer(x=>x+1,0)

 function refresh() {
  forceUpdate()
  
 }
 
 useEffect(()=>{
  axios.get('/user/all').then((r)=>{setUser(r.data)})
   console.log(ignore)
 },[ignore])

 function addAdmin(id){
  axios.put('/admin/addRemove',{token, id}).then(res=>{
 
    Swal.fire
    ({
          position: 'center',
          icon: 'success',
          title: res.data.message?res.data.message:res.data,
          showConfirmButton: true,
          timer: 1500
        }).then(()=>{refresh()})} ,res=>Swal.fire
    ({
            icon: 'error',
            title: 'Error',
            text: res.response.data.error,
            showConfirmButton: false,
            timer: 1000
        }).then(()=>{refresh()})
      ) 
 }


 

                  
      return (
        <TableContainer component={Paper}  className='table' >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Id</TableCell>
                <TableCell className="tableCell" >Usuario</TableCell>
                <TableCell className="tableCell">Apellido</TableCell>
                <TableCell className="tableCell">Pet</TableCell>
                <TableCell className="tableCell">Puntuación</TableCell>
                <TableCell className="tableCell">Email</TableCell>
                <TableCell className="tableCell">Peticoines</TableCell>
                <TableCell className="tableCell">Dar admin</TableCell>
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
                  <TableCell className="tableCell">{e.Pets.map((pet)=>{return `  ${pet.name}`})}</TableCell>
                  <TableCell className="tableCell"><BasicRating rating={e.rating} id={e.id} /></TableCell>
                  <TableCell className="tableCell">{e.email}</TableCell>
                  <TableCell className="tableCell">
                  <Button  size="small" variant="outlined" onClick={()=>{navigate('/admin/petitionuser/' + e.id)}}>{`Ver ${e.PetitionGets.length + e.PetitionGetLosts.length + e.PetitionLoads.length}`}</Button> 
                  </TableCell>
                  <TableCell className="tableCell">
                  <Button size="small" variant="outlined" color="secondary" onClick={()=>{addAdmin(e.id)}}> {e.rol} </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default AdminTable
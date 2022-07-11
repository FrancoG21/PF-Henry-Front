import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getPets, deletePet } from '../../../redux/actions/index';
import Paginate from '../../Users/Paginate/Paginate';
import { ButtonDelete, ButtonEdit, DivButtons } from "./StyledDataTablePets";

export default function DatatablePets({ id }) {

    const dispatch = useDispatch()
    const pets = useSelector((state) => state.pets)
    const petsAmount = useSelector((state) => state.petsAmount);
    const [page, setPage] = useState(0);


    useEffect(() => {
        dispatch(getPets(page))
    }, [dispatch])

    const paginateFunction = (pagee) => {
        pagee -= 1
        setPage(pagee)
        dispatch(getPets(pagee));
    };

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deletePet(id))
    }

    return (
        <div>
            <TableContainer component={Paper} className='table' >
                <Table sx={{ minWidth: 750 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell" >ID</TableCell>
                            <TableCell className="tableCell">Nombre</TableCell>
                            <TableCell className="tableCell">Mascota</TableCell>
                            <TableCell className="tableCell">Raza</TableCell>
                            <TableCell className="tableCell">Genero</TableCell>
                            <TableCell className="tableCell">Tamaño</TableCell>
                            <TableCell className="tableCell">Peso</TableCell>
                            <TableCell className="tableCell">Pelaje</TableCell>
                            <TableCell className="tableCell">Castrado/a</TableCell>
                            <TableCell className="tableCell">Vacunado/a</TableCell>
                            <TableCell className="tableCell">Estado</TableCell>
                            <TableCell className="tableCell">Acción</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pets?.map((p) => (
                            <TableRow key={p.id}>
                                <TableCell className="tableCell">{p.id}</TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img src={p.image} alt="" className="image" />
                                        {p.name}
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">{p.pet}</TableCell>
                                <TableCell className="tableCell">{p.breed}</TableCell>
                                <TableCell className="tableCell">{p.gender}</TableCell>
                                <TableCell className="tableCell">{p.size}</TableCell>
                                <TableCell className="tableCell">{p.weight ? p.weight : "Desconocido"}</TableCell>
                                <TableCell className="tableCell">{p.fur}</TableCell>
                                <TableCell className="tableCell">{p.castration}</TableCell>
                                <TableCell className="tableCell">{p.vaccinate}</TableCell>
                                <TableCell className="tableCell">
                                    <span>{p.state}</span>
                                </TableCell>
                                <TableCell>
                                    <DivButtons>
                                        <ButtonEdit to={`/admin/profilepets/${p.id}`}>Editar</ButtonEdit>
                                        <ButtonDelete onClick={() => handleDelete(e)}>
                                            Eliminar
                                        </ButtonDelete>
                                    </DivButtons>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <Paginate
                    total={petsAmount}
                    petsPerPage={10}
                    paginateFunction={paginateFunction}
                />
            </div>

        </div>
    )
}





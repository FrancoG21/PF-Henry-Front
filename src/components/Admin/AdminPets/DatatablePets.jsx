import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { getPets, } from '../../../redux/actions/index';
import axios from 'axios';
import Paginate from '../../Users/Paginate/Paginate';
import { ButtonDelete, ButtonEdit, DivButtons, TablaOscura, TextTable } from "./StyledDataTablePets";
import {getFur,getGender,getPet,getSize,getCastration,getVaccinate,getState} from "./toSpanish.js";

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

    // const handleDelete = () => {
    //     axios.put(`/pet/${id}`).then((r) => console.log(r.data))
    //     console.log(id)
    // }

    return (
        <div>
            <TableContainer component={Paper} className='table' >
                <TablaOscura sx={{ minWidth: 750 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell" ><TextTable>ID</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Nombre</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Mascota</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Raza</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Genero</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Tamaño</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Peso</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Pelaje</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Castrado/a</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Vacunado/a</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Binary</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Estado</TextTable></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pets?.map((p) => (
                            <TableRow key={p.id}>
                                <TableCell className="tableCell"><TextTable>{p.id}</TextTable></TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img src={p.image} alt="" className="image" />
                                        <TextTable>{p.name}</TextTable>
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell"><TextTable>{getPet(p.pet)}</TextTable></TableCell>
                                <TableCell className="tableCell"><TextTable>{p.breed}</TextTable></TableCell>
                                <TableCell className="tableCell"><TextTable>{getGender(p.gender)}</TextTable></TableCell>
                                <TableCell className="tableCell"><TextTable>{getSize(p.size)}</TextTable></TableCell>
                                <TableCell className="tableCell"><TextTable>{p.weight ? p.weight : "desconocido"}</TextTable></TableCell>
                                <TableCell className="tableCell"><TextTable>{getFur(p.fur)}</TextTable></TableCell>
                                <TableCell className="tableCell"><TextTable>{getCastration(p.castration)}</TextTable></TableCell>
                                <TableCell className="tableCell"><TextTable>{getVaccinate(p.vaccinate)}</TextTable></TableCell>
                                <TableCell className="tableCell"><TextTable>{getState(p.state)}</TextTable></TableCell>
                                <TableCell>
                                    <DivButtons>
                                        <ButtonEdit to={`/admin/profilepets/${p.id}`}>Editar</ButtonEdit>
                                        <ButtonDelete onClick={() => axios.put(`/pet/${p.id}`).then((r) => console.log(r.data))}>
                                            Eliminar
                                        </ButtonDelete>
                                    </DivButtons>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TablaOscura>
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





// import React, {useEffect} from "react";
// import { DataGrid } from '@mui/x-data-grid';
// import { useSelector, useDispatch } from 'react-redux';
// import {getPets} from '../../../redux/actions/index';
// import { ButtonDelete, ButtonEdit, DivButtons } from "./StyledDataTablePets";

// export default function DatatablePets() {

//     const dispatch = useDispatch()
//     const pets = useSelector((state) => state.pets)

//     useEffect(() => {
//         dispatch(getPets())
//     },[])


//     const columns = [
//         { field: 'id', headerName: 'ID', width: 70 },
//         { field: 'Mascota', headerName: 'Mascota', width: 130 },
//         { field: 'Raza', headerName: 'Raza', width: 130 },
//         {
//             field: 'age',
//             headerName: 'Age',
//             type: 'number',
//             width: 90,
//         },
//         {
//             field: 'fullName',
//             headerName: 'Full name',
//             description: 'This column has a value getter and is not sortable.',
//             sortable: false,
//             width: 160,
//             valueGetter: (params) =>
//                 `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//         },
//     ];

//     const rows = [
//         { id: 1, Raza: 'Snow', Mascota: 'Jon', age: 35 },
//         { id: 2, Raza: 'Lannister', Mascota: 'Cersei', age: 42 },
//         { id: 3, Raza: 'Lannister', Mascota: 'Jaime', age: 45 },
//         { id: 4, Raza: 'Stark', Mascota: 'Arya', age: 16 },
//         { id: 5, Raza: 'Targaryen', Mascota: 'Daenerys', age: null },
//         { id: 6, Raza: 'Melisandre', Mascota: null, age: 150 },
//         { id: 7, Raza: 'Clifford', Mascota: 'Ferrara', age: 44 },
//         { id: 8, Raza: 'Frances', Mascota: 'Rossini', age: 36 },
//         { id: 9, Raza: 'Roxie', Mascota: 'Harvey', age: 65 },
//     ];

//     return (
//             <div style={{ height: 600, width: '100%' }}>
//                 <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     pageSize={10}
//                     rowsPerPageOptions={[5]}
//                     checkboxSelection
//                 />
//             </div>
//     )
// }



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
import { getPets } from '../../../redux/actions/index';
import Paginate from '../../Users/Paginate/Paginate';
import { ButtonDelete, ButtonEdit, DivButtons } from "./StyledDataTablePets";

export default function DatatablePets({id}) {

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
                            <TableCell className="tableCell"></TableCell>
                            <TableCell className="tableCell">Tamaño</TableCell>
                            <TableCell className="tableCell">Peso</TableCell>
                            <TableCell className="tableCell">Pelaje</TableCell>
                            <TableCell className="tableCell">Castrado/a</TableCell>
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
                                <TableCell className="tableCell">{p.weight}</TableCell>
                                <TableCell className="tableCell">{p.size}</TableCell>
                                <TableCell className="tableCell">{p.fur}</TableCell>
                                <TableCell className="tableCell">{p.castration}</TableCell>
                                <TableCell className="tableCell">{p.vaccinate}</TableCell>
                                <TableCell className="tableCell">
                                    <span>{p.state}</span>
                                </TableCell>
                                <TableCell>
                                    <DivButtons>
                                        <ButtonEdit to={`/admin/profilepets/${p.id}`}>Editar</ButtonEdit>
                                        <ButtonDelete>Eliminar</ButtonDelete>
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





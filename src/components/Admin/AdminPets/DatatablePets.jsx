import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { ButtonDelete, ButtonEdit, DivButtons } from "./StyledDataTablePets";

export default function DatatablePets() {

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            rederCell: () => {
                return (
                    <DivButtons>
                        <ButtonEdit>Editar</ButtonEdit>
                        <ButtonDelete>Borrar</ButtonDelete>
                    </DivButtons>
                )
            } 
        }
    ]

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Mascota', headerName: 'Mascota', width: 130 },
        { field: 'Raza', headerName: 'Raza', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, Raza: 'Snow', Mascota: 'Jon', age: 35 },
        { id: 2, Raza: 'Lannister', Mascota: 'Cersei', age: 42 },
        { id: 3, Raza: 'Lannister', Mascota: 'Jaime', age: 45 },
        { id: 4, Raza: 'Stark', Mascota: 'Arya', age: 16 },
        { id: 5, Raza: 'Targaryen', Mascota: 'Daenerys', age: null },
        { id: 6, Raza: 'Melisandre', Mascota: null, age: 150 },
        { id: 7, Raza: 'Clifford', Mascota: 'Ferrara', age: 44 },
        { id: 8, Raza: 'Frances', Mascota: 'Rossini', age: 36 },
        { id: 9, Raza: 'Roxie', Mascota: 'Harvey', age: 65 },
    ];

    return (
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
    )
}

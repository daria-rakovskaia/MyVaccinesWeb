import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Button } from '@mui/material';
import "./PatientsTypes.scss";
import DeleteIcon from '@mui/icons-material/Delete';
import config from '../../config.json';

function DataGridPatientsTypes() {

    const [patietsTypes, setPatientsTypes] = useState([]);
    const [currRow, setCurrRow] = useState(null);

    useEffect(() => {
        getPatientsTypes();
    }, []);

    useEffect(() => {
        setCurrRow(currRow);
    }, [currRow]);

    const getPatientsTypes = async () => {
        await axios.get(config.patientsTypesUrl).then(data => {
            setPatientsTypes(data.data);
        })
    }

    const getCurrRow = (grid) => {
        setCurrRow(grid.row);
    };

    // const deleteCountry = async () => {
    //     if (currRow !== null) {
    //         await axios.delete(`${config.countriesUrl}/${currRow.id}`);
    //         getCountries();
    //         setCurrRow(null);
    //     }
    // };

    const columns = [
        { field: "id", headerName: "ID", width: 90, align: 'center', headerAlign: 'center', },
        { field: "type", headerName: "Type", width: 150, align: 'center', headerAlign: 'center', }
    ];

    const rows = patietsTypes.map((row) => ({
        id: row.id,
        type: row.name
    }))

    return (
        <div className='MainContainer'>
            <div className='ContainerHeader'>
                <h1 style={{ fontWeight: '400' }}>PatientsTypes</h1>
            </div>
            <div className='CountriesDataGrid'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    sx={{
                        '.MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 'bold !important',
                            overflow: 'visible !important'
                        }
                    }}
                    // onRowClick={getCurrRow}
                />
            </div>
            <div className='ButtonsContainer'>
                <Button
                    variant="contained"
                    size="large"
                >
                    Edit
                </Button>
                &nbsp;
                <Button
                    variant="contained"
                    color="error"
                    size="large"
                    startIcon={<DeleteIcon />}
                    // onClick={deleteCountry}
                >
                    Delete
                </Button>
            </div>
            <div className='BackButton'>
                <Button
                    variant="outlined"
                    size="small">
                    Назад
                </Button>
            </div>
            <div className='AddContainer'>
                <Button
                    variant="contained"
                    color="success"
                    size="large"
                >
                    Add
                </Button>
            </div>
        </div>
    )
}

export default DataGridPatientsTypes;
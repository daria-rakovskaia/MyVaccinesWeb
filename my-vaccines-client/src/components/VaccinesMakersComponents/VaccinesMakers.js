import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Button } from '@mui/material';
import "./VaccinesMakers.scss";
import DeleteIcon from '@mui/icons-material/Delete';
import config from '../../config.json';

function VaccinesMakers() {

    const [vaccinesMakers, setVaccinesMakers] = useState([]);
    const [currRow, setCurrRow] = useState(null);

    useEffect(() => {
        getVaccinesMakers();
    }, []);

    useEffect(() => {
        setCurrRow(currRow);
    }, [currRow]);

    const getVaccinesMakers = async () => {
        await axios.get(config.vaccinesMakersUrl).then(data => {
            setVaccinesMakers(data.data);
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
        { field: "name", headerName: "Name", width: 400, align: 'center', headerAlign: 'center', },
        { field: "country", headerName: "Country", width: 150, align: 'center', headerAlign: 'center', }
    ];

    const rows = vaccinesMakers.map((row) => ({
        id: row.id,
        name: row.name,
        country: row.country.name
    }))

    return (
        <div className='MainContainer'>
            <div className='ContainerHeader'>
                <h1 style={{ fontWeight: '400' }}>VaccinesMakers</h1>
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

export default VaccinesMakers;
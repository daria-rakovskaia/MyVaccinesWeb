import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Button } from '@mui/material';
import "./Vaccines.scss";
import DeleteIcon from '@mui/icons-material/Delete';
import config from '../../config.json';

function Vaccines() {

    const [vaccines, setVaccines] = useState([]);
    const [currRow, setCurrRow] = useState(null);

    useEffect(() => {
        getVaccines();
    }, []);

    useEffect(() => {
        setCurrRow(currRow);
    }, [currRow]);

    const getVaccines = async () => {
        await axios.get(config.vaccinesUrl).then(data => {
            setVaccines(data.data);
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
        { field: "maker", headerName: "Maker", width: 400, align: 'center', headerAlign: 'center', },
        { field: "type", headerName: "Type", width: 200, align: 'center', headerAlign: 'center', }
    ];

    const rows = vaccines.map((row) => ({
        id: row.id,
        name: row.name,
        maker: row.maker.name,
        type: row.type.name
    }))

    return (
        <div className='MainContainer'>
            <div className='ContainerHeader'>
                <h1 style={{ fontWeight: '400' }}>Vaccines</h1>
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

export default Vaccines;
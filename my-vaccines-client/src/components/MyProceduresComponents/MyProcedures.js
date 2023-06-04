import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import config from '../../config.json';
import "./MyProcedures.scss";
import exl_ from "./exl_.png";
import question from "./question.png"

function MyProcedures() {

    const [procedures, setProcedures] = useState([]);

    useEffect(() => {
        getProcedures();
    }, []);

    const getProcedures = async () => {
        await axios.get(config.proceduresUrl).then(data => {
            setProcedures(data.data);
        })
    }

    const columns = [
        { field: "id", headerName: "id", width: 0 },
        { field: "surname", headerName: "Фамилия", width: 150, align: 'center', headerAlign: 'center', },
        { field: "name", headerName: "Имя", width: 90, align: 'center', headerAlign: 'center', },
        { field: "patronymic", headerName: "Отчество", width: 150, align: 'center', headerAlign: 'center', },
        { field: "patientType", headerName: "Тип пациента", width: 150, align: 'center', headerAlign: 'center', },
        { field: "vaccine", headerName: "Вакцина", width: 300, align: 'center', headerAlign: 'center', },
        { field: "illness", headerName: "Заболевание", width: 150, align: 'center', headerAlign: 'center', },
        { field: "date", headerName: "Дата", width: 150, align: 'center', headerAlign: 'center', }
    ];

    const rows = procedures.map((row) => ({
        id: row.id,
        surname: row.patient.surname,
        name: row.patient.name,
        patronymic: row.patient.patronymic,
        patientType: row.patient.type.name,
        vaccine: row.vaccine.name,
        illness: row.vaccine.type.name,
        date: row.date.substring(0, 10)
    }))

    return (
        <div className="MainContainer">
            <div className="FiltersContainer" style={{ float: "left" }}>
                <div className="ButtonContainer" style={{ marginLeft: "50px" }}>
                    <Button
                        variant="outlined"
                        size="large">
                        Фильтровать
                    </Button>
                </div>
                <div className="PatientTypesFilter">
                    <FormControl sx={{ marginLeft: 10, minWidth: 250 }}>
                        <InputLabel>Тип пациента</InputLabel>
                        <Select></Select>
                    </FormControl>
                </div>
                <div className="IllnessFilter">
                    <FormControl sx={{ marginLeft: 5, minWidth: 250 }}>
                        <InputLabel>Заболевание</InputLabel>
                        <Select></Select>
                    </FormControl>
                </div>
                <div className="PictureButtonsContainer" style={{ marginTop: "15px" }}>
                        <button className="ExlButton">
                            <img src={exl_}
                                width={50} />
                        </button>
                        <button className="QuestionButton">
                            <img src={question}
                                width={50} />
                        </button>
                    </div>
            </div>
            <div className="DataGridContainer">
                <div className="ProceduresDataGrid">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        sx={{
                            '.MuiDataGrid-columnHeaderTitle': {
                                fontWeight: 'bold !important',
                                overflow: 'visible !important'
                            }
                        }}
                        initialState={{
                            columns: {
                                columnVisibilityModel: {
                                    id: false
                                },
                            },
                        }}>
                    </DataGrid>
                </div>
            </div>
            <div className="ButtonsContainer" style={{ marginTop: "15px", float: "left", marginLeft: "40px" }}>
                <div className="crudButtonsContainer" style={{ float: "left" }}>
                    <Button
                        variant="contained"
                        color="success"
                        size="large">
                        Add
                    </Button>
                    &nbsp;
                    <Button
                        variant="contained"
                        color="error"
                        size="large"
                        startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    &nbsp;
                    <Button
                        variant="contained"
                        size="large">
                        Edit
                    </Button>
                    <div className="DoneProcButtonContainer" style={{ marginTop: "15px" }}>
                        <Button
                            variant="outlined"
                            size="large">
                            Сделанные процедуры
                        </Button>
                    </div>
                </div>
            </div>
            <div style={{ float: "right", marginRight: "40px" }}>
                <div style={{ marginTop: "15px" }}>
                    <Button
                        variant="outlined"
                        color="success"
                        size="large">
                        Процедура сделана
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MyProcedures;
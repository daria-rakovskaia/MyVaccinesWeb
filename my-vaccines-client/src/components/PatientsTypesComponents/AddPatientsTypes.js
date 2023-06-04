import React from "react";
import { Button, TextField } from '@mui/material';
import "./AddPatientType.scss"

function AddPatientType() {

    return (
        <div className="MainContainer">
            <div className="HeaderContainer">
                <h1 style={{ fontWeight: "400" }}>PatientsTypes</h1>
            </div>
            <div className="EnterFieldsContainer" >
                <t>Тип пациента</t>
                &nbsp;
                &nbsp;
                &nbsp;
                <TextField label="Введите тип пациента" variant="outlined" />
            </div>
            <div className="SubmitButton">
                <Button
                    variant="contained"
                    color="success"
                    size="large"
                >
                    Подтвердить
                </Button>
            </div>
            <div className="backButton">
                <Button
                    variant="outlined"
                    size="small">
                    Назад
                </Button>
            </div>
        </div>
    )

}

export default AddPatientType
import React from "react";
import { Button, Input } from '@mui/material';
import "./AddPatientType.scss"

function EditPatientType() {

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
                <Input defaultValue="Я" />
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

export default EditPatientType
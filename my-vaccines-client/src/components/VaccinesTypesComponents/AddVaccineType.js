import React from "react";
import { Button, Input } from '@mui/material';
import "./EditVaccineType.scss"

function AddVaccineType() {

    return (
        <div className="MainContainer">
            <div className="HeaderContainer">
                <h1 style={{ fontWeight: "400" }}>VaccinesTypes</h1>
            </div>
            <div className="EnterFieldsContainer" >
                <t>Тип вакцины</t>
                &nbsp;
                &nbsp;
                &nbsp;
                <Input sx={{ minWidth: "250px" }} />
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

export default AddVaccineType
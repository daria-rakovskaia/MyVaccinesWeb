import React from "react";
import { Button, TextField } from '@mui/material';
import "./AddCountry.scss"

function AddCountry() {

    return (
        <div className="MainContainer">
            <div className="HeaderContainer">
                <h1 style={{ fontWeight: "400" }}>Countries</h1>
            </div>
            <div className="EnterFieldsContainer" >
                <t>Страна</t>
                &nbsp;
                &nbsp;
                &nbsp;
                <TextField label="Введите страну" variant="outlined" />
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

export default AddCountry
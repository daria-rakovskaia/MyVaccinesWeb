import React from "react";
import { Button, Input } from '@mui/material';
import "./AddCountry.scss"

function EditCountry() {

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
                <Input defaultValue="Россия" />
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

export default EditCountry
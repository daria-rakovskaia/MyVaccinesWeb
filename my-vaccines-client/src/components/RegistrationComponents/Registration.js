import React from "react";
import { Button, TextField } from '@mui/material';
import "./Registration.scss"

function RegistrationPage() {

    return (
        <div className="MainContainer">
            <div className="HeaderContainer">
                <h1 style={{ fontWeight: "400" }}>Регистрация</h1>
            </div>
            <div className="EnterFieldsContainer" >
                <TextField label="Введите логин" variant="outlined" />
                &nbsp;
                <TextField label="Введите пароль" variant="outlined" />
                &nbsp;
                <Button
                    variant="contained"
                    color="success"
                    size="large"
                >
                    Зарегистрироваться
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

export default RegistrationPage
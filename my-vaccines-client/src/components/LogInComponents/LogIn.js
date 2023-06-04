import React from "react";
import { Button, TextField } from '@mui/material';
import "./LogIn.scss"

function LogInPage() {

    return (
        <div className="MainContainer">
            <div className="HeaderContainer">
                <h1 style={{ fontWeight: "400" }}>Вход в систему</h1>
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
                    Войти
                </Button>
                &nbsp;
                <Button
                    variant="outlined"
                    size="small">
                    Не зарегистрированы?
                </Button>
            </div>
            <div className="AdminButton">
                <Button variant="text" color="secondary">Я администратор</Button>
            </div>
        </div>
    )

}

export default LogInPage
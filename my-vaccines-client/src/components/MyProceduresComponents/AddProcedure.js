import React from "react";
import { Button, Input, TextField, MenuItem, Select } from '@mui/material';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import "./AddProcedure.scss"

function AddProcedure() {

    return (
        <div className="MainContainer">
            <div className="HeaderContainer">
                <h1 style={{ fontWeight: "400" }}>Добавить процедуру</h1>
            </div>
            <div className="EnterFieldsContainer" style={{ flexDirection: "column" }}>
                <TextField label="Фамилия" variant="outlined" margin="dense" />
                <TextField label="Имя" variant="outlined" margin="dense" />
                <TextField label="Отчество" variant="outlined" margin="dense" />
                <FormControl margin="dense">
                    <InputLabel>Тип пациента</InputLabel>
                    <Select
                        sx={{ minWidth: "250px" }}
                        label="Тип пациента"
                    >
                        <MenuItem value={1}>ГУ НИИЭМ им. Гамалеи РАМН</MenuItem>
                    </Select>
                </FormControl>
                <FormControl margin="dense">
                    <InputLabel>Вакцина</InputLabel>
                    <Select
                        sx={{ minWidth: "250px" }}
                        label="Вакцина"
                    >
                        <MenuItem value={1}>Туберкулез</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Дата" variant="outlined" margin="dense" />
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

export default AddProcedure
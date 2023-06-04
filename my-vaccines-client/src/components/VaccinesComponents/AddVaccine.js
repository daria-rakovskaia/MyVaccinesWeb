import React from "react";
import { Button, Input, TextField, MenuItem, Select } from '@mui/material';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import "./EditVaccine.scss"

function AddVaccine() {

    return (
        <div className="MainContainer">
            <div className="HeaderContainer">
                <h1 style={{ fontWeight: "400" }}>Vaccines</h1>
            </div>
            <div className="EnterFieldsContainer" style={{ flexDirection: "column" }}>
                <TextField label="Вакцина" variant="outlined" margin="normal" />
                <FormControl margin="normal">
                    <InputLabel>Производитель</InputLabel>
                    <Select
                        sx={{ minWidth: "250px" }}
                        label="Производитель"
                    >
                        <MenuItem value={1}>ГУ НИИЭМ им. Гамалеи РАМН</MenuItem>
                    </Select>
                </FormControl>
                <FormControl margin="normal">
                    <InputLabel>Тип вакцины</InputLabel>
                    <Select
                        sx={{ minWidth: "250px" }}
                        label="Тип вакцины"
                    >
                        <MenuItem value={1}>Туберкулез</MenuItem>
                    </Select>
                </FormControl>
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

export default AddVaccine
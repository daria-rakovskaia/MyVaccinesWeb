import React from "react";
import { Button, Input, TextField, MenuItem, Select } from '@mui/material';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import "./EditVaccine.scss"

function EditVaccine() {

    return (
        <div className="MainContainer">
            <div className="HeaderContainer">
                <h1 style={{ fontWeight: "400" }}>Vaccines</h1>
            </div>
            <div className="EnterFieldsContainer" style={{ flexDirection: "column" }}>
                <TextField defaultValue="Вакцина БЦЖ" label="Вакцина" variant="outlined" margin="normal" />
                <FormControl margin="normal">
                    <InputLabel>Производитель</InputLabel>
                    <Select
                        defaultValue={1}
                        label="Производитель"
                        autoWidth
                    >
                        <MenuItem value={1}>ГУ НИИЭМ им. Гамалеи РАМН</MenuItem>
                    </Select>
                </FormControl>
                <FormControl margin="normal">
                    <InputLabel>Тип вакцины</InputLabel>
                    <Select
                        defaultValue={1}
                        label="Тип вакцины"
                        autoWidth
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

export default EditVaccine
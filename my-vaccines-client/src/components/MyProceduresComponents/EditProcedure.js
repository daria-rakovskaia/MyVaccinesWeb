import React from "react";
import { Button, Input, TextField, MenuItem, Select } from '@mui/material';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import "./AddProcedure.scss";

function EditProcedure() {

    return (
        <div className="MainContainer">
            <div className="HeaderContainer">
                <h1 style={{ fontWeight: "400" }}>Редактировать процедуру</h1>
            </div>
            <div className="EnterFieldsContainer" style={{ flexDirection: "column", height: "500px" }}>
                <TextField defaultValue="Попова" label="Фамилия" variant="outlined" margin="dense" />
                <TextField defaultValue="Елена" label="Имя" variant="outlined" margin="dense" />
                <TextField defaultValue="Дмитриевна" label="Отчество" variant="outlined" margin="dense" />
                <FormControl margin="dense">
                    <InputLabel>Тип пациента</InputLabel>
                    <Select
                        sx={{ minWidth: "250px" }}
                        label="Тип пациента"
                        defaultValue={1}
                    >
                        <MenuItem value={1}>Бабушка</MenuItem>
                    </Select>
                </FormControl>
                <FormControl margin="dense">
                    <InputLabel>Вакцина</InputLabel>
                    <Select
                        sx={{ minWidth: "250px" }}
                        label="Вакцина"
                        defaultValue={1}
                    >
                        <MenuItem value={1}>РУВАКС</MenuItem>
                    </Select>
                </FormControl>
                <TextField defaultValue="2021-04-05" label="Дата" variant="outlined" margin="dense" />
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
            <div className="backButton" style={{marginTop: "-10px"}}>
                <Button
                    variant="outlined"
                    size="small">
                    Назад
                </Button>
            </div>
        </div>
    )

}

export default EditProcedure
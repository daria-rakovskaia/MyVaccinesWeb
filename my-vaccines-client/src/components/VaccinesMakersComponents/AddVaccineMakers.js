import React from "react";
import { Button, Input, TextField, MenuItem, Select } from '@mui/material';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import "./EditVaccineMaker.scss"

function AddVaccineMaker() {

    return (
        <div className="MainContainer">
            <div className="HeaderContainer">
                <h1 style={{ fontWeight: "400" }}>VaccinesMakers</h1>
            </div>
            <div className="EnterFieldsContainer" style={{ flexDirection: "column" }}>
                <TextField label="Производитель" variant="outlined" margin="normal"
                    sx={{ minWidth: "300px" }} />
                <FormControl margin="normal">
                    <InputLabel>Страна</InputLabel>
                    <Select
                        // defaultValue={1}
                        label="Страна"
                        sx={{ minWidth: "250px" }}
                    >
                        <MenuItem value={1}>Россия</MenuItem>
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

export default AddVaccineMaker
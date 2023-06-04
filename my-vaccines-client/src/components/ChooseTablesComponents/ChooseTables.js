import { Button } from "@mui/material";
import React from "react";

function ChooseTable() {

    return (
        <div className="MainContainer">
            <div className="HeaderContainer">
                <h1 style={{ fontWeight: "400" }}>Выберите таблицу</h1>
            </div>
            <div className="buttonsChoice"
                style={{
                    alignContent: "center",
                    justifyContent: "center",
                    display: "flex"
                }}>
                <Button
                    color="secondary"
                    variant="contained"
                    size="medium">
                    Countries
                </Button>
                &nbsp;
                <Button
                    color="secondary"
                    variant="contained"
                    size="medium">
                    PatientsTypes
                </Button>
                &nbsp;
                <Button
                    color="secondary"
                    variant="contained"
                    size="medium">
                    Vaccines
                </Button>
                &nbsp;
                <Button
                    color="secondary"
                    variant="contained"
                    size="medium">
                    VaccinesMakers
                </Button>
                &nbsp;
                <Button
                    color="secondary"
                    variant="contained"
                    size="medium">
                    VaccinesTypes
                </Button>
            </div>
        </div>
    )
}

export default ChooseTable
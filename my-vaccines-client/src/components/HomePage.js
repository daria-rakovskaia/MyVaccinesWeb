import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./HomePage.scss"
import CrudServices from '../Services/CrudServices';

const service = new CrudServices();

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
            //Age: ''
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => { console.log(this.state) });
    }
    handleClick = () => {
        if (this.state.Country === '' /*|| this.state.Age === ''*/) {
            console.log("Input field is empty");
            return;
        }
        console.log("Data: ", this.state);
        const data = {
            //id: Number(this.state.Age),
            name: this.state.Country
        }
        service.CreateCountry(data).then((data) => {
            console.log(data)
        }).then(response => {
            console.log(response)
        }).catch((error) => {
            console.log(error.response)
        })
    }
    render() {
        let state = this.state;
        return (
            <div className='MainContainer'>
                <div className='SubContainer'>
                    <div className='Box1'>
                        <div className='Input-Container'>
                            <div className='Flex-Container'>
                                <TextField
                                    fullWidth
                                    label="UserName"
                                    name='Country'
                                    size='small'
                                    variant="outlined"
                                    value={state.Country}
                                    onChange={this.handleChange} />
                            </div>
                            <div className='Flex-Container'>
                                <TextField
                                    fullWidth
                                    label="Age"
                                    name='Age'
                                    size='small'
                                    variant="outlined"
                                    /*value={state.Age}
                                    onChange={this.handleChange}*/ />
                            </div>
                            <div className='flex-button'>
                                <Button variant="contained" color="secondary" onClick={this.handleClick}>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='Box2'></div>
                </div>
            </div>
        )
    }
}

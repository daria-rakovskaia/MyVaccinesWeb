import React from 'react'
import "./PopUp.css"
import Button from '@mui/material/Button';

function PopUp(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <Button className='close-btn'>Закрыть</Button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default PopUp

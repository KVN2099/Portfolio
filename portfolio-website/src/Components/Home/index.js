import React from 'react';
import './style.css';
import * as Mui from '@material-ui/core';
import logo from '../../assets/portfolio-logo.svg';

function Home() {
    return (
        <div className="sidebar-container">
            <Mui.CssBaseline />
            <Mui.Container fixed maxWidth="md">
                <Mui.Typography component="div" className="logo" style={{ margin: "0px auto", alignItems: "center", width: "150px" }} >
                    <img src={logo} alt="Portfolio Name Logo" />
                </Mui.Typography>
            </Mui.Container>
        </div>
    )
}

export default Home

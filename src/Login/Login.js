import React, { Component } from 'react';
import { Button } from 'antd';
import { Box, Grid } from '@material-ui/core';
import { Input } from 'antd';
import login from '../assets/login.png'
// import Box from '@material-ui/core/Box';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn1: 1,
            btn2: 1,
            btn3:1
        }
    }

    onHover = (element) => {
        
        this.setState({
            [element.target.name]: 4
        })
    }
    onOut = (element) => {
        this.setState({
            [element.target.name]: 1
        })
    }

    render() {
        return (
            <Grid container >
                <Grid item lg={12} xs={12} sm={12} md={12}> <img src={login}  style={{width:'20%',marginLeft:'40%',marginBottom:'10px'}}/> </Grid>
                <Grid item lg={6} xs={6} sm={6} md={6}><Box   boxShadow={this.state.btn1} style={{ width: '90%', marginLeft: '5%' }}><Button name="btn1" onMouseOut={this.onOut}  onMouseOver={this.onHover} style={{ width: '100%', borderRadius: '0px', height: '45px' }}>Login</Button></Box></Grid>
                <Grid item lg={6} xs={6} sm={6} md={6}><Box   boxShadow={this.state.btn2} style={{ width: '90%', marginLeft: '5%' }}><Button name="btn2" onMouseOut={this.onOut} onMouseOver={this.onHover} style={{ width: '100%', borderRadius: '0px', height: '45px',backgroundColor:'#33B5E5',color:'white' }}>Signup</Button></Box></Grid>
                <Grid style={{marginTop:'20px'}} item lg={12} xs={12} sm={12} md={12}><Input style={{height:'40px',width: '94%', marginLeft: '3%'}} placeholder="name" /></Grid>
                <Grid style={{marginTop:'20px'}} item lg={12} xs={12} sm={12} md={12}><Input style={{height:'40px',width: '94%', marginLeft: '3%'}} placeholder="email" /></Grid>
                <Grid style={{marginTop:'20px'}} item lg={12} xs={12} sm={12} md={12}><Input style={{height:'40px',width: '94%', marginLeft: '3%'}} placeholder="password" /></Grid>
                <Grid item lg={12} xs={12} sm={12} md={12} style={{marginTop:'20px'}}> <Box   boxShadow={this.state.btn3} style={{ width: '94%', marginLeft: '3%' }}><Button name="btn3" onMouseOut={this.onOut}  onMouseOver={this.onHover} style={{ width: '100%',backgroundColor:'#33B5E5',color:'white', borderRadius: '0px', height: '45px' }}>Click me</Button></Box> </Grid>
            </Grid>
        )
    }
}

export default Login;
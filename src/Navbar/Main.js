
import React, { Component } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Footer from '../Footer/main'
import { Modal } from 'antd';
import Login from '../Login/Login'
const styles = theme => ({
    root: {

        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'pink',
        height: 48,
        padding: '0 30px',
    }
});


const styler = {
    textFieldStyle: {
        marginLeft: '20px',
        borderRadius: '0px',
        border: '2px solid #33B5E5',
        backgroundColor: 'white',
        height: '42px',
        width: '55%',
        textAlign: 'center',
        fontSize: '14px',
        fontStyle: 'italic',
        color: 'rgb(2, 15, 43)'
    }
}

class Main extends Component {


    constructor(props) {
        super(props);

    }

    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };


    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };




    render() {


        const { classes } = this.props;



        return (
            <div className={classes.grow}>
                <AppBar style={{ height: '70px', marginBottom: '20px', backgroundColor: 'white' }} position="fixed">
                    <Toolbar className={classes.toolbar}>
                        <img style={{ marginRight: '10px' }} src="https://img.icons8.com/ultraviolet/44/000000/shopping-cart.png" />
                        <Typography className="title" style={{ color: '#33B5E5', fontFamily: 'sans-serif', fontStyle: 'italic' }} variant="h5" >
                            SOHDA KR
                         </Typography>
                        <input style={styler.textFieldStyle} />
                        <Button style={{ width: '13%', marginLeft: '10px', height: '44px', borderRadius: '0px', border: '2px solid #33B5E5' }} variant="outlined" color="primary">
                            <img style={{ marginRight: '7px' }} src="https://img.icons8.com/ultraviolet/22/000000/search.png" /> SEARCH
                         </Button>

                        <Button onClick={this.showModal} style={{ width: '13%', marginLeft: '10px', height: '44px',color: 'white',backgroundColor:'#33B5E5', borderRadius: '0px',  border: '2px solid #33B5E5' }} variant="outlined" color="primary">
                            <img style={{ marginRight: '7px' }} src="https://img.icons8.com/ultraviolet/22/000000/search.png" /> Login
                         </Button>

                    </Toolbar>
                </AppBar>
                <Modal
                    closable={false}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <Login />
                </Modal>
            </div>
        )
    }

}

export default withStyles(styles)(Main);

import React, { Component } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


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
        border: '3px solid white',
        backgroundColor: 'rgb(240, 240, 240)',
        height: '36px',
        width: '55%',
        textAlign: 'center',
        fontSize: '20px',
        fontStyle: 'italic',
        color: 'rgb(2, 15, 43)'
    }
}

class Main extends Component {


    constructor(props) {
        super(props);

    }



    render() {


        const { classes } = this.props;



        return (
            <div className={classes.grow}>
                <AppBar style={{  backgroundColor: '#0d47a1', height: '70px' }} position="fixed">
                    <Toolbar className={classes.toolbar}>
                        <img style={{ marginRight: '10px' }} src="https://img.icons8.com/ultraviolet/44/000000/shopping-cart.png" />
                        <Typography className="title" style={{ color: 'white', fontFamily: 'sans-serif', fontStyle: 'italic' }} variant="h5" >
                            SOHDA KR
                         </Typography>
                        <input style={styler.textFieldStyle} />
                        <Button style={{ width: '13%', marginLeft: '10px', height: '44px', borderRadius: '0px', color: 'white', border: '2px solid white' }} variant="outlined" color="primary">
                            <img style={{ marginRight: '7px' }} src="https://img.icons8.com/ultraviolet/22/000000/search.png" /> SEARCH
                         </Button>



                    </Toolbar>
                </AppBar>


            </div>
        )
    }

}

export default withStyles(styles)(Main);
import React, { Component } from 'react';
import Navbar from '../Navbar/Main'
import Categories from './Categories'
import Paper from '@material-ui/core/Paper';
import CardComponent from './Card'
import Grid from '@material-ui/core/Grid';

export default class Home extends Component {


    render() {
        return (
            <div>
                <Navbar />
                <div style={{marginTop:'72px'}}>
                    <Categories />
                    <Paper style={{ backgroundColor: '#F0F0F0', height: '100vh', borderRadius: '0px', width: '96%', marginLeft: '2%', marginTop: '20px' }} elevation={1} >
                        <div>
                            <p style={{ marginLeft: '30px', lineHeight: '60px', fontSize: '28px', fontWeight: '400', color: '  rgb(77, 77, 77)', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }}>ADS SUGGESTED FOR YOU</p>
                            <Grid container >
                                <Grid item lg={3} xs={12}>
                                    <CardComponent />

                                </Grid>
                                <Grid item lg={3} xs={12}>
                                    <CardComponent />

                                </Grid>
                                <Grid item lg={3} xs={12}>
                                    <CardComponent />

                                </Grid>
                                <Grid item lg={3} xs={12}>
                                    <CardComponent />

                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}
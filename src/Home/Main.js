import React, { Component } from 'react';
import Navbar from '../Navbar/Main'
import Paper from '@material-ui/core/Paper';
import CardComponent from './Card'
import Grid from '@material-ui/core/Grid';
import CorouselContainer from './CorouselContainer'
import Footer from '../Footer/main'
import { Modal, Button } from 'antd';
export default class Home extends Component {
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
        return (
            <div>
               
                <div style={{marginTop:'72px'}}>
                    {/* <Categories /> */}
                    <CorouselContainer />
                    
                        <div style={{marginTop:'70px'}}>
                            {/* <p style={{ marginLeft: '30px', lineHeight: '60px', fontSize: '28px', fontWeight: '400', color: '  rgb(77, 77, 77)', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }}>ADS SUGGESTED FOR YOU</p> */}
                            <Grid container spacing={1}>
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
                  {this.modalJSX}
                </div>
                <Footer />
            </div>
        )
    }
}
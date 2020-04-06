import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Button } from 'antd';
import {Box} from '@material-ui/core';
import './cardStyle.css'
// import Button from '@material-ui/core/Button'


import plot from '../assets/phone.jpg'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '80%',
    marginLeft: '10%',
    
    borderRadius: '0px',
    
    marginBottom:'50px',
    backgroundColor:'white'
  },
  media: {
      height: 0,
      paddingTop: '65%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function CardComponent() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [elevation,setElevation]=React.useState(1);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 
  return (
    <Box onMouseOver={()=>setElevation(4)} onMouseOut={()=>setElevation(1)} className={classes.card}   boxShadow={elevation}>
  
      <CardMedia 
        className={classes.media +" hovered"}
        image={plot}
        title="Paella dish"
        
      />
      <CardContent>
        {/* <Typography style={{ fontWeight: '300' }} variant="h5" component="h2">
          TITLE
          </Typography> */}
        <h4 style={{marginBottom:'2px',color:'#33B5E5'}}>Title</h4>
       
        <p style={{ fontSize: '12px',color:'#33B5E5' }}> This impressive paella is a perfect meal to cook together with your
          guests.</p>
      <Box boxShadow={5} ><Button style={{width:'100%',height:'30px',color:'white',backgroundColor:'#33B5E5'}} >Show Ad</Button></Box> 
      </CardContent>
    
    </Box>
  );
}

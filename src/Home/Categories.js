import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import img from '../assets/cars.jpg'
import phone from '../assets/phone.jpg'
import tv from '../assets/tv.jpg'
import plot from '../assets/plot.jpg'
import bike from '../assets/bikes.jpg'
import access from '../assets/access.jpg'
// import tileData from './tileData';

const tileData = [
   
       {
         img,
         title: 'Cars'
       },
      
       {
        img:phone,
        title: 'Phones'
      }
      ,
      {
        img:tv,
        title: 'Television'
      },{
        img:plot,
        title: 'Plots'
      },
      {
        img:access,
        title: 'Accessories'
      },
      
      {
        img:bike,
        title: 'MotorCyles'
      },
     
     ];
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop:'5px'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4.5}>
      
        {tileData.map(tile => (
           
          <GridListTile title={tile.title} style={{cursor:'pointer'}} key={tile.img}>
             
            <img   src={tile.img} alt={tile.title} />
            
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                 
                </IconButton>
              }
            />
          </GridListTile>
         
          
        ))}
    
      </GridList>
    </div>
  );
}

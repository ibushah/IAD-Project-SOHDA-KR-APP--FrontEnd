import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import plot from '../assets/plot.jpg'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '80%',
    marginLeft:'10%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  },
//   avatar: {
//     backgroundColor: red[500],
//   },
}));

export default function CardComponent() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
     
      <CardMedia
        className={classes.media}
        image={plot}
        title="Paella dish"
      />
      <CardContent>
      <Typography  style={{fontWeight:'300'}} variant="h5"  component="h2">
          TITLE
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests.
        </Typography>
      </CardContent>
     <CardActions disableSpacing>
     {/* <Button variant="outlined" color="primary">
        Go To Add
      </Button>  */}
      </CardActions>
    
    
    </Card>
  );
}

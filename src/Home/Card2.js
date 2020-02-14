import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { useSpring, animated } from 'react-spring'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import plot from '../assets/plot.jpg'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '80%',
        marginLeft: '10%'
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

   
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (


        <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
            <Card className={classes.card}>

                <CardMedia
                    className={classes.media}
                    image={plot}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography style={{ fontWeight: '300' }} variant="h5" component="h2">
                        TITLE
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests.
        </Typography>
                </CardContent>
           
            </Card>
        </animated.div>
    );
}

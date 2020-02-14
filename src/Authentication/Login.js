import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import {Fade,Button,Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderStyle:'none',
    padding: theme.spacing(2, 4, 3),
    borderRadius:'5px',
    width:'300px'
  },
}));

export default function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="hover" onClick={handleOpen} variant="outlined" style={{color:'white',height:'44px',borderRadius:'0px',marginLeft:'5px',border: '2px solid white'}}>
                         <img style={{marginRight:'5px'}} src="https://img.icons8.com/ultraviolet/22/000000/enter-2.png" />LOGIN</Button>
                         <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 50,
        }}
        
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <img style={{ marginLeft: '35%',width:'30%' }} src="https://img.icons8.com/ultraviolet/40/000000/shopping-cart.png" />
                        {/* <Typography  className="title"  style={{display:'inline',fontSize:'28px',fontWeight:'bold'}} variant="h5" >
                            SOHDA KR
                         </Typography> */}
             
              <form>
              <Button className="hover" style={{ width: '90%' ,marginLeft: '5%',backgroundColor:'#0d47a1', height: '44px', borderRadius: '0px', color: 'white', border: '2px solid rgb(111, 143, 207)' }} variant="outlined" color="primary">
                           LOGIN
                         </Button>
              </form>
          
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
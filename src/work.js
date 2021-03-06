import logo from './logo.svg';
//import './App.css';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Contianer from '@material-ui/core/Container';
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import  {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
btn : {
  fontSize: 60,
  backgroundColor:'violet',
  '&:hover': {
    backgroundColor:'blue'
  }
},title:{
  textDecoration: 'underline',
  marginBottom:20
}

})

function Work() {
  const classes = useStyles()
  return (

    <Contianer className="work">
      
    <h1>React Material UI</h1>
     <Typography 
     className={classes.title}
     variant="h3"
     color="secondary"
     display="inline"

     gutterBottom
    
    
     >
       
      <h1>HelloWorld!</h1> 

    
     </Typography>
     {/* <Button  variant="contained" type="submit" color="primary">submit</Button>
     <Button  variant="outlined" type="submit" color="secondary">submit</Button>
     <Button  variant="contained" type="submit" disabled>submit</Button>
     <Button  variant="contained" type="submit" color="textprimary">submit</Button>
     <Button  variant="contained" type="submit" color="textsecondary">submit</Button> 

     <ButtonGroup  color=" primary" variant="contained">
       <Button>one</Button>
       <Button>two</Button>
       <Button>three</Button>
     </ButtonGroup> */}
     <Button 
     className={classes.btn}
     type="submit"
     color="primary"
     variant="contained"
     onClick={() => console.log('CLick me Again')}
     endIcon={<KeyboardArrowRightIcon/>}
     startIcon={<SendSharpIcon/>}
     >submit</Button>
     <br></br>
    <AndroidRoundedIcon color="primary" fontSize="small"/>
    <AndroidRoundedIcon color="secondary" fontSize="large"/>
    <AndroidRoundedIcon color="action " fontSize="medium"/>
    <AndroidRoundedIcon color="disabled" fontSize="xl"/>
    <AndroidRoundedIcon color="error" fontSize="small"/>
    <AndroidRoundedIcon color="primary" fontSize="large"/>
   
    </Contianer>
  );
}

export default Work;

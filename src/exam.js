import React,{useState} from 'react';
import logo from './logo.svg';
//import './App.css';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Contianer from '@material-ui/core/Container';
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import  {FormControlLabel,makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/Formlabel'
import FormControl from '@material-ui/core/FormControl'
const useStyles = makeStyles({
field : {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
}
})
function Exam() {
  const classes = useStyles()
  const [title,setTitle]=useState('')
  const [details,setDetails]=useState('')
  const [titleError,setTitleError]=useState(false)
  const [detailsError,setDetailsError]=useState(false)
  const [category,setCategory]=useState("money")


 const handleSubmit=(e) =>{
     e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

if(title == " "){
  setTitleError(true)
}
if(details == " "){
  setDetailsError(true)
}


     if(title && details){
         console.log(title,details,category)
     }
 
 }
 
 
  return (

    <Contianer className="App">
      
    <h1>React Material UI</h1>
     <Typography 
     
     variant="h3"
     color="secondary"
     display="inline"

     gutterBottom
    
    
     >
       
      <h1>HelloWorld!</h1> 

    
     </Typography>

<form noValidate autoComplete="off" onSubmit={handleSubmit}>
    <TextField
    onChange={(e) =>setTitle(e.target.value)}
    className={classes.field}
    label="Note Tittle"
    variant="outlined"
    color="primary"
    fullWidth
    required
    error={titleError}
     />
    

    <  TextField
       className={classes.field}
       onChange={(e) =>setDetails(e.target.value)}
       label="Details"
       variant="outlined"
       color="primary"
       fullWidth
       multiline
       rows={4}
       required
       error={detailsError}
       />
       <FormControl>
       <FormLabel>New category</FormLabel>
       <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
<FormControlLabel value="money" control={<Radio/>} label="money"/>
<FormControlLabel value="power" control={<Radio/>} label="power"/>
<FormControlLabel value="hell" control={<Radio/>} label="hell"/>
<FormControlLabel value="go" control={<Radio/>} label="go"/>
</RadioGroup>

       <Button 
     
     type="submit"
     color="primary"
     variant="contained"
     
     endIcon={<KeyboardArrowRightIcon/>}
     startIcon={<SendSharpIcon/>}
     >submit</Button>

</FormControl>
</form>

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
    
     <br></br>
    {/* <AndroidRoundedIcon color="primary" fontSize="small"/>
    <AndroidRoundedIcon color="secondary" fontSize="large"/>
    <AndroidRoundedIcon color="action " fontSize="medium"/>
    <AndroidRoundedIcon color="disabled" fontSize="xl"/>
    <AndroidRoundedIcon color="error" fontSize="small"/>
    <AndroidRoundedIcon color="primary" fontSize="large"/> */}
   
    </Contianer>
  );
}

export default Exam;

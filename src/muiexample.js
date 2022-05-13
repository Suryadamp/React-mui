import logo from './logo.svg';
//import './App.css';
import {  Typography,Card,CardContent,Grid,TextField} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl'
import { makeStyles , FormControlLabel } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Contianer from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';
//import TextField from '@material-ui/core/TextField';
import { useState } from 'react';



const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom:20,
    dispaly: 'block'
  }
})
function App() {
  const classes=useStyles()
  const [radioChange,setRadioChange]=useState('')
  console.log(radioChange)
  const [name,setName]=useState('');
  const [number,setNumber]=useState('');
  const [email,setEmail]=useState('');
  const [passWord,setPassword]=useState('');
  
  
function  handleSubmit(e){
    e.preventDefault();
    console.log(name,number,email,passWord)
}
  
  return (

    <div className="App">
      
   
     <Typography 
     variant="h3"
     color="secondary"
     //display="inline"
     align="center"

     
    
    
     >
       
    Enter details

    
     </Typography>

     <RadioGroup row aria-label="Enter detail"  onChange={(e)=> setRadioChange(e.target.value  ) }>
       <FormControlLabel value="yes" control={<Radio/>} label="Enter with detial"/>
       <FormControlLabel value="no" control={<Radio/>} label="Enter without detial"/>
     </RadioGroup>
     
      {radioChange == "yes" ? <form  onSubmit={e =>handleSubmit(e)}  >
      <Card style={{maxWidth:450 ,margin:"0 auto",padding:"20px 5px"}}>
        <CardContent>
          <Grid container spacing={1} >
          <Grid xs={12} sm={12} >
      <TextField label="Name" type="text" variant="outlined"  fullWidth required onInput={e =>setName(e.target.value)}
 />
      </Grid>
      <Grid xs={12} sm={12} >
      <TextField type="number" label="mobile"   variant="outlined" fullWidth required  onInput={ e =>setNumber(e.target.value)}
/>
      </Grid>  
      <Grid  xs={12} sm={6} >
<Button color="secondary" variant="contained" fullWidth type='submit' >Button</Button>
</Grid>
        
</Grid>
</CardContent>
</Card>
</form> 
 : 
 <form onSubmit={e=>handleSubmit(e)}>
<Card style={{maxWidth:450 ,margin:"0 auto",padding:"20px 5px"}}>
 <CardContent>
 <Grid container spacing={1}>
   <Grid xs={12} sm={12} item>
<TextField type="email" label="email"  variant="outlined" fullWidth onInput={e=>setEmail(e.target.value)} />
</Grid>
<Grid  xs={12} sm={12} >
<TextField label="password" type='password'  variant="outlined" fullWidth required onInput={e=>setPassword(e.target.value)}/>
</Grid>
<Grid  xs={12} sm={6} >
<Button color="secondary" variant="contained" fullWidth type='submit' >Button</Button>
</Grid>

</Grid>

</CardContent>
</Card>

</form>
 
 }
      
      
  
{/*   


<Card  style={{maxWidth:450 ,margin:"0 auto",padding:"20px 10px", align:"center"}} >

</Card> */}





    </div>




  );
}

export default App;
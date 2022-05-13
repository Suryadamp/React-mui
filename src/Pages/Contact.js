import React from "react";
import {Button } from "@material-ui/core";
import {useNavigate} from 'react-router-dom'
import {  Typography,Card,CardContent,Grid,TextField} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import {  FormControlLabel } from '@material-ui/core';
import { useState } from 'react';






const Contact = () => {
    let navigate=useNavigate()
    
    const [radioChange,setRadioChange]=useState('')
    console.log(radioChange)
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [email,setEmail]=useState('');
    const [passWord,setPassword]=useState('');
    
    
    
  function  handleSubmit(e){
      e.preventDefault();
      console.log(name,number,email,passWord)
      navigate("/thankyou");
      
  }
  
    
    return ( 
        <div>
        <Typography variant="h1" color="secondary" align="center" >
        Contact
    </Typography>
    <ul type="circle">  
         <li>  <Button variant="outlined" color="primary"
            onClick={()  =>{
                navigate("/home");
            }}
            >
                {""}
                Back to home
            </Button></li><br></br>
            <li> <Button variant="outlined" color="primary"
            onClick={()  =>{
                navigate("/about");
            }}
            >
                {""}
                About us
            </Button></li><br></br>
            <li>  <Button variant="outlined" color="primary"
            onClick={()  =>{
                navigate("/thankyou");
            }}
            >
                {""}
                Thankyou
            </Button></li>
            </ul>
             



      
   

<RadioGroup row aria-label="Enter detail"  onChange={(e)=> setRadioChange(e.target.value  ) }>
  <FormControlLabel value="yes" control={<Radio/>} label="Enter with detial"/>
  <FormControlLabel value="no" control={<Radio/>} label="Enter without detial"/>
</RadioGroup>

 {radioChange == "yes" ?  <form onSubmit={e=>handleSubmit(e) }> 
 <Card style={{maxWidth:450 ,margin:"0 auto",padding:"20px 5px"}}>
   <CardContent>
     <Grid container spacing={1}>
     <Grid xs={12} sm={12} item >
 <TextField label="Name" variant="outlined"fullWidth required onInput={(e)=>setName(e.target.value)}/>
 </Grid>
 <Grid xs={12} sm={12} item >
 <TextField type="number" label="mobile" variant="outlined" fullWidth required onInput={(e) =>setNumber(e.target.value)}/>
 </Grid>  
 <Grid  xs={12} sm={6} item>
<Button color="secondary" variant="outlined" fullWidth  type="submit"  >Button</Button>
</Grid>

</Grid>
</CardContent>
</Card>
</form>
: 
<form  onSubmit={e=>handleSubmit(e)}>
<Card style={{maxWidth:450 ,margin:"0 auto",padding:"20px 5px"}}>
<CardContent>
<Grid container spacing={1}>
<Grid xs={12} sm={12} item>
<TextField type="email" label="email" variant="outlined" fullWidth required onInput={(e)=>setEmail(e.target.value)}/>
</Grid>
<Grid  xs={12} sm={12} item >
<TextField label="password" variant="outlined" fullWidth required onInput={(e)=>setPassword(e.target.value)}/>
</Grid>
<Grid  xs={12} sm={6} item >
<Button color="secondary" variant="outlined" fullWidth  type="submit" >Button</Button>
</Grid>


</Grid>
</CardContent>
</Card>
</form>


}
 
 











</div>




);
}
    
 

 
export default Contact;


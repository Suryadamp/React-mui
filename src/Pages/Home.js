import React from "react";
import {Button,Typography} from '@material-ui/core';
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate= useNavigate()
    return ( 
        <div>
       <Typography variant="h1" color="secondary" align="center">Welcome to Home</Typography> 

       <Typography variant="h3" color="default" align="center">Please Visit us......</Typography>

<ul type="circle">
     <li>  <Button variant="outlined" color="primary"
            onClick={()  =>{
                navigate("/about");
            }}
            >
                {""}
              About us
            </Button></li><br></br>
            <li> <Button variant="outlined" color="primary"
            onClick={()  =>{
                navigate("/contact");
            }}
            >
                {""}
                Contact Us
            </Button></li><br></br>
            <li>   <Button variant="outlined" color="primary"
            onClick={()  =>{
                navigate("/thankyou");
            }}
            >
                {""}
                Thankyou
            </Button></li>
            </ul>
       </div>
     );
}
 
export default Home;
import React from "react";
import {Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Thankyou = () => {
    let navigate=useNavigate()
    return (
        <div>
            
                  <Typography variant="h1" color="secondary" align="center" >
            Thank you
        </Typography> 
        <ul type="circle">
       <li> <Button variant="outlined" color="primary"
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
                navigate("/contact");
            }}
            >
                {""}
                Contact Us
            </Button></li>
        
        </ul>        
        </div>
      );
}
 
export default Thankyou ;
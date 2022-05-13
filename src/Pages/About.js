import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
const About  = () => {
    let navigate= useNavigate()
    return (<div>
        <Typography variant="h1" color="secondary" align="center" >
            About us
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
            <li>  <Button variant="outlined" color="primary"
            onClick={()  =>{
                navigate("/contact");
            }}
            >
                {""}
                Contact Us
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
    </div>  );
}
 
export default About ;
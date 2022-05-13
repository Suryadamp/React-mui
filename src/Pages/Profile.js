    import React from "react";
    import { useNavigate ,useParams} from "react-router-dom";
    const Profile = () => {
        let navigate = useNavigate()
        let {username}= useParams()
        return ( <div>
            THis Is Profile Page Is {username}
            <button 
            onClick={()  =>{
                navigate("/about");
            }}
            >
                {""}
                Change the About Page
            </button>
        </div> );
    }
     
    export default Profile;
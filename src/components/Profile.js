import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const { user } = useAuth0();
//insert database into json divnpm start

    return(
        <div> 
            <h3>User Info</h3>    
            <JSONPretty data={user} />     
        </div>
    )
}

export default Profile
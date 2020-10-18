import React from "react";
import {useParams} from "react-router-dom";


function Profile() {

    let {name} = useParams();

    return (
        <div>
            <h1>This is the Profile Page</h1>
            <h2>for <b>{name}</b></h2>
        </div>
    
    );
}

export default Profile;
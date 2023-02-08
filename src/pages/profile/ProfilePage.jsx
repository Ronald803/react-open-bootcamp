import React from 'react';
import {useNavigate} from 'react-router-dom'

const ProfilePage = () => {
    const navigate = useNavigate();
    const navigating = (path)=>{
        navigate(path)
    }
    const goBack = ()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={()=>navigating('/tasks')}>Tasks</button>
            <button onClick={()=>goBack()}>Go Back</button>
        </div>
    );
}

export default ProfilePage;

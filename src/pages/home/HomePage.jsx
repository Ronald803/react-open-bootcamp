import React from 'react';
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    const navigating = (path) =>{
        navigate(path)
    }

    const goBack = ()=>{
        navigate(-1);
    }

    const goForward = ()=>{
        navigate(+1)
    }
    const navigateProps = (path) => {
        navigate({
            pathname:path,
            search: '?online=true', //query params
            },
            {state: {
                online: true
            }
        })
    }
    return (
        <div>
            <h1>Home PAge</h1>
            <button onClick={()=>navigating('/profile')}>
                Go To Profile
            </button>
            <button onClick={()=>navigateProps('/online-state')}>
                Go to StatePage
            </button>
            <h2>Dashboard</h2>
        </div>
    );
}

export default HomePage;

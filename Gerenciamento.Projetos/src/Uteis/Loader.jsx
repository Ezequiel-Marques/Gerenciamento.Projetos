import React from 'react';
import './styles.css';

function LoaderFullScreen({ active }) {

    return (
        <>
        { active ? 
            < div id = "loader-wrapper" role = "status" >
                <span id="loader"></span>
            </div >
            : ""
        }
        </>
    );
}

export default LoaderFullScreen;
import React from 'react';
import './Info.css';
import NavBar from "./NavBar";

function Info() {
    return (
        <div>
            <NavBar/>
            <div className="fullpage">
                <div className="fullpagelook">
                    <p>This is the info page</p>
                </div>
            </div>
        </div>
    );
}

export default Info;

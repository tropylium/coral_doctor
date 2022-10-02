import React from 'react';
import './Info.css';
import NavBar from "./NavBar";

function Info() {
    return (
        <div>
            <NavBar/>
            <div className="fullpage">
                <div className="fullpagelook">
                    <p id="info">Coral Doctor is an machine learning based technology that works to preserve and safeguard coral reefs for future generations. We are a social media platform, that brings together ocean enthusiasts, scientists, and government officials together to serve a common goal and save one of our environments most assets. Coral reefs contribute to over 8 trillion dollars of the worlds GDP annually, and coral doctor ensures we protect this resources over 200 million individuals depend on. Users log onto our platform and upload underwater coral photography to share with other enthusiasts, and our propriety software processes the image, and then our machine learning algorithms analyze the data, and determine if the coral is in a healthy or sick condition, and potential treatment or recovery options to government or institution bodies. Through leveraging diving enthusiasts crowdsourcing, and government and NGO environmental protection agencies, Coral Doctor will have an immense effect on ensuring we preserve the Ocean's greatest assets today, for the generations of tomorrow.</p>
                </div>
            </div>
        </div>
    );
}

export default Info;

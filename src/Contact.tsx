import React from 'react';
import './Contact.css';
import NavBar from "./NavBar";
import Credit from "./Credit";
import Sree from "./images/sree.jpeg"
import Alex from "./images/alex.png"
import Areeb from "./images/areeb.png"
import Aileen from "./images/aileen.jpeg"
import CoralBg2 from "./images/coralbg2.jpeg"

function Contact() {
    return (
        <div>
            <NavBar/>
            <img className="coralbg" src={CoralBg2} alt='coral background'/>
            <div className="fullpage">
                <div className="fullpagelook" id='contactCtr'>
                    <div id="creditsCtr">
                        <Credit name={'Aileen Liao'} description={'Graphic Designer'}>
                            <img className="rounded" src={Aileen} alt={"Aileen"}/>
                        </Credit>
                        <Credit name={'Areeb Alam'} description={'Business Development'}>
                            <img className="rounded" src={Areeb} alt={"Areeb"}/>
                        </Credit>
                        <Credit name={'Alex Dang'} description={'FrontEnd Engineer'}>
                            <img className="rounded" src={Alex} alt={"Alex"}/>
                        </Credit>
                        <Credit name={'Sreevatsa Nukala'} description={'Backend Engineer'}>
                            <img className="rounded" src={Sree} alt={"Sree"}/>
                        </Credit>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
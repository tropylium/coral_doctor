import React, {useState} from 'react';
import './Analyzer.css';
import Bleached1 from './images/bleached1.jpeg';
import Bleached2 from './images/bleached2.jpeg';
import Bleached3 from './images/bleached3.jpeg';
import Bleached4 from './images/bleached4.jpeg';
import Bleached5 from './images/bleached5.jpeg';
import Bleached6 from './images/bleached6.jpeg';
import Bleached7 from './images/bleached7.jpeg';
import Bleached8 from './images/bleached8.jpeg';

function Analyzer() {
    const data: [string, number, number][] = [
        [Bleached1, 3, 0.786,],
        [Bleached2, 3, 0.830,],
        [Bleached3, 2, 0.631,],
        [Bleached4, 3, 0.744,],
        [Bleached5, 1, 0.368,],
        [Bleached6, 2, 0.802,],
        [Bleached7, 0, 0.769,],
        [Bleached8, 3, 0.521,],
    ]
    const [selectedImage, setSelectedImage] = useState(0);

    function getPercentageBounds(key: number): string {
        switch(key) {
            case 0:
                return "0%-25%";
            case 1:
                return "25%-50%";
            case 2:
                return "50%-75%";
            case 3:
                return "75%-100%";
            default:
                return "";
        }
    }

    return (
        <div className={"fullpage"} id={"analyzer"}>
            <div className="fullpagelook">
                <h3>
                    Analyzer (Demo)
                </h3>
                <div id={"analyzer_Ctr"}>
                    <img id={"analyzer_img"} src={data[selectedImage][0]} alt={'your coral image'}/>
                    <div id={"analyzerinfo"}>
                        <h3>
                            Bleach Percentage:
                        </h3>
                        <span className={"bad"}>
                            {getPercentageBounds(data[selectedImage][1])}
                        </span>
                        <h3>
                            Confidence:
                        </h3>
                        <span className={"info "}>
                            {`${(data[selectedImage][2]*100).toFixed(1)}%`}
                        </span>
                        <div className={"spacer"}/>
                        <div id="sampleImageCtr">
                            {
                                data.map((value, index) =>
                                    <img key={index}
                                         className={`sampleImage ${index === selectedImage ? 'selected': ''}`}
                                         src={value[0]}
                                         alt={'your coral image'}
                                         onClick={() => setSelectedImage(index)}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analyzer;
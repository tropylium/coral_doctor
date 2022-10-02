import React, {useRef} from 'react';
import coral from './images/coral2.png'
import './Home.css';
import Analyzer from "./Analyzer";
import NavBar from "./NavBar";

function Home() {
    const scroll_div = useRef<HTMLDivElement>(null);
    const bg_img = useRef<HTMLImageElement>(null);
    return (
      <div id="home" ref={scroll_div} onScroll={event => {
          if (bg_img.current !== null && scroll_div.current !== null) {
              const img = bg_img.current;
              const scroll = scroll_div.current;
              // img.offsetHeight = scroll.scrollTop/3
              img.style.top = `${scroll.scrollTop / 3}px`;
          }
      }}>
          <NavBar/>
          <div id={"maincontent"}>
              <img ref={bg_img}
                   className="coralbg" src={coral} alt={'a picture of some coral'}/>
              <div className="fullpage">
                  <div className="fullpagelook">
                      <h2>
                          Our Mission
                      </h2>
                      <p>
                          Leverage the leading machine learning technologies of today to save the coral reefs of tomorrow.
                      </p>
                      <button onClick={
                          () => {
                              if (scroll_div.current !== null) {
                                  const scroll = scroll_div.current;
                                  const currentOffset = scroll.scrollTop;
                                  let divisions = 0;
                                  const callback = () => {
                                      divisions++;
                                      scroll.scrollTo(0,
                                          (scroll.scrollHeight - currentOffset)
                                          *(Math.sin((divisions/40 - 0.5)*Math.PI) + 1)/2 + currentOffset);
                                      if (divisions >= 40) {
                                          clearInterval(timer);
                                      }
                                  }
                                  const timer = setInterval(callback, 20);
                              }
                          }
                      }>
                          Get Started
                      </button>
                  </div>
              </div>
              <Analyzer/>
          </div>
      </div>
  );
}

export default Home;

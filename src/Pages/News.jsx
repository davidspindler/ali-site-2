import React from "react";
import './News.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink} from "react-router-dom";
const VideoBackground = ({subtext, source1}) => {
    return (
      <div className="pic-background">
       <img src={source1} alt=""/>
        <div className="overlay-text">
        <NavLink
            to={subtext}
            className={"linkClassNameFirst"}
            // onClick={}
          >
           <h1 className="first">
            {subtext}
            </h1>
          </NavLink>
          <NavLink
            to={subtext}
            className={"linkClassName"}
            // onClick={}
          >
           <h1>
            {subtext}
             <FaArrowRightLong />
            </h1>
          </NavLink>
          {/* <p>Some additional information</p> */}
        </div>
      </div>
    );
  };
const News = () => {
  return (
    <div>
        {/* <h2>AUTOMOTIVE</h2>
        <h2>PORTRAIT</h2> */}
        <VideoBackground subtext={"AUTOMOTIVE"} source1="Rear-Shot.jpg"/>
        <VideoBackground subtext={"PORTRAIT"} source1="YL-LIBRARY-3.jpg"/>
        {/* <VideoBackground subtext={"PORTRAIT"} sourc1="automotive.jpg"/> */}
        {/* <img src="Artboard1.jpg" alt=""/> */}
    {/* <ul className="ulimage" id="ulimages">
        <li>
            <div className="blur-load" style="background-image: url(images/blur/main-photo-cyber.JPG);">
                
                <img src="./images/newphotos/main-photo-cyber.JPG" loading="lazy" className="imageshome" alt="Trees lit by green light during dusk" width="500" height="700" />
            </div>
        </li>
        <li>
            <div className="blur-load" style="background-image: url(images/blur/IMG_7225.JPG);">
                <img src="./images/newphotos/IMG_7225.JPG" loading="lazy" className="imageshome" alt="Trees lit by green light during dusk" width="500" height="700" />
            </div>
        </li>
        <li>
            <div className="blur-load" style="background-image: url(images/blur/IMG_6832.jpg);">
                <img src="./images/newphotos/IMG_6832.jpg" loading="lazy" className="imageshome" alt="Sara on a red bike" width="500" height="700" />
            </div>
        </li>
        <li>
            <div className="blur-load" style="background-image: url(images/blur/IMG_7060.JPG);">
                <img src="./images/newphotos/IMG_7060.JPG" loading="lazy" className="imageshome" alt="Trees lit by green light during dusk" width="500" height="700" />
            </div>
        </li>
        <li>
            <div className="blur-load" style="background-image: url(images/blur/Further-shot.jpg);">
                <img src="./images/newphotos/Further-shot.jpg" loading="lazy" className="imageshome" alt="A Toyota Previa covered in graffiti" width="500" height="700" />
                
            </div></li>
            <li>
                <div className="blur-load" style="background-image: url(images/blur/IMG_6620.JPG);">
                    <img src="./images/newphotos/IMG_6620.JPG" loading="lazy" className="imageshome" alt="Sara on a red bike" width="500" height="700" />
                </div></li>
                <li>
                    <div className="blur-load" style="background-image: url(images/blur/IMG_6632.jpg);">
                        <img src="./images/newphotos/IMG_6632.jpg" loading="lazy" className="imageshome" alt="XOXO venue in between talks" width="500" height="700"/>
                    </div></li>
                    <li>
                        <div className="blur-load" style="background-image: url(images/blur/Artboard\ 1.jpg);">
                            <img src="./images/newphotos/Artboard1.jpg" loading="lazy" className="imageshome" alt="Interesting living room light through a window" width="500" height="700" />
                        </div></li>
                        <li>
                            <div className="blur-load" style="background-image: url(images/blur/IMG_6681.jpg);">
                                <img src="./images/newphotos/IMG_6681.jpg" loading="lazy" className="imageshome" alt="Interesting living room light through a window" width="500" height="700" />
                            </div></li>
                            <li>
                                <div className="blur-load" style="background-image: url(images/blur/IMG_6679.jpg);">
                                    <img src="./images/newphotos/IMG_6679.jpg" loading="lazy" className="imageshome" alt="Trees lit by green light during dusk" width="500" height="700" />
                                </div></li>
                                <li>
                                    <div className="blur-load" style="background-image: url(images/blur/IMG_7223.JPG);">
                                        <img src="./images/newphotos/IMG_7223.JPG" loading="lazy" className="imageshome" alt="Trees lit by green light during dusk" width="500" height="700" />
                                    </div>
                                </li>
                                <li>
                                    <div className="blur-load" style="background-image: url(images/blur/Poster\ 2.jpg);">
                                        <img src="./images/newphotos/Poster2.jpg" loading="lazy" className="imageshome" alt="Trees lit by green light during dusk" width="500" height="700" />
                                    </div></li>
                                </ul> */}
                                
                            </div>
  );
};

export default News;
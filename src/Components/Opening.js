import React from "react";
import { useNavigate } from "react-router-dom";
import './styleOpening.css';

function Opening(){

    const navigate = useNavigate();
    function handleClick(){
        navigate("/Login")
    }
    return(
        <div>
           {/* <div className="opening_center">
                <h1>Audio Palette</h1>
                <h2> How Bad is your Music Taste? <br /> Analyse your music and streaming habits with us</h2>

                    <button onClick={handleClick}> Find Out </button>
            </div> */}
            <div className="for-justify">
                <div className="content left">
                    <h1> Audio </h1>
                    <h1> <i>Palette</i></h1>
                    <p>
                        <i>
                            What is your music taste? Analyze your music with us!
                        </i>
                    </p>
                    <button onClick={handleClick}><i> Get Started </i></button>
                </div>

                <div className="content right content-right">
                    <img id="object-position" src={require("./Pictures/ts1.webp")} width="150" height="150" />
                    <img id="object-position" src={require("./Pictures/sm.png")} width="150" height="150" />
                    <img id="object-position" src={require("./Pictures/or.webp")} width="150" height="150" />
                    <img id="object-position" src={require('./Pictures/hs.webp')} width="150" height="150" />
                </div>
            </div>
        </div>
    )

}
export default Opening
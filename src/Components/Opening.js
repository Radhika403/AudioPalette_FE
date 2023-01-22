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
           <div className="opening_center">
                <h1>Audio Palette</h1>
                <h2> How Bad is your Music Taste? <br /> Analyse your music and streaming habits with us</h2>

                    <button onClick={handleClick}> Find Out </button>
            </div>
        </div>
    )

}
export default Opening
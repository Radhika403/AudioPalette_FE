import React from "react";
import './styleLogin.css';

function Login() {
  return (
    <div>
      <div className="login_center">
        <div className="login_text">
          <p className="first_row"> Hi, Audio Palette is here to analyse your musical taste.</p>
          <p className="second_row"> To get started, it will need to see your Spotify.</p>
          <p className="third_row"> It is just gonna look at what you listen to. </p>
          <p className="fourth_row"> It won't post or change anything. </p>
        </div>
        <div className="login_button">
          <button>
            <a href="http://localhost:8888/login">Login With Spotify</a>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Login
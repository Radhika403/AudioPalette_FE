import React from "react";
import './styleLogin.css';

function Login() {
  return (
    <div>
      <div class="login_center">
        <div class="login_text">
          <p class="first_row"> Hi, I'm an A.I. trained to evaluate musical taste.</p>
          <p class="second_row"> To get started, I'll need to see your Spotify.</p>
          <p class="third_row"> I'm just gonna look at what you listen to. </p>
          <p class="fourth_row"> I won't post or change anything. </p>
        </div>
        <div class="login_button">
          <button>
            <a href="http://localhost:8888/login">Login With Spotify</a>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Login
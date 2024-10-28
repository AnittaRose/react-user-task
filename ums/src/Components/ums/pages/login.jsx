import { useState } from "react";

function login(){
  return(

    <>
    <div class="login_form_container">
            <div className="login_form">
              <form onsubmit="add(event)">

                  <h2>Login</h2>
                  <div className="input_group">
                    <i className="fa fa-user"></i>
                    <input
                      type="text"
                      placeholder="Email"
                      class="input_text"
                      autocomplete="off" id="email" required
                    />
                  </div>
                  <div className="input_group">
                    <i className="fa fa-unlock-alt"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input_text"
                      autocomplete="off" id="password" required
                    />
                  </div>
                  <div><input
                   type="submit" className="button_group" id="login_button"/></div>
  
                  <div class="footer">
                    <a href="./email-verification.html" className="forgot">Forgot Password ?</a>
                    <a>SignUp</a>
                  </div>
                </form>
            </div>
          </div>

    
    </>
  )
        
}

export default login
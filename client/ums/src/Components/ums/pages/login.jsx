import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function login() {

  const [email, setEmail] = useState(''); // State to store email
  const [password, setPassword] = useState(''); // State to store password
  const navigate = useNavigate();

  const add = async (event) => {
    event.preventDefault();
    console.log("reached......");



    let requestData = JSON.stringify({ email, password });
    console.log("requestData", requestData);


    try {
      let response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: requestData
      });
      console.log(response)

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let parsedResponse = await response.json();
      if (!parsedResponse.data) {
          throw new Error('Invalid response structure');
      }

      let { user_type, token, id } = parsedResponse.data;

      let tokenKey = id;
      localStorage.setItem(tokenKey, token);

      let loginCountKey = `${id}_login_count`;
      let loginCount = parseInt(localStorage.getItem(loginCountKey) || 0);

      if (loginCount === 0) {
          localStorage.setItem(loginCountKey, 1);
          alert("This is your first login. Please reset your password.");
          window.location = `resetpassword.html?login=${tokenKey}&id=${id}`;
          return;
      } else {
          loginCount += 1;
          localStorage.setItem(loginCountKey, loginCount);
      }

      console.log(`User has logged in ${loginCount} times`);

      if (user_type === 'Admin') {
         navigate (`/Admin?login=${tokenKey}&id=${id}`)
      } else if (user_type === "Employee") {
        navigate (`/Employe?login=${tokenKey}&id=${id}`)
      }

  } catch (error) {
      console.error("Login failed:", error);
      alert('Failed to login. Please try again.');
  }
  }





  return (

    <>
      <div className="login_container">
        <div className="login_form_container">
          <div className="login_form">
            <form onSubmit={add}>
              <h2>Login</h2>
              <div className="input_group">
                <i className="fa fa-user" />
                <input
                  type="text"
                  placeholder="Email"
                  className="input_text"               
                  id="email"
                  value={email} // Controlled input value
                  onChange={(e) => setEmail(e.target.value)} // Update state
                />
              </div>
              <div className="input_group">
                <i className="fa fa-unlock-alt" />
                <input
                  type="password"
                  placeholder="Password"
                  className="input_text"                  
                  id="password"
                  value={password} // Controlled input value
                  onChange={(e) => setPassword(e.target.value)} // Update state
                />
              </div>
              <div>
                <input type="submit" className="button_group" id="login_button" />
              </div>
              <div className="footer">
                <a href="./email-verification.html" className="forgot">
                  Forgot Password ?
                </a>
                <a>SignUp</a>
              </div>
            </form>
          </div>
        </div>
      </div>


    </>
  )

}

export default login
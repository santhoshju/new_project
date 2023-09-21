import "./LoginScreenTemplate.css";
import { loginString } from './LoginString';
import google from "./Asserts/google.png";
import facebook from "./Asserts/fb-logo-signup.png";
import divumLogo from "./Asserts/Divum.png";
import { Link } from "react-router-dom";
const LoginScreenTemplate = ({handleChange}) => {
  return (
    <div className="fullDiv">
      <form action="">
        <div id="background">
          <div className="inputs">
            <div className="login">
              <h1>{loginString.heading}</h1>
              <p>{loginString.signup} </p>
              <Link to="">Sign up</Link>
            </div>
            <div className="inputboxes">
              <label htmlFor="">{loginString.input1}</label>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="">{loginString.input2}</label>
              <div>
                <input
                  type="password"
                  name="password"
                  id=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label class="container">Two
                <input type="checkbox"/>
                <span class="checkmark"></span>
                </label>
              </div>
              <div style={{ paddingLeft: "100px" }}>
                <input
                  style={{
                    backgroundColor: "#0E86D4",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "white",
                    cursor: "pointer",
                  }}
                  type="submit"
                  // value="LOGIN"

                  className="buttonStyle"
                />
              </div>
              <div>
                <hr className="hr-text" data-content="Or Login With" />
              </div>
              <div className="buttons">
                <div>
                  <img style={{ width: "200px" }} src={google} alt="" />
                </div>
                <div>
                  <img style={{ width: "220px" }} src={facebook} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="images">
            <img
              style={{ height: "40vh", margin: "auto", paddingBottom: "110px" }}
              src={divumLogo}
              alt=""
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginScreenTemplate
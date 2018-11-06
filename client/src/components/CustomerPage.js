import React from "react";
import "./main.css";

const CustomerPage = () => (
    <div className="container">
        <div className="signup-form">
            <div className="sign-main-div">
                {/* {{!-- Route to Developer Reg Page --}} */}
                <div className="switch"><a href="/newdeveloper">Go to Developer Registration Page</a></div>
                <div className="signage">
                    <h2>Customer Registration</h2>
                    <p>Please fill out all required information to begin..</p>
                </div>
                <div className="wrapper-div">
                    <form id="signup" >
                        <div className="form-list">
                            <input required type="text" className="form-ctrl" id="inputFirst" placeholder="First Name" />
                            <input required type="text" className="form-ctrl" id="inputLast" placeholder="Last Name" />
                        </div>
                        <div className="form-list">
                            <input required type="text" className="form-ctrl" id="inputUsername" placeholder="Username (At least 6 characters)" />
                        </div>
                        <div className="form-list">
                            <input required type="password" className="form-ctrl" id="inputPassword1" placeholder="Password (At least 6 characters)" />
                        </div>
                        <div className="form-list">
                            <input required type="password" className="form-ctrl" id="inputPassword2" placeholder="Retype Password (Must Match)" />
                        </div>
                        <div className="form-list">
                            <input required type="text" className="form-ctrl" id="inputLocation" placeholder="Where do you live?" />
                        </div>
                        <div className="form-list">
                            <input required type="text" className="form-ctrl" id="inputPhoto" placeholder="Photo (Must be external URL: https://www.google.com/)" />
                        </div>

                        <button id="customerSubmit" type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </div>
              </div>
          </div>
      </div>
);

export default CustomerPage;

import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Addinfo.css";
import React, { useState, useEffect } from "react";
import Divumlogo from "./Assets/Divum LOGO 2022.svg";

const Addinfo = ({isEmailValid,validateEmail,isFirstNameValid,validateFirstName,isLastNameValid,validateLastName,isMobileValid,validateMobileNumber,isDateValid,validateDateOfBirth,isAddressValid,validateAddress}) => {
const navigate = useNavigate(); 
const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    date_of_birth: "",
    address: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      values.first_name === "" ||
      values.last_name === "" ||
      values.email === "" ||
      values.mobile_number === "" ||
      values.date_of_birth === "" ||
      values.address === "" ||
      !isEmailValid ||
      !isFirstNameValid ||
      !isLastNameValid ||
      !isMobileValid ||
      !isDateValid ||
      !isAddressValid
    ) {
      toast.error(
        "Please fill in all the fields and provide valid information."
      );
      return;
    } else {
      axios
        .post(`http://localhost:5000/api/post`, values)
        .then((res) => {
          if (res.data.message) {
            navigate("/");
            toast.success("New Employee Added");
            console.log(res);
            
          } else if (res.data.error) {
            console.log(error);
          }
        })
        .catch((err) => {
          console.log(err);
        toast.error("email already exists");
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (name === "first_name") {
      validateFirstName(value);
    } else if (name === "last_name") {
      validateLastName(value);
    } else if (name === "email") {
      validateEmail(value);
    } else if (name === "mobile_number") {
      validateMobileNumber(value);
    } else if (name === "date_of_birth") {
      validateDateOfBirth(value);
    } else if (name === "address") {
      validateAddress(value);
    }
  };

  return (
    <div className="whole">
      <div className="image">
        <img src={Divumlogo} alt="" />
      </div>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <div className="design">
            <div className="names">
              <div className="details">
                <input
                  type="text"
                  name="first_name"
                  id="firstname"
                  placeholder="First Name"
                  value={values.first_name || ""}
                  onChange={handleChange}
                />
                {!isFirstNameValid && (
                  <p className="error-message" style={{ color: "red" }}>
                    Please enter a valid first name (characters only).
                  </p>
                )}
              </div>
              <div className="details">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  value={values.last_name || ""}
                  onChange={handleChange}
                />
                {!isLastNameValid && (
                  <p className="error-message" style={{ color: "red" }}>
                    Please enter a valid last name (characters only).
                  </p>
                )}
              </div>
            </div>
            <div className="info">
              <div className="details">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={values.email || ""}
                  onChange={handleChange}
                  onBlur={(e) => {
                    () => validateEmail(e.target.value);
                  }}
                />
                {!isEmailValid && (
                  <p className="error-message" style={{ color: "red" }}>
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div className="details">
                <input
                  type="text"
                  name="mobile_number"
                  id="mobile_number"
                  placeholder="Mobile Number"
                  maxLength={10}
                  minLength={10}
                  value={values.mobile_number || ""}
                  onChange={handleChange}
                />
                {!isMobileValid && (
                  <p className="error-message" style={{ color: "red" }}>
                    Please enter a valid mobile number (10 numbers only).
                  </p>
                )}
              </div>
            </div>
            <div className="basic">
              <div className="details">
                <input
                  type="date"
                  name="date_of_birth"
                  id="dob"
                  min="1997-01-01"
                  max="2023-09-14"
                  placeholder="Date of Birth"
                  value={values.date_of_birth || ""}
                  onChange={handleChange}
                />
                {!isDateValid && (
                  <p className="error-message" style={{ color: "red" }}>
                    Please enter a valid date of birth (not exceeding today's
                    date).
                  </p>
                )}
              </div>
              <div className="details">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  value={values.address || ""}
                  onChange={handleChange}
                />
                {!isAddressValid && (
                  <p className="error-message" style={{ color: "red" }}>
                    Please enter a valid address (up to 10 words).
                  </p>
                )}
              </div>
            </div>
          </div>
          <div>
            <input type="submit" id="save" value="Save" />

            <Link to="/">
              <input type="button" id="goback" value="Go Back" />
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Addinfo;

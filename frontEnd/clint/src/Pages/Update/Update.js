import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Update = ({
  isEmailValid,
  validateEmail,
  isFirstNameValid,
  validateFirstName,
  isLastNameValid,
  validateLastName,
  isMobileValid,
  validateMobileNumber,
  isDateValid,
  validateDateOfBirth,
  isAddressValid,
  validateAddress,
  updatePutApi,
}) => {
  const { email } = useParams();
  const Navigate = useNavigate();

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    date_of_birth: "",
    address: "",
  });


  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${email}`)
      .then((res) => {
        const data = res.data[0];
        console.log(data.date_of_birth);
        setValues({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          mobile_number: data.mobile_number,
          date_of_birth: data.date_of_birth,
          address: data.address,
        });
      })
      .catch((err) => console.log(err));
  }, [email]);

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

  const handleSubmit = (e) => {
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
      window.alert("please provied valied details");

      toast.error(
        "Please fill in all the fields and provide valid information."
      );
      return;
    } else {
      console.log("++++++++++");
      console.log(values.email);
      e.preventDefault();
      updatePutApi(values);
      // axios
      //   .put(`http://localhost:5000/api/put/${email}`, values)
      //   .then((res) => {
      //     Navigate("/");
      //     toast.success("Details Updated successfully");
      //   })
      //   .catch((err) => console.log(err));
    }
  };

  return (
    <div className="whole">
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
                  value={values.first_name}
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
                  value={values.last_name}
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
                  value={values.email}
                  onChange={handleChange}
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
                  value={values.mobile_number}
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
                  type="text"
                  name="date_of_birth"
                  id="dob"
                  min="1997-01-01"
                  max="2023-09-14"
                  placeholder="Date of Birth"
                  value={values.date_of_birth}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  value={values.address}
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
            <input
              style={{
                backgroundColor: "rgba(11, 55, 233, 0.98)",
                borderRadius: "14px",
                "fontSize": "25px",
                "fontWeight": "bold",
                color: "white",
              }}
              type="submit"
              id="Save"
              value="Save"
            />

            <Link to="/">
              <input
                style={{
                  backgroundColor: "green",
                  borderRadius: "14px",
                  "fontSize": "25px",
                  "fontWeight": "bold",
                  color: "white",
                }}
                type="button"
                id="Go Back"
                value="Go Back"
              />
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Update;

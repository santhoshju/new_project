import React from "react";
import axios from "axios";
import Update from "./Update";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateScreenApi = () => {
  const navigate = useNavigate();

  const updatePutApi = async (values) => {
    const email = values.email;

    await axios
      .put(`http://localhost:5000/api/put/${email}`, values)
      .then((res) => {
        navigate("/");
        toast.success("Details Updated successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Update updatePutApi={updatePutApi} /> {/* Pass updatePutApi as a prop */}
      <ToastContainer />
    </div>
  );
};

export default UpdateScreenApi;

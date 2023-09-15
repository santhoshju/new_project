import React from 'react';
import axios from 'axios';
import Home from './Home';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';


const HomeScreenApi = () => {

    const [data, setData] = useState([]);
    const loadData = async () => {
      const res = await axios.get("http://localhost:5000/api/get");
      setData(res.data);
    };
    

    const deleteEmp = (email) => {
      if (
        window.confirm("are you sure that you want to delete this employee?")
      ) {
        axios.delete(`http://localhost:5000/api/delete/${email}`);
        toast.success("employee details successfully deleted");
        setTimeout(() => loadData(), 500);
      }
    };
  return (
    <div>
      <Home
        data={data}
        setData={setData}
        loadData={loadData}
        deleteEmp={deleteEmp}
      />
      <ToastContainer/>
    </div>
  );
}

export default HomeScreenApi
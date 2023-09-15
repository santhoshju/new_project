import './Home.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const Home = ({data,loadData, deleteEmp}) => {
  

  useEffect(() => {
    loadData();
  }, []);
  
  return (
    <div style={{}}>
      {/* <div className="image">
        <img src={Divumlogo} alt="" />
      </div> */}
      <Link to="/addContact">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn btn-contact"> Add Employee</button>
        </div>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Id</th>
            <th style={{ textAlign: "center" }}>First Name</th>
            <th style={{ textAlign: "center" }}>Last Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Mobile Number</th>
            <th style={{ textAlign: "center" }}>DOB</th>
            <th style={{ textAlign: "center" }}>Address</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="rows">{index + 1}</th>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.mobile_number}</td>
                <td>{item.date_of_birth}</td>
                <td>{item.address}</td>
                <td>
                  <Link to={`update/${item.email}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>

                  <Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => {
                        deleteEmp(item.email);
                      }}
                    >
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default Home;

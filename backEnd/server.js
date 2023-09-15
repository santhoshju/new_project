const express = require("express");
const app = express();
const pool = require("./dbConnection");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/api/get", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM employee ORDER BY id DESC");
    res.json(data.rows);
  } catch (error) {
    console.log("error" + error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/get/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const getEmail = await pool.query(
      "SELECT * FROM employee WHERE email = $1",
      [email]
    );
    res.json(getEmail.rows);
  } catch (error) {
    console.log("error" + error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/post", async (req, res) => {
  console.log("error");
  const {
    first_name,
    last_name,
    email,
    mobile_number,
    date_of_birth,
    address,
  } = req.body;

  const sqlInsert =
    "INSERT INTO employee(first_name,last_name,email,mobile_number,date_of_birth,address) VALUES ($1, $2, $3, $4, $5, $6)";
  try {
    const result = await pool.query(sqlInsert, [
      first_name,
      last_name,
      email,
      mobile_number,
      date_of_birth,
      address,
    ]);
    console.log("data successfully inserted");
    res.status(201).json({ message: "Record inserted successfully" });
  } catch (err) {
    console.error("Error inserting data:", err.message); // Log the error message
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/api/delete/:email", async (req, res) => {
  const { email } = req.params;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  const sqlRemove = "DELETE FROM employee WHERE email = $1";
  try {
    await pool.query(sqlRemove, [email]);
    return res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// app.put("/api/put/:email", (req, res) => {
//   const { email } = req.params;
//   const { first_name, last_name, mobile_number, date_of_birth, address } = req.body;

//   const sqlUpdate =
//     "UPDATE employee SET first_name=$1, last_name=$2, email=$3 , mobile_number=$4, date_of_birth=$5, address=$6 WHERE email=$7";

//   pool.query(
//     sqlUpdate,
//     [first_name, last_name,email, mobile_number, date_of_birth, address, email],
//     (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: "Internal Server Error" });
//       } else {
//         res.status(200).json({ message: "Record updated successfully" });
//       }
//     }
//   );
// });

// Update route
app.put("/api/put/:email", (req, res) => {
  const { email } = req.params;
  const {
    first_name,
    last_name,
    mobile_number,
    date_of_birth,
    address,
    newEmail,
  } = req.body;

  const sqlUpdate =
    "UPDATE employee SET first_name=$1, last_name=$2, mobile_number=$3, date_of_birth=$4, address=$5 WHERE email=$6";

  pool.query(
    sqlUpdate,
    [first_name, last_name, mobile_number, date_of_birth, address, email],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        if (newEmail) {
          const sqlInsert =
            "INSERT INTO employee (first_name, last_name, email, mobile_number, date_of_birth, address) VALUES ($1, $2, $3, $4, $5, $6)";
          pool.query(
            sqlInsert,
            [first_name, last_name, newEmail, mobile_number, date_of_birth, address],
            (insertErr, insertResult) => {
              if (insertErr) {
                console.error(insertErr);
                res.status(500).json({ error: "Internal Server Error" });
              } else {
                const sqlDelete = "DELETE FROM employee WHERE email=$1";
                pool.query(sqlDelete, [email], (deleteErr, deleteResult) => {
                  if (deleteErr) {
                    console.error(deleteErr);
                    res.status(500).json({ error: "Internal Server Error" });
                  } else {
                    res.status(200).json({ message: "Record updated successfully" });
                  }
                });
              }
            }
          );
        } else {
          res.status(200).json({ message: "Record updated successfully" });
        }
      }
    }
  );
});



app.listen(5000, () => {
  console.log("Listening on port 5000");
});

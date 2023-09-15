const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "emp_database",
  password: "root",
  port: 5432,
});
// const quertTest  = async () =>{
//     try{
//         const result = await pool.query('select * from employee');
//         console.log(result.rows);
//     }catch(error){
//         console.log(error);
//     }finally{
//         pool.end();
//     }
// }

// quertTest();

module.exports = pool;

import React, { useState } from 'react'
import LoginScreenTemplate from './LoginScreenTemplate';

const LoginLogic = () => {

  const[data,setData] = useState({
    email : "",
    password: ""
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setData({...data,[name]:value});
    console.log(data);
  }

  return (
   <>
   <LoginScreenTemplate  data = {data} handleChange = {handleChange} />
   </>
  )
}

export default LoginLogic
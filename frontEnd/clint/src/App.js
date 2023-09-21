import Validation from "./Pages/Validation";
import HomeScreenApi from "./Pages/Home/HomeScreenApi";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import UpdateFormValidation from "./Pages/Update/UpdateFormValidation";
import LoginLogic from "./Pages/Login/LoginLogic";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLogic />} />
        <Route path="/" element={<HomeScreenApi />} />
        <Route path="/addContact" element={<Validation />} />
        <Route path="/update/:email" element={<UpdateFormValidation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

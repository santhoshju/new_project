import Update from "./Pages/Update/Update";
import Validation from "./Pages/Validation";
import HomeScreenApi from "./Pages/Home/HomeScreenApi";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import UpdateFormValidation from "./Pages/Update/UpdateFormValidation";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreenApi/>} />
        <Route path="/addContact" element={<Validation />} />
        <Route path="/update/:email" element={<UpdateFormValidation/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

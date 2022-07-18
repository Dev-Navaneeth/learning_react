import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employeelist from './containers/Employeelist';
import EmployeeForm from './containers/EmployeeForm';
import AddData from './containers/AddData';
import "./css/style.css";
import "./css/tableStyle.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employeelist/>}></Route>
        <Route path="/employeeForm/:empid" element={<EmployeeForm/>} />
        <Route path="/addData" element={<AddData/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;

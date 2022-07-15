import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employeelist from './Employeelist';
import EmployeeForm from './EmployeeForm';
import AddData from './AddData';
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

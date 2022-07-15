import React from 'react'; 
// import Car from './Car';
// import Goal from './Goal';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Form from './Form';
import Employeelist from './Employeelist';
import EmployeeForm from './EmployeeForm';
import AddData from './AddData';
import "./css/style.css";
import "./css/tableStyle.css";

// import Counter from './UseEffect';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Employeelist />}>
    
    
    </Route>
    <Route path="/employeeForm/:id" element={<EmployeeForm />} />
    <Route path="/addData" element={<AddData />} />
   
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;

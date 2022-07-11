import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
// import ReactDOM from 'react-dom/client';


const DataTable = () => { 
  const [empDetails,setEmpDetails] = useState([]);
  
  
const getEmpDetails = async () => {
try{
  let response = await axios.get('http://localhost:3600/getDetails');
  // console.log(response);
  setEmpDetails(response.data);
}catch(err){
console.log(err.message);
}
 
 
}

useEffect(() => {
  getEmpDetails();
}, []);
console.log(empDetails);
  return (
    <>
      <table cellPadding={5} border={2}>
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Emp Name</th>
            <th>Emp Age</th>
            <th>Emp Address</th>
            <th>Emp Salary</th>
            <th>Emp Image</th>
            <th>Emp city</th>
            <th>Emp state</th>
            <th>Emp Country</th>

          </tr>
        </thead>

        <tbody>
          {
            empDetails.map((emp,index)=>(
             
              <tr key={emp.empid}>
                <td>{index+1}</td>
                <td>{emp.empid}</td>
                <td>{emp.empName}</td>
                <td>{emp.age}</td>
                <td>{emp.address}</td>
                <td>{emp.salary}</td>
                <td>{emp.imgsrc}</td>
                <td>{emp.city}</td>
                <td>{emp.state}</td>
                <td>{emp.country}</td>
              </tr>
            ))
          }
        </tbody>
       
      </table>

     
    </>
  )
}



export default DataTable
import React, { useState, useEffect } from "react";
import axios from "axios";
// import EmployeeForm from "./EmployeeForm";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";





const Employeelist = () => {
 
    const [employee, setEmployee] = useState([]);
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYWxhcnkiOjU5NzgzNCwiaWF0IjoxNjU3NjMzMzQxfQ.GNumNzEXd4ntmngC37t5IZIhtMqlrg5y4myDjGlm7aQ";
    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization: token,
    // };
  //   const url = "http://localhost:3700/showEmpDetails";
 
  //   const fetching = async () => {
    
  //         const res = await axios.get(url,{headers})
  //         setEmployee(res.data)
    
  // }
  // useEffect(()=>fetching(),[])

  useEffect(()=>{
        
    axios.get('http://localhost:3700/showEmpDetails').then(res=>{
        setEmployee(res.data)
            
    }
            

    )

},[])

    const deleteEmployee= async (empid) => {
     console.log(empid);
     await axios
        .delete(
  `http://localhost:3700/deleteEmp/${empid}`)
        .then((res) => {
          if (res.status === 200) {
            alert("Student successfully deleted");
            window.location.reload();
          } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));}

      

const navigate=useNavigate();


      
      const passId = (empid)=>{
        
        navigate(`/employeeForm/`+empid) 
       
  
      }
      
      



  

       

       
      return(
        <>
         
        <div className="container table-container">
        
        
        <div className="table-title"><h1 className="text-center pt-3 pb-2">EMPLOYEE DETAILS</h1></div>
      <table className="table mb-5 table-hover table-striped" >
          <thead className="thead">
            <tr>
              <th className="h4 text-center">Emp Id</th>
              <th className="h4 text-center">Emp Name</th>
              <th className="h4 text-center">Age</th>
              <th className="h4 text-center">Address</th>
              <th className="h4 text-center">Salary</th>
            
              <th className="h4 text-center">City</th>
              <th className="h4 text-center">State</th>
              <th className="h4 text-center">Country</th>
              <th className="h4 text-center">Edit</th>
              <th className="h4 text-center">Delete</th>
           
            </tr>
          </thead>
          <tbody>
            {
               employee.map((data,i) => {
                  return (
                    <tr key={i}>
                      <td className="text-center p-3 lead">{data.empid}</td>
                      <td className="text-center p-3 lead">{data.empname}</td>
                      <td className="text-center p-3 lead">{data.age}</td>
                      <td className="text-center p-3 lead">{data.address}</td>
                      <td className="text-center p-3 lead">{data.salary}</td>
                  
                      <td className="text-center p-3 lead">{data.cityname}</td>
                      <td className="text-center p-3 lead">{data.statename}</td>
                      <td className="text-center p-3 lead">{data.countryname}</td>
                      <td><button type="button" className="btn edit-btn"   onClick={()=>passId(data.empid)}>Edit
                      </button></td>
                      <td><button size="sm" className="btn delete-btn" onClick={()=>deleteEmployee(data.empid)}>
                      Delete</button></td>
                    </tr>
                    
                    
                  )
                }) 
              }
        
            
          </tbody>
        
        </table>
        
        <div className="addSection">
          <h5 className="add-title">To add Employee:  </h5>
            {/* <button type="button" class="btn btn-sm addEmpBtn"  onClick={navAdd}>Add Employee </button> */}
       <Link to='/addData' className="btn btn-sm addEmpBtn">Add Employee</Link>
        </div>
        <div></div>
      </div>
      
      </>
      )

      
}

export default Employeelist;





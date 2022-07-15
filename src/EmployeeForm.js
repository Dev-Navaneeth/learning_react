import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EmployeeForm = () => {
const [empname, setEmpName] = useState("");
const [age, setAge] = useState("");
const [address, setAddress] = useState("");
const [salary, setSalary] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [country, setCountry] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
   }   

const navigate=useNavigate()
const params = useParams()
const submitData =()=>{
  
    const updatedData={empname,age,address,salary,city,state,country}
    console.log(updatedData);
    axios.put(`http://localhost:3700/updateById/${params.id}`,updatedData)
    .then(res=>{
        console.log(res);
        navigate('/')
        
    })
    .catch((err)=>{
        console.log(err);
    })
    
    
}

return (
   
     <div className="container">
     <div className="card">
      <div className="card-header p-2">
      <h2>UPDATE fORM</h2>
      </div>
      <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group">

        <input name="empname" type="text" className="form-control" value={empname} 
        onChange={(e) => setEmpName(e.target.value)} placeholder={"Employee Name"}/>
        </div>
        <div className="form-group">
     
        <input name="age" type="text" placeholder={"Age"} className="form-control mt-3 p-2" value={age} onChange={(e) => setAge(e.target.value) }
        />
        </div>
        <div className="form-group">
        
        <input name="address" type="text" className="form-control mt-3 p-2" placeholder={"Address"} value={address} 
        onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="form-group">
     
        <input name="salary" type="text" placeholder={"Salary"} className="form-control mt-3 p-2" value={salary} 
        onChange={(e) => setSalary(e.target.value)}/>
        </div>
        
        <div className="form-group">
      
        <input name="city" type="text" placeholder={"City"} className="form-control mt-3 p-2" value={city} 
        onChange={(e) => setCity(e.target.value)}/>
        </div>
        <div className="form-group">
      
        <input name="state" type="text" placeholder={"State"} className="form-control mt-3 p-2" value={state} 
       onChange={(e) => setState(e.target.value)}/>
        </div>
        <div className="form-group">
       
        <input name="country" type="text" placeholder={"Country"} className="form-control mt-3 p-2" value={country} 
       onChange={(e) => setCountry(e.target.value)}/>
        </div>

        
    </form>
      </div>
      <div className="card-footer">
      <input type={"submit"} className={"btn updateBtn"} onClick={submitData} />  
      </div>

     </div>

     
       
     </div>
    


   
  )
}

export default EmployeeForm
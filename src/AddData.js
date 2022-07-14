import React, { useState} from "react";
import axios from "axios";
const handleSubmit = (event) => {
    event.preventDefault();
    
    
  } 
  
const AddData = () => {
    const [empId,setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
const [age, setAge] = useState("");
const [address, setAddress] = useState("");
const [salary, setSalary] = useState("");
// const [image, setImage] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [country, setCountry] = useState("");
console.log(empId);   
console.log(empName);   
console.log(age);   
console.log(address);   
console.log(salary);   
// console.log(image);   
console.log(city);   
console.log(state);   
console.log(country);   
const updatedDetails = {
    "empid": empId,
    "empname" : empName,
    "age":parseInt(age),
    "address":address,
    "salary":parseInt(salary),
    "image":null,
    "city":parseInt(city),
    "state":parseInt(state),
    "country":parseInt(country)
}


const submitData = ()=>{
    const data = [parseInt(empId),empName,parseInt(age),address,parseInt(salary),parseInt(city),parseInt(state),parseInt(country)]
    // const data = updatedDetails
    console.log(data);
    axios.post("http://localhost:3700/registering",updatedDetails).then(res=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err.message);
    })
    window.location.reload();
}
  return (

    

    <div className="container mt-5">
       
    <h1>Add Employee:</h1>
     <form onSubmit={handleSubmit} className={"mt-3"}>
      <div className="form-group">
     
      <input name="empid" type="text" className="form-control mt-3" value={empId} 
      onChange={(e) => setEmpId(e.target.value)} placeholder={"Employee Id"}/>
      </div>
      <div className="form-group">
     
      <input name="empname" type="text" className="form-control mt-3" value={empName} 
      onChange={(e) => setEmpName(e.target.value)} placeholder={"Employee Name"}/>
      </div>
      <div className="form-group">
   
      <input name="age" type="text" className="form-control mt-3" value={age} onChange={(e) => setAge(e.target.value)}
      placeholder={"Employee age"}/>
      </div>
      <div className="form-group">
  
      <input name="address" type="text" placeholder={"Address"} className="form-control mt-3" value={address} 
      onChange={(e) => setAddress(e.target.value)}/>
      </div>
      <div className="form-group">
   
      <input name="salary" placeholder={"Salary"} type="text" className="form-control mt-3" value={salary} 
      onChange={(e) => setSalary(e.target.value)}/>
      </div>
      {/* <div className="form-group">

      <input name="image" placeholder={"Select Image"} type="file" className="form-control mt-3" value={image } 
      onChange={(e) => setImage(e.target.value)}/>
      </div> */}
      <div className="form-group">
     
      <input name="city" placeholder={"City code"} type="text" className="form-control mt-3" value={city} 
      onChange={(e) => setCity(e.target.value)}/>
      </div>
      <div className="form-group">
   
      <input name="state" type="text" className="form-control mt-3" value={state} 
     onChange={(e) => setState(e.target.value)} placeholder={"State code"}/>
      </div>
      <div className="form-group">
  
      <input name="country" placeholder={"Country code"} type="text" className="form-control mt-3" value={country} 
     onChange={(e) => setCountry(e.target.value)}/>
      </div>

     
 
      <input type="submit" className="btn btn-primary mt-3" onClick={submitData}/>
    
  </form>

     </div>
  )
}

export default AddData
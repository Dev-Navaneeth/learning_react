import React, { useState, useEffect } from "react";


import axios from "axios";


  const handleSubmit = (event) => {
    event.preventDefault();
    
    
  }






  
const EmployeeForm = (props) => {
console.log(props.empid);
    const [empName, setEmpName] = useState("");
const [age, setAge] = useState("");
const [address, setAddress] = useState("");
const [salary, setSalary] = useState("");

const [city, setCity] = useState("");
const [state, setState] = useState("");
const [country, setCountry] = useState("");
console.log(empName);   
console.log(age);   
console.log(address);   
console.log(salary);   
  
console.log(city);   
console.log(state);   
console.log(country);   


// const updatedDetails = {
//     "empname" : empName,
//     "age":parseInt(age),
//     "address":address,
//     "salary":parseInt(salary),
  
//     "city":parseInt(city),
//     "state":parseInt(state),
//     "country":parseInt(country)
// }
// const jsonData = JSON.stringify(updatedDetails)



const submitData = (id) => {
    alert(id)
    axios
      .put(
        "http://localhost:3700//updateEmp/" +
          id,
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
         
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group">

        <input name="empname" type="text" className="form-control" value={empName} 
        onChange={(e) => setEmpName(e.target.value)} placeholder={"Employee Name"}/>
        </div>
        <div className="form-group">
     
        <input name="age" type="text" placeholder={"Age"} className="form-control mt-3" value={age} onChange={(e) => setAge(e.target.value) }
        />
        </div>
        <div className="form-group">
        
        <input name="address" type="text" className="form-control mt-3" placeholder={"Address"} value={address} 
        onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="form-group">
     
        <input name="salary" type="text" placeholder={"Salary"} className="form-control mt-3" value={salary} 
        onChange={(e) => setSalary(e.target.value)}/>
        </div>
        
        <div className="form-group">
      
        <input name="city" type="text" placeholder={"City"} className="form-control mt-3" value={city} 
        onChange={(e) => setCity(e.target.value)}/>
        </div>
        <div className="form-group">
      
        <input name="state" type="text" placeholder={"State"} className="form-control mt-3" value={state} 
       onChange={(e) => setState(e.target.value)}/>
        </div>
        <div className="form-group">
       
        <input name="country" type="text" placeholder={"Country"} className="form-control mt-3" value={country} 
       onChange={(e) => setCountry(e.target.value)}/>
        </div>

        {/* <input type={"submit"} className={"btn btn-warning"} onSubmit={submitData} /> */}
    </form>
      </div>
      <div class="modal-footer bg-dark text-white">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" onClick={()=>submitData(props.empid)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
   
  )
}

export default EmployeeForm
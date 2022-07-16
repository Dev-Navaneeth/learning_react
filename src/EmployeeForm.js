import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { json } from "body-parser";

const EmployeeForm = () => {


// const [employee, setEmployee] = useState([]);

const [empname, setEmpName] = useState("");
console.log(empname);
const [age, setAge] = useState("");
console.log(age);
const [address, setAddress] = useState("");
console.log(address);
const [salary, setSalary] = useState("");
console.log(salary);
const [city, setCity] = useState("");
console.log(city);
const [state, setState] = useState("");
console.log(state);
const [country, setCountry] = useState("");
console.log(country);







const navigate=useNavigate()
const params = useParams()
useEffect(()=>{
        
  axios.get(`http://localhost:3700/getById/${params.empid}`).then(res=>{
    setEmpName(res.data[0].empname);         
    setAge(res.data[0].age);
    setAddress(res.data[0].address);
    setCity(res.data[0].cityname);
    setSalary(res.data[0].salary);
    setState(res.data[0].statename);
    setCountry(res.data[0].countryname)
          
  }
          

  )

},[])
// const url = `http://localhost:3700/getById/${params.empid}`;
// const fetching = async () => {
//   try{
//       const res = await axios.get(url)
//       console.log("=======================");   
     
//       setEmpName(res.data[0].empname);         
//       setAge(res.data[0].age);
//       setAddress(res.data[0].address);
//       setCity(res.data[0].cityname);
//       setSalary(res.data[0].salary);
//       setState(res.data[0].state);
//       setCountry(res.data[0].countryname)

//   } catch (error) {
//       console.log('error')
//   }
// }
// useEffect(()=>fetching(),[])
const submitData =(event)=>{
    event.preventDefault();
    const updatedData={empname,age,address,salary,city,state,country}
    console.log(updatedData);
    axios.put(`http://localhost:3700/updateById/${params.empid}`,updatedData)
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
      <form onSubmit={submitData}>
        <div className="form-group">

        <input name="empname" type="text" className="form-control" value={empname} 
        onChange={(e) => setEmpName(e.target.value)} placeholder={empname}/>
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

        <div className="card-footer">
      {/* <input type={"submit"} className={"btn updateBtn"} onClick={submitData} />   */}
      <button type={"submit"} className={"btn updateBtn"} >submit</button>
      </div>
    </form>
      </div>
      

     </div>

     
       
     </div>
    


   
  )
}

export default EmployeeForm
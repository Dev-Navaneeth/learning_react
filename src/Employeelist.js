import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";
import {Link } from "react-router-dom";


const Employeelist = () => {
    const [employee, setEmployee] = useState([]);
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYWxhcnkiOjU5NzgzNCwiaWF0IjoxNjU3NjMzMzQxfQ.GNumNzEXd4ntmngC37t5IZIhtMqlrg5y4myDjGlm7aQ";
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    const url = "http://localhost:3700/showEmpDetails";
    // useEffect(() => {
    //   axios.get(url, { headers })
    //     .then(({ data }) => {
    //       // console.log(data);
    //       setEmployee(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);   
    //     });
    // }, []);
    const fetching = async () => {
      try{
          const res = await axios.get(url,{headers})
          setEmployee(res.data)
      } catch (error) {
          console.log('error')
      }
  }
  useEffect(()=>fetching(),[])

    console.log(employee);
    // const DataTable = () => {
    //     return employee.map((res, i) => {
    //       return <EmployeeTableRow obj={res} key={i} />;
    //     });
    //   };
    const handleSubmit = (event) => {
      event.preventDefault();
      
      
    }
    const deleteEmployee= (empid) => {
     console.log(empid);
      axios
        .delete(
  `http://localhost:3700/deleteEmp/${empid}`)
        .then((res) => {
          if (res.status === 200) {
            alert("Student successfully deleted");
            window.location.reload();
          } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));}

      
      


    const [Data,setData] = useState([])
     console.log("Data",Data[0]);

  const [empName, setEmpName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [salary, setSalary] = useState("");
 
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
        const getId = async (empid)=>{
          console.log(empid);
          // let finalData = [empid,empName,parseInt(age),address,parseInt(salary),parseInt(city),parseInt(state),parseInt(country)];
          // console.log(finalData);

          try{
            const res = await axios.get( `http://localhost:3700/getById/${empid}`,{headers})
            // console.log(res.data);
            setData(res.data)
        } catch (error) {
            console.log('error')
        }
            
        }

       

       
      return(
        <>
         
        <div className="container">
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
        <button type="submit" class="btn btn-primary" >Save changes</button>
      </div>
    </div>
  </div>
</div>
        
        <h1 className="text-center pt-3 pb-2">Employee Details</h1>
      <table class="table table-secondary m-5 table-bordered table-striped" >
          <thead>
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
                      {/* <td><Link to="/employeeForm"><button type="button" class="btn btn-primary" >
  Edit
</button></Link></td> */}
                    <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>getId(data.empid)}>
  Edit
</button></td>
                      
                      <td>
                        
     
        <button size="sm" className="btn btn-danger" onClick={()=>deleteEmployee(data.empid)}>
       
          Delete
        </button>
      </td>
      
                    </tr>
                  )
                }) 
              }
        
            
          </tbody>
        
        </table>
        
        <h5>To add Details:<Link to="/addData"><button type="button" class="btn btn-primary" >
  click here
</button></Link></h5>
      </div>
      
      </>
      )

      
}


export default Employeelist;





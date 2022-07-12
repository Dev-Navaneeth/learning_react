
import React, { useState, useEffect } from "react";
import axios from "axios";
// import EmployeeTableRow from "./EmployeeTableRow";

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

      return(
        <>
        
        <div className="container">
        <h1 className="text-center pt-3 pb-2">Employee Details</h1>
      <table class="table table-secondary m-5 table-bordered table-striped" >
          <thead>
            <tr>
              <th className="h4 text-center">Emp Id</th>
              <th className="h4 text-center">Emp Name</th>
              <th className="h4 text-center">Age</th>
              <th className="h4 text-center">Address</th>
              <th className="h4 text-center">Salary</th>
              <th className="h4 text-center">ImgSrc</th>
              <th className="h4 text-center">City</th>
              <th className="h4 text-center">State</th>
              <th className="h4 text-center">Country</th>
           
            </tr>
          </thead>
          <tbody>
            {
               employee.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td className="text-center p-3 lead">{data.empid}</td>
                      <td className="text-center p-3 lead">{data.empname}</td>
                      <td className="text-center p-3 lead">{data.age}</td>
                      <td className="text-center p-3 lead">{data.address}</td>
                      <td className="text-center p-3 lead">{data.salary}</td>
                      <td className="text-center p-3 lead">{data.imgsrc}</td>
                      <td className="text-center p-3 lead">{data.cityname}</td>
                      <td className="text-center p-3 lead">{data.statename}</td>
                      <td className="text-center p-3 lead">{data.countryname}</td>
                    </tr>
                  )
                }) 
              }
        
            
          </tbody>
        
        </table>
      </div>
      </>
      )

      
}


export default Employeelist;





// https://ttprivatenew.s3.amazonaws.com/pulse/premkumar/attachments/19849391/TinyTake12-07-2022-08-58-21.mp4

// Today Status:
// - Data fetching and displaying using reactjs task completed
// -Learned about CORS 
// -Learned how to set jwt token in browser using axios
// -Learned how to set access control, authorization through header using middleware 
// Tommorow task: 
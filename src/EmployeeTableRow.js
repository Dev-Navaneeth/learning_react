
import React from "react";



const EmployeeTableRow = (props) => {
    const {empId,empName,age,address,salary,imgsrc,city,state,country} = props.obj;
  return (
    <tr>
        <td>{empId}</td>
        <td>{empName}</td>
        <td>{age}</td>
        <td>{address}</td>
        <td>{salary}</td>
        <td>{imgsrc}</td>
        <td>{city}</td>
        <td>{state}</td>
        <td>{country}</td>
    </tr>
  )
}

export default EmployeeTableRow
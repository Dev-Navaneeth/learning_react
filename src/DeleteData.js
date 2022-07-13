import React from "react";
import axios from "axios";


    const DeleteEmployee= (props) => {
        console.log(props.empid);
        axios
          .delete(
    `http://localhost:3700/deleteEmp/${props.empid}`)
          .then((res) => {
            if (res.status === 200) {
              alert("Student successfully deleted");
              window.location.reload();
            } else Promise.reject();
          })
          .catch((err) => alert("Something went wrong"));
          return(
            <>
            <button size="sm" variant="danger"className="btn btn-danger" onClick={DeleteEmployee}>
              Delete
            </button>
            </>
        )
      };
      
       
       
    
  


export default DeleteEmployee;
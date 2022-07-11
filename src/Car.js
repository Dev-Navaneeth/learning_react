
import React from 'react';   

function Car(props) {
    return <h2>I am a {props.color} Car!</h2>;
  }

function Garage(){
    return(
        <>
         <h1>Cars in Garage</h1>
         <Car color = "red"/>
        </>
       
    )
}
  
export default Garage;  
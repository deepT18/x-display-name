import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from "react";

function App() {

  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [fullName,setFullName]=useState('')

 const validateInput=()=>{
  if(firstName===""||lastName===""){
    alert("Please Fill out This Field")
    return false;
  }else{
    return true;
  }
 }

 const onSubmit=(e)=>{
  e.preventDefault()
  if(validateInput()){
    setFullName(`Full Name: ${firstName} ${lastName}`)
  }
 }

  return (
    <form onClick={onSubmit}>
     <h2>Full Name Display</h2>
     <label>First Name:</label>
     <input onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="Enter First Name"/><br/>
     <label>Last Name:</label>
     <input onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Enter Last Name"/><br/>
     <button>Submit</button>
     <p value={fullName}>{fullName}</p>
    </form>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from "react";

function App() {

  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [fullName,setFullName]=useState('')
  const [showFullName, setShowFullName] = useState(false)

//  const validateInput=()=>{
//   if(firstName===""||lastName===""){
//     return false;
//   }else{
//     return true;
//   }
//  }

 const onSubmit=(e)=>{
  e.preventDefault()
 if(firstName===""||lastName===""){
  setShowFullName(false)
  // alert('please fill the details')
 }else{
  setFullName(`Full Name: ${firstName} ${lastName}`)
  setShowFullName(true)
 }
 }

  return (
    <div>
    <form onClick={onSubmit} type="text">
     <h2>Full Name Display</h2>
     <label>First Name:</label>
     <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="Enter First Name"/><br/>
     <label>Last Name:</label>
     <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Enter Last Name"/><br/>
     <button type="submit">Submit</button>
    </form>
    {showFullName && <p>{fullName}</p>}
    </div>
  );
}

export default App;

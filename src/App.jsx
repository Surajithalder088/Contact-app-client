import react from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router, Route  } from "react-router-dom";
import axios from "axios"
/*
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import Header from "./components/Header"
import ContactList from "./components/ContactList"*/
import AddUser from "../components/AddUser.jsx";
import UserList from "../components/UserList.jsx"
import Header from "../components/Header.jsx";
function App() {
 

const [lists,setLists] = useState([])
  
  
 useEffect(() => {
  
   axios.get("/api")
    .then((response)=>{  setLists(response.data)})
  .catch((error)=>{console.log(error);})
 
 })
 
const addContactHandler= async (item)=>{
  const added=  await axios.post('/api/post',item)
  setLists([added.data,...lists])
}
const removeContactHandle=async(_id)=>{
 const delres= await axios.delete(`/api/${_id}`)
 alert(delres.data);

}
  return (
   <>
  <Header/>

  <AddUser addContactHandler={addContactHandler} />
  <UserList lists={lists} getUserId={removeContactHandle}/>
   </>
  )
}

export default App

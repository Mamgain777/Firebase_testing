import React, { useState } from 'react'
import {app} from './scripts'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getDatabase, set,ref } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { useNavigate } from 'react-router-dom';



function Signup() {
    const [data, setData] = useState({
        'email': "",
        "password": "",
        "username": ""
    })

    const navigate = useNavigate()

    const change = (event)=>{
        const key = event.target.name
        const value = event.target.value
        setData(prev=>({...prev,[key]:value}))
    }

    const submit = async (event)=>{
      event.preventDefault()
      console.log("Saving Data")
      console.log(data)
      createData()
      navigate("/phone")
    }

    function createData(){
      const database = getDatabase(app);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        set(ref(database, 'users/' + user.uid),{
            username: data.username,
            email: data.email
        })
        alert('User Created')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
    }
    
  return (
    <div>
      <form className='container' style={{marginTop:"20px"}} onSubmit={submit}>
        <h2 className='text-center'>Sign Up Form</h2>
        <input type="email" name='email' value={data.email} placeholder='Enter email' className='form-control' onChange={change} required={true}/>
        <input type="text" name='username' value={data.username} placeholder='Enter username' className='form-control' onChange={change} required={true}/>
        <input type="password" name='password' value={data.password} placeholder='Enter password' className='form-control' onChange={change} required={true}/>
        <input type="submit" className="btn btn-success" />
      </form>
    </div>
  )
}

export default Signup;

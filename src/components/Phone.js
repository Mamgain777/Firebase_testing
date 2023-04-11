import React, { useEffect, useState } from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import {app} from './scripts'

function Phone() {
    
    const auth = getAuth(app);
    const [phone, setPhone] = useState("")
    const [otp, setOTP] = useState("")

    const change = (event)=>{
        // const key = event.target.name
        const value = event.target.value
        setPhone(value)
    }

    const submit = async (event)=>{
        event.preventDefault()
        console.log("Saving Form")
        generateRecaptcha()
        const appVerifier = window.recaptchaVerifier;
        const phoneNo = "+91".concat(phone)
        signInWithPhoneNumber(auth,phoneNo, appVerifier).then((confirmationResult) => {
            alert('OTP SEND')
            window.confirmationResult = confirmationResult;
        }).catch((error) => {
            // console.log(error)
            alert(error)
            
        });
        document.getElementById('mb').style.display = "none"
        document.getElementById('otp').style.display = "block"
    }
    
    const generateRecaptcha = ()=>{
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
             
            }
          }, auth);
    }

    const updateOTP = (event)=>{
        const value = event.target.value
        setOTP(value)
    }

    const verifyOTP = (event)=>{
        event.preventDefault()
        console.log("Verifying OTP")
        // let confirmationResult = window.confirmationResult
        window.confirmationResult.confirm(otp).then((result) => {
            // User signed in successfully.
            const user = result.user;
            alert("User Verified")
            // ...
          }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
          });
    }
    
  return (
    <div>
      <form className='container' style={{marginTop:"20px"}} onSubmit={submit} id='mb'>
        <h2 className='text-center'>Phone Form</h2>
        
        <label htmlFor="phone">Mobile Number:</label>
        <input type="tel" name='phone' value={phone} placeholder='Enter phone number' className='form-control' onChange={change} id="phone" pattern='[0-9]{10}' required={true}/>
        <input type="submit" className="btn btn-success" />
      </form >
        <form id='otp' onSubmit={verifyOTP} className='container' style={{display:"none"}}>
        <label htmlFor="otp">OTP:</label>
        <input type="text"  value={otp} placeholder='Enter OTP' className='form-control' onChange={updateOTP}  required={true}/>
        <input type="submit" value="Verify" className="btn btn-success" />
        </form>
        <div id="recaptcha-container"></div>
    </div>
  )
}

export default Phone

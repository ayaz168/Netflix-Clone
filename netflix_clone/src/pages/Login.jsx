import React,{ useState } from 'react';
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
export default function Login() {
  const [formValues, setFormValues]=useState({
    email:"",
    password:"",
  });
  const navigater= useNavigate();
  const handleLogIn=async()=>{
    try{
      const {email, password}=formValues;//Destructuring from form v alues
      await signInWithEmailAndPassword(firebaseAuth,email,password);

    }catch(errorX){
      console.log(errorX)
    }
  };
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigater("/")
  });
  return (
    <Container>
      <BackgroundImage/>
      <div className="content">
        <Header/>
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>
                Login
              </h3>
            </div>
            <div className="container flex column">
            <input type='email' 
            placeholder='Enter Email Address' 
            name='email' 
            value={formValues.email} 
            onChange={(e)=>
            setFormValues({...formValues,[e.target.name]:e.target.value}
            )}/>
            {
              <input type='password' placeholder='Enter Password' name='password'value={formValues.password} 
              onChange={(e)=>
              setFormValues({...formValues,[e.target.name]:e.target.value}
              )}/>
 
            }
           <button onClick={handleLogIn}>Get Start</button>
            </div>
          </div>
        </div>
      </div>
      
    </Container>
    /*Grab Event, Set Form Value, Destructure Current Form Value, Set Email, Password Same*/
  )
}
const Container =styled.div`
position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;
import React,{ useState } from 'react';
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);//states
  const [formValues, setFormValues]=useState({
    email:"",
    password:"",
  });
  const navigater= useNavigate();
  const handleSignIn=async()=>{
    try{
      const {email, password}=formValues;//Destructuring from form v alues
      await createUserWithEmailAndPassword(firebaseAuth,email,password);

    }catch(errorX){
      console.log(errorX)
    }
  };
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigater("/")
  });
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage/>
      <div className='content'>
        <Header />
        <div className='body flex column a-center j-center'>
          <div className='text flex column'>
            <h1>Unlimited Movies, TV Shows and more..</h1>
            <h4>Watch anywhere, anytime</h4>
            <h6>Watch Now? Enter your email to start or restart membership</h6>
          </div>
          <div className='form'>
            <input type='email' 
            placeholder='Enter Email Address' 
            name='email' 
            value={formValues.email} 
            onChange={(e)=>
            setFormValues({...formValues,[e.target.name]:e.target.value}
            )}/>
            {
              showPassword&&<input type='password' placeholder='Enter Password' name='password'value={formValues.password} 
              onChange={(e)=>
              setFormValues({...formValues,[e.target.name]:e.target.value}
              )}/>
 
            }
           {
            !showPassword&&<button onClick={()=>setShowPassword(true)}>Get Start</button>
           }
            
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
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
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body{
      gap: 1rem;
      .text{
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1{
          padding: 0 25rem;
        }
      }
      .form{
        display:grid;
        grid-template-columns:${({showPassword})=>showPassword ? "1fr 1 fr":"2fr 1fr"};
        width: 60%;
        input{
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border:1px solid black
          &:focus{
            outline:none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
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
`;
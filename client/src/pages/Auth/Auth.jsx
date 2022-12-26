import React, {useState} from "react";
import "./Auth.css";
import Logo from "../../img/aliencomment.webp";
import { logIn, signUp } from "../../actions/AuthActions.js";
import {useDispatch, useSelector} from 'react-redux';

const Auth = () => {
  const loading = useSelector((state)=>state.authReducer.loading)
  const[isSignUp, setIsSignUp]=useState(true);
  const dispatch = useDispatch()
  console.log(loading)
  const[data, setData]=useState({firstname: "", lastname:"", username:"", password:"", confirmpass:"",});

  //function to handle all these inputs, takes even as paramaeter
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault(); 

    if(isSignUp){
      data.password===data.confirmpass 
      ? dispatch(signUp(data)) 
      : setConfirmPass(false);
    }else{
      dispatch(logIn(data))
    }
  }

  const resetForm=()=>{
    setConfirmPass(true);
    setData({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });
  };

  return (
    <div className="Auth">
      {/*Left Side*/}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>LikeIt</h1>
          <h6>Explore. Chat. Discover...Aliens</h6>
        </div>
      </div>
      {/*Right Side*/}
      <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit} >
        <h3 style={{color: "gold"}} >{isSignUp ? "Sign up": "Log In"}</h3>

          {isSignUp && (
          
          <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            onChange={handleChange}
            value={data.firstname}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            onChange={handleChange}
            value={data.lastname}
          />
          </div>
           )}
        

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={data.text}

          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={data.password}
            
          />

          {isSignUp && (<input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={data.confirmPass}

          />)}
          
        </div>

    <span style=
      {{
        display: confirmPass? "none": "block", 
        color: 'yellow', 
        fontSize: '12px', 
        alignSelf: "flex-end", 
        marginRight: "5px",
        }}>
      * Passwords do not match, try again
    </span>
        <div>
            <span style={{textDecoration: "underline", fontSize: '14px',cursor: "pointer"}} 
                onClick={()=>{setIsSignUp((prev)=>!prev); resetForm()}} >
                {isSignUp? "Have an account? Login " : "Don't have an account? Sign Up"}
              </span>
              
        </div>
        <button className="button infoButton" type="submit" disabled={loading}>
          {loading? "Loading..." :isSignUp? "Sign Up" : "Login"}
          </button>
      </form>
    </div>
    </div>
  );
};


export default Auth;
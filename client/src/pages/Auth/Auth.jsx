import React, {useState} from "react";
import "./Auth.css";
import Logo from "../../img/aliencomment.webp";

const Auth = () => {
  const[isSignUp, setIsSignUp]=useState(true);

  const[data, setData]=useState({firstname: "", lastname:"", password:"", confirmpass:"", username:""})

  //function to handle all these inputs, takes even as paramaeter
  const handleChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }

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
      <form className="infoForm authForm">
        <h3 style={{color: "gold"}} >{isSignUp ? "Sign up": "Log In"}</h3>

          {isSignUp &&
          
          <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            onChange={handleChange}
          />
          </div>}
          
        

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
            onChange={handleChange}

          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            
          />

          {isSignUp && <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}

          />}
          
        </div>

        <div>
            <span style={{textDecoration: "underline", fontSize: '14px',cursor: "pointer",  }} onClick={()=>setIsSignUp((prev)=>!prev) } >
                {isSignUp? "Have an account? Login " : "Don't have an account? Sign Up"}
              </span>
        </div>
        <button className="button infoButton" type="submit">
          {isSignUp? "Sign Up" : "Login"}
          </button>
      </form>
    </div>
    </div>
  );
};


export default Auth;

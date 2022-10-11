import {React,useState} from "react";
import "./HomePage.css";
//import  LOGO from "./LOGO.svg";
import consultinlogo from "./images/consultin-logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose} from "react-icons/ai";
function HomePage(){

    const [isActive, setIsActive] = useState(false);
    
       return(
<>
{/*     
<div className="navbar">
            <div className="logo">
            <img src={LOGO} alt="consultin-logo" id='imgl'></img>
            </div>
            <div className="logoname">
               
              <span className="first-part-logo-name">Consult</span>
              <span className="second-part-logo-name">In</span>
              
             </div>
            <div className="options">
            <ul id="navbar-links">
                <li>
                <a href="#" className="active">Home</a>
                </li>
                <li>
                <a href="#" >About Us</a>
                </li>

                <li>
                <a href="#" >Consultants</a>
                </li>

                <li>
                <a href="#" >Contact Us</a>
                </li>


            </ul>
           
           
             </div>
             <div className="button">
             <button id="btn">Login</button>
              <button id="btn">Signup</button>
             </div>

            <div id="mobile" >
             
            {isActive? <AiOutlineClose onClick={()=>{
                setIsActive(!isActive)
            }}/>:<GiHamburgerMenu onClick={()=>{
                setIsActive(!isActive)
            }}/>}
             
           
            
            </div>
        </div>
   <div className="main-container">
        
      
    </div> */}

    <nav>
        <a>
        <img src={consultinlogo} alt="consultin-logo" id='imgl'></img>
        </a>
        <div>
            <ul id="navbar" className={isActive ? "#navbar active" : "#navbar"}>
                <li><a className="active" href="#Home">Home</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#consultants">Consultants</a></li>
                <li><a href="#contactus">Contact Us</a></li>
            </ul>
        </div>
        <div id="mobile" >
            <div id="bar" >
            {isActive? <AiOutlineClose onClick={()=>{
                setIsActive(!isActive)
            }}/>:<GiHamburgerMenu onClick={()=>{
                setIsActive(!isActive)
            }}/>}
             
             </div>
            
        </div>
    </nav>

      
</>
        );
    }


export default HomePage;
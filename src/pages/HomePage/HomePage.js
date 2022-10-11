import {React,useState} from "react";
import "./HomePage.css";
// import SignUpPage from  "../SignUpPage/SignUpPage";
// import LoginPage from '../LoginPage/LoginPage';
// import {Routes, Route, useNavigate} from 'react-router-dom';
//import  LOGO from "./LOGO.svg";
//import { Link } from "react-router-dom";
import consultinlogo from "./images/consultin-logo.jpeg";
import taglineimg from "./images/Rectangle 60.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose} from "react-icons/ai";

//category area section necessary imports starts here 

import bankruptcy from "./images/bankruptcy.png";
import criminal from "./images/criminal.png";
import tax from "./images/tax.png";
import civil_rights from "./images/civil_rights.png";
import family from "./images/family.png";
import property from "./images/property.png";
import environmental from "./images/environmental.png";
import immigration from "./images/immigration.png";
import corporate from "./images/corporate.png";

//category area section necessary imports ends here  

//Reviews area import section  starts from here 

//import left_icon from "./images/left_icon.svg";
//import right_icon from "./images/right_icon.svg";
import Rectangle87 from "./images/Rectangle 87.png";
import Rectangle89 from "./images/Rectangle 89.png";

//Reviews area import section ends here


//Footer area import section starts from here

import {MdOutlineLocationOn} from "react-icons/md";
import {AiOutlineMail} from "react-icons/ai";
import {AiOutlinePhone} from "react-icons/ai";

//Footer area import section ends here

function HomePage(){

//     const navigate = useNavigate();

//     const navigateTologininpage = () => {
//     //  navigate to /LoginPage
//     navigate('/LoginPage');
//    };

//    const navigateTosignuppage = () => {
//     //  navigate to /SignUpPage
//     navigate('/SignUpPage');
//    };

    const [isActive, setIsActive] = useState(false);
    
       return(
        <>

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
                <div className="button">
                <div>
                    <button id="btn" >Login</button>
                    
                </div>
                <div>
                    <button id="btn">Signup</button>
                    
                </div>
                {/* <Routes>
                    <Route path='/LoginPage' component={LoginPage} />
                     <Route path='/SignUpPage' component={SignUpPage}/>
                    </Routes> */}
                </div>
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
    <div className="mainbody">


        {/* tag line area code starts from here */}


        <div className="tagline-area">
            <div><img src={taglineimg} alt="taglineimg" id='imgl1'></img></div>
            <div className="content">
                <div id="tagline">
                <span className="first-tag-name">GET ADVICE AT </span>
                <span className="second-tag-name"> EASE</span>
                <span className="third-tag-name">.</span>
                </div>

                <div id="description">
                Get yourself a legal expert today! Contact our hand <br></br> 
                picked consultant which are experts of their area in the <br></br>
                legal domain, available 24x7.
                </div>
                
            </div>
        </div>

         {/* tagline area code ends here */}
        

         {/* category area code starts from here */}


        <div className="categories-area">

           <div id="Title">
            
           <h2 id='category-title'> CATEGORIES</h2>
           <span className="divider"></span>

           </div>

           <div id="first-category-row">
            <div className="bankruptcy">
            <img src={bankruptcy} alt="bankruptcy-logo" id='imgl2'></img>
            <h6>Bankruptcy</h6>
            </div>

           <div className="criminal">
           <img src={criminal} alt="criminal-logo" id='imgl2'></img>
           <h6>Criminal</h6>
           </div>

           <div className="tax">
           <img src={tax} alt="tax-logo" id='imgl2'></img>
           <h6>Tax</h6>
           </div>

           <div className="civil_rights">
           <img src={civil_rights} alt="civil_rights-logo" id='imgl2'></img>
           <h6>Civil Rights</h6>
           </div>

           <div className="family">
           <img src={family} alt="family-logo" id='imgl2'></img>
           <h6>Family</h6>
           </div>

           </div>

           <div id="second-category-row">
            <div className="property">
           <img src={property} alt="property-logo" id='imgl2'></img>
           <h6>Property</h6>
           </div>

           <div className="environmental">
           <img src={environmental} alt="environmental-logo" id='imgl2'></img>
           <h6>Environmental</h6>
           </div>

           <div className="immigration">
           <img src={immigration} alt="immigration-logo" id='imgl2'></img>
           <h6>Immigration</h6>
           </div>

           <div className="corporate">
           <img src={corporate} alt="corporate-logo" id='imgl2'></img>
           <h6>Corporate</h6>
           
           </div>

           </div>
        </div>


        {/* category area code ends  here */}



        {/* About us  area code starts from  here */}


        <div className="about-us-area">
            
            <div className="about-us-name">
               
               <h2>ABOUT US</h2>
               <span className="divider"></span>
            </div>
            <div className="about-us-underline">
            <span className="divider"></span>
            </div>
            <div className="about-us-content">
            ConsultIn is an aggregator providing on demand legal consultancy to <br></br>
            fill in the communication void between the legal experts and a <br></br>
            person seeking consultancy in any area of legal domain.<br></br>
            <br></br>
            <br></br>
            <br></br>
            It is a one stop solution to find the right hand picked consultant <br></br>
            which are experts of their area in the legal domain at your comfort<br></br>
            and 24*7, making legal consultancy easy on the go for anyone<br></br>
            without any hassle. 
            </div>

        </div>


        {/* About us  area code ends  here */}


        {/* Reviews  area code starts from  here */}


        <div className="reviews-area">
           <div className="reviews-title">
              <h2>REVIEWS</h2>
              <span className="divider"></span>
           </div>
           <div className="reviews-grid">
            
            <div className="arrow-left-container">
            <img src={Rectangle89} alt="left_icon" id='imgl3'></img>
            </div>

            <div className="main-grid">
                <div id="grid-item">
                    <div id="grid-item-profile-pic"></div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h6>Demo: Review 1 of our customer 1</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                </div>
                <div id="grid-item">
                    <div id="grid-item-profile-pic"></div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h6>Demo: Review 2 of our customer 2</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                </div>
                <div id="grid-item">
                    <div id="grid-item-profile-pic"></div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h6>Demo: Review 3 of our customer 3</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                </div>
                <div id="grid-item">
                    <div id="grid-item-profile-pic"></div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h6>Demo: Review 4 of our customer 4</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                </div>
                <div id="grid-item">
                    <div id="grid-item-profile-pic"></div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h6>Demo: Review 5 of our customer 5</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                </div>
                <div id="grid-item">
                    <div id="grid-item-profile-pic"></div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h6>Demo: Review 6 of our customer 6</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                    <h6>.</h6>
                </div>
                
            </div>

            <div className="arrow-right-container">
            <img src={Rectangle87} alt="right_icon" id='imgl3'></img>
            </div>
             </div>
           
        </div>

        {/* Reviews  area code ends  here */}

        {/* faq   area code  starts from  here */}



        <div className="faq-area">
            

          

           {/* desktop mode title starts here*/}

           <div className="faq-area-title">
               <h2>FAQs</h2>
               <span className="divider"></span>
           </div>

           {/* desktop mode title ends here*/}

           <div className="faq-area-underline">
           <span className="divider"></span>
           </div>

           <div className="faq-area-box"></div>
        </div>

        {/* faq   area code  ends  here */}


    </div>
    

    {/* footer  area code  starts from here */}


    <div className="footer">

        <div className="footer-tagline">
              <h1>Better yet, see us in <br></br>person !</h1>
              <br></br>
              <p id="footer-tagline-quotes">We love our customers, so feel free to visit during<br></br> normal business hours.</p>
              <span className="divider"></span>
        </div>

        <div className="footer-product">
          <h3>PRODUCT</h3>
          <span className="divider"></span>
          <ul id="footer-ul">
            <li id="footer-li"><a href="#features">Features</a></li>
            <li id="footer-li"><a href="#pricing">Pricing</a></li>
            <li id="footer-li"><a href="#case_studies">Case Studies</a></li>
            <li id="footer-li"><a href="#reviews">Reviews</a></li>
            <li id="footer-li"><a href="#updates">Updates</a></li>
          </ul>
        </div>

        <div className="footer-company">
          <h3>COMPANY</h3>
          <span className="divider"></span>
          <ul id="footer-ul">
            <li id="footer-li"><a href="#about">About</a></li>
            <li id="footer-li"><a href="#contactus">Contact Us</a></li>
            <li id="footer-li"><a href="#careers">Careers</a></li>
            <li id="footer-li"><a href="#culture">Culture</a></li>
            <li id="footer-li"><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-support">
          <h3>SUPPORT</h3>
          <span className="divider"></span>
          <ul id="footer-ul">
            <li id="footer-li"><a href="#getting_started">Getting Started</a></li>
            <li id="footer-li"><a href="#help_center">Help Center</a></li>
            <li id="footer-li"><a href="#server_status">Server Status</a></li>
            <li id="footer-li"><a href="#report_a_bug">Report a bug</a></li>
            <li id="footer-li"><a href="#chat_support">Chat Support</a></li>
          </ul>
        </div>

        <div className="footer-contact-us">
          <h3>CONTACT US</h3>
          <span className="divider"></span>
          <ul id="footer-ul">
            <li id="footer-li"><MdOutlineLocationOn/>Our Firm Location</li>
            <li id="footer-li"><AiOutlineMail/><a href="mailto:consultin.in@gmail.com?subject">EMAIL US</a></li>
            <li id="footer-li"><AiOutlinePhone/>Phone:+91XXXXXXXXXX</li>
          </ul>
        </div>
    </div>

{/* footer  area code  starts from here */}

      
</>
        );
    }


export default HomePage;



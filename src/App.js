import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AppointmentPage from './pages/Appointment/AppointmentPage.js';
// import ChooseCategoryPage from './pages/ChooseCategoryPage/ChooseCategoryPage.js';
// import ContactUsPage from './pages/ContactUs/ContactUs.js';
// import FormPage from './pages/Form/FormPage.js';
import HomePage from './pages/HomePage/HomePage.js';
// import LanguagePage from './pages/Language Page/LanguagePage.js';
// import LoginPage from './pages/LoginPage/LoginPage.js';
// import ReviewPage from './pages/Review/ReviewPage.js';
// import SearchListingPage from './pages/SearchListingPage/SearchListingPage.js';
//import SignUpPage from './pages/SignUpPage/SignUpPage.js';

function App(){
  return(
    <><HomePage/></>
    
    // <Router>
    //   <Routes>
    //     <Route path='/' exact component={HomePage} />
    //     <Route path='/SignUpPage' component={SignUpPage} />
    //     <Route path='/LoginPage' component={LoginPage} />
    //     <Route path='/ChooseCategoryPage' component={ChooseCategoryPage} />
    //     <Route path='/LanguagePage' component={LanguagePage} />
    //     <Route path='/SearchListingPage' component={SearchListingPage} />
    //     <Route path='/AppointmentPage' component={AppointmentPage} />
    //     <Route path='/FormPage' component={FormPage} />
    //     <Route path='/ContactUsPage' component={ContactUsPage} />
    //     <Route path='/ReviewPage' component={ReviewPage} />
      
    //   </Routes>
    // </Router>
  );
}

export default App;
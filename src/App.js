import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import girl from './girl.jpg';
import contract from './contract.svg';
import truck from './truck.svg';
import pencilcase from './pencilcase.svg';
import piggybank from './piggybank.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

   
      <div className="sticky">
      <div className="navbar">
        <img src={logo}  alt="logo" className="Logo" />
        </div>


      </div>
      
        <div className="block bg ">
         <div className="header-container container">
         <h1 className="title">School <span className="s">Kits</span></h1>
        <p className="sub-main-title">Welcome to Simple School Supply Shopping.</p>
    </div>
        </div>
        <div className="block block-bordered-lg  app-block-stats">
  <div className="container">
    <div className="row">
    <div className="col-md-6" >
    <h1 className="sub-title">Our Mission.</h1>
        <p className="lead">

        We want our parents to focus on preparing their child for the academic and social challenges lying ahead, instead of shopping.
        </p>
        <p className="lead">
        On average, it takes a parent <strong>an hour and a half </strong>for each child to complete their school supply shopping. 
        </p>
       
      </div>
      <div className="col-md-6">
      
      <img src={girl}  alt="Girl" className="Girl" />

      </div>
   
    </div>
  </div>
</div>


<div className=" card-wrapper block margin-top">
  <div className="container " ><h1 className="sub-title"> Our Process.</h1></div>
<div className="container card-container ">

  <div className="card border card-space" >
    <div className="card-body">


      <h5 className="card-title text-center"><strong>The First Step</strong></h5>
      
      <img src={contract}  alt="logo" className="Process-icon" />
   
          <p className="card-text text-center">We learn about your school’s needs, establish the supply lists, and direct the parents to our site to process orders.   </p>
        </div>
      </div>
      <div className="card border card-space" >
        <div className="card-body ">
         
          <h5 className="card-title text-center"><strong>The Second Step</strong></h5>
          <img src={pencilcase}  alt="logo" className="Process-icon" />

          <p className="card-text text-center ">We gather, organize, and create school kits based on your established list. </p>

            </div>
          </div>
          <div className="card border card-space" >
            <div className="card-body">
            
              <h5 className="card-title text-center"><strong>The Last Step</strong></h5>
              <img src={truck}  alt="logo" className="Process-icon" />

              <p className="card-text text-center ">Our team delivers directly to your classroom. No need for pickup. </p> 

                </div>
              </div>
              <div className="card border card-space last-card" >
                <div className="card-body">
                
                  <h5 className="card-title text-center "><strong>Bonus</strong></h5>
                  <img src={piggybank}  alt="logo" className="Process-icon" />

                  <p className="card-text text-center">Your school is rewarded with our commission based system. </p>

                    </div>
                 
                  </div>
              
             
              
   
    </div>

</div>
<div className="block  ">
  <div className="container ">
    
  <div className="container " ><h1 className="sub-title"> Our Promise.</h1></div>
    <div className="row margin-top-20">
      <div className="col-sm-6">
        <ul className="featured-list">
          <li classNames="mb-5">
            <div className="featured-list-icon display-flex">
              <i className="fas fa-heart"></i>                   <p class="featured-list-icon-text mb-0"><strong>Custom Made Kits</strong></p>
     </div>
            <p className="featured-list-icon-text">
            Our school supply kits are custom built to match teachers' supply lists for any grade and delivered directly to your school.
            </p>
          </li>

          <li className="mb-5">
            <div className="featured-list-icon display-flex">
<i class="fas fa-hourglass-half"></i>                    <p class="featured-list-icon-text mb-0"><strong>Time Savings</strong></p>
    </div>
            <p className="featured-list-icon-text">
              You save tons of time by using our world class service. We remove the stressful and time consuming activity of school supply shopping. Your time is better spent with your child.
            </p>
          </li>

        </ul>
      </div>
      <div className="col-sm-6">
        <ul className="featured-list">

          <li className="">
            <div className="featured-list-icon display-flex ">
            <i className="fas fa-pencil-alt"></i>      
            <p className="featured-list-icon-text mb-0"><strong>High Quality Supplies</strong></p>
          </div>
            <p className="featured-list-icon-text">
              Your child deserves the best. Each kit contains high quality name brand school supplies.
            </p>
          </li>

          <li className="mb-5">
            <div className="featured-list-icon display-flex">
              <i className="far fa-smile"></i>
              <p className="featured-list-icon-text mb-0"><strong>Low Price</strong></p>

            </div>
            <p className="featured-list-icon-text">
              We do not believe in sacrificing your wallet for good quality products. We find the best price for you.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>



<div className="block">
<div className="container">
<h2 className="sub-title"> Get in Touch.</h2>
<p> Click the button and send us a quick email to learn more about how we can add value to your school.</p>
</div>
<div className="cta">
<a href="mailto:schoolsupplieskit@gmail.com"><i className="far fa-envelope"></i> Email Us</a>

</div>


</div>
      

<div className="block app-block-footer footer-bg" >
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <ul className="list-unstyled list-spaced">
          <li><h5 className="text-uppercase" >Contact</h5></li>
          <a href="mailto:schoolsupplieskit@gmail.com"><li ><i className="far fa-envelope"></i> schoolsupplieskit@gmail.com</li></a>
        </ul>
      </div>


       <div className="col-md-6">
        <h5 className="text-uppercase" >About</h5>
        <p ><i className="fas fa-seedling"></i> We are a company focused on creating doors for the community. Our goal is to create a better chance for your child to succeed and grow.</p>
      </div>
    </div>
</div>
 </div>
 
      </div>
    );
  }
}

export default App;

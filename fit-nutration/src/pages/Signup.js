import react, { Fragment } from 'react';
import Navbar from './Navbar';

function Signup() {
    return (<Fragment>
<header><Navbar></Navbar></header>
<div class="signup-box">
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form>
        <label>First Name</label>
        <input type="text" placeholder="" />
        <label>Last Name</label>
        <input type="text" placeholder="" />
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <label>Confirm Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" />
      <closeform></closeform></form>
      <p>
        By clicking the Sign Up button,you agree to our <br />
        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
      </p>
    </div>
    <p class="para-2">
      Already have an account? <a href="login.html">Login here</a>
    </p>


    </Fragment>)
} export default Signup;
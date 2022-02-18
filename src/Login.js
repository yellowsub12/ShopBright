import React from 'react'
import "./Login.css"
import $ from 'jquery';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { getDatabase, ref, det, child, get} 
    from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}













function Login() {
 
    return (
    <div className="login">
                <div id="container">

        
 <div id="logreg-forms">
        <form class="form-signin"/>
            <h1 class="h3 mb-3 font-weight-normal" > Sign in</h1>
            <div class="social-login">
                <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
            </div>
            <p > OR  </p>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
            
            <button class="btn btn-success btn-block" type="submit"><i class="fas fa-sign-in-alt"></i> Sign in</button>
            <a href="#" id="forgot_pswd">Forgot password?</a>
            <hr/>
           
            <button class="btn btn-primary btn-block" type="button" id="btn-signup"><i class="fas fa-user-plus"></i> Sign up New Account</button>
  

            <form action="/reset/password/" class="form-reset">
                <input type="email" id="resetEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
                <button class="btn btn-primary btn-block" type="submit">Reset Password</button>
                <a href="#" id="cancel_reset"><i class="fas fa-angle-left"></i> Back</a>
            </form>
            
            <form action="" class="form-signup"/>
                <div class="social-login">
                    <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                </div>
                <div class="social-login">
                    <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
                </div>
                
                <p >OR</p>

                <input type="text" id="name" class="form-control" placeholder="Full name"  autofocus="" name="name"/>
                <input type="text" id="user-name" class="form-control" placeholder="User name"  autofocus="" name="user"/>
                <input type="email" id="user-email" class="form-control" placeholder="Email address"  autofocus="" name="email"/>
                <input type="password" id="user-pass" class="form-control" placeholder="Password"  autofocus="" name="pass"/>
                <input type="password" id="user-repeatpass" class="form-control" placeholder="Confirm Password"  autofocus="" name="pass"/>

                <button class="btn btn-primary btn-block" type="submit" id="sub_btn" name="submit"><i class="fas fa-user-plus"></i> Sign Up</button>
                <a href="#" id="cancel_signup"><i class="fas fa-angle-left"></i> Back</a>
            <br/>
            
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    







      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>







    
</div>

    </div>
  )}


export default Login
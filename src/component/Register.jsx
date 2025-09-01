import React from "react";
import { NavLink } from "react-router-dom";



function Register() {
  return (
    <div className="login-container d-flex align-items-center justify-content-center mt-5 mb-5">
      <div className="row login-box shadow-lg">
      
        <div className="col-md-6 sneaker-side d-none d-md-flex align-items-center justify-content-center">
          <img
            src="assets/images/sneak35.jpg"
            alt="Sneaker"
            className="img-fluid sneaker-img"
          />
        </div>
        

        {/* Right login form */}
        <div className="col-md-6 form-side p-5">
          <h2 className="text-center mb-4">Create Account</h2>
          <form>
             <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
              <div className="mb-3">
              <label className="form-label"> Confirm Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-dark p-1  w-100">
              Register
            </button>
          </form>
          <p className="mt-3 text-center">
              Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

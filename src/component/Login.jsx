import React from "react";
import { NavLink } from "react-router-dom";



function Login() {
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
          <h2 className="text-center mb-4">Log In</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
            <NavLink to="/profile">
            <button type="submit" className="btn btn-dark p-1 w-100">
              Login
            </button>
            </NavLink>
          </form>
          <p className="mt-3 text-center">
            Don’t have an account? <NavLink to="/register">Register</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

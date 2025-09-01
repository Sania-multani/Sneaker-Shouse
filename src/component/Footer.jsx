import React from 'react'

const Footer = () => {
  return (
    <>
    
     <footer className="footer-section text-white">
      <div className="container py-5">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 className="logo-text">StepZ</h4>
            <p className="footer-description">
              Discover the finest sneakers crafted for style and comfort. Sustainable, ethical, and fashionable.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="footer-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="footer-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="footer-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="footer-icon"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="mt-3 small">Email: info@sneakerhouse.com</p>
            <p className="small">Phone: +1 234 567 8901</p>
          </div>

        </div>

        <div className="text-center pt-4 border-top mt-4 small text-muted">
          &copy; {new Date().getFullYear()} SneakerHouse. All rights reserved.
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
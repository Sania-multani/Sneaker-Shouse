import React, { useState } from 'react'
import { FaSearch, FaUser, FaTimes, FaHeart, FaShoppingBag } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Header = () => {

   const [isSearchOpen, setIsSearchOpen] = useState(false);

       const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    quantity: 2,
    image: "assets/images/sneak20.jpg", // Replace with real image
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    quantity: 1,
    image: "assets/images/sneak21.jpg", // Replace with real image
  },
];


    const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


  return (
    <>
     <header className="header">
          {/* Left Navigation */}
          <nav className="nav-left">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/shop">SHOPS</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">BLOG</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
          </nav>
    
          {/* Logo */}
          {/* <div className="logo">Sneaker<span>ank</span></div> */}
          <div  className="cstm-logo-sec">
            <img src="assets/images/sneak28.png"  className="img-logo"></img>
          </div>
    
          {/* Right Section */}
          <div className="nav-right">
            <select className="lang">
              <option>English</option>
              <option>Hindi</option>
            </select>
        
            <div className="icons">
              <FaSearch   onClick={() => setIsSearchOpen(true)}  className='mt-1'/>
              <NavLink to="/login" className="cstm-user-sec"><FaUser /></NavLink> 
              {/* <div className="cart"> */}

              <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">   <FaShoppingBag /></button>
             
               
              {/* </div> */}
            </div>
          </div>
        </header>

         {isSearchOpen && (
        <div className="search-overlay">
          <input type="text" className="search-input" placeholder="Search..." />
          <FaTimes className="close-icon" onClick={() => setIsSearchOpen(false)} />
        </div>
      )}




         <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart Page</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   {/* Sample Cart Items */}
            {cartItems.map((item) => (
            <div className="cart-item d-flex mb-3" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-img me-3"
              />
              <div className="flex-grow-1">
                <h6 className="mb-1">{item.name}</h6>
                <p className="mb-0 text-muted">
                  Qty: {item.quantity} × Rs.{item.price.toFixed(2)}
                </p>
                <p className="mb-0 fw-bold">
                  Total: Rs.{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button className="cstm-cros-btn">
                x
              </button>
            </div>
          ))}

          <hr />
          <h5 className="text-end">Grand Total: Rs.{total.toFixed(2)}</h5>
         <NavLink to="/cart">
          <button className="btn cstm-check-cart w-100 p-2 mt-3">Checkout</button>
          </NavLink>
  </div>
</div>
    </>
  )
}

export default Header
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4><a href="/about-us">About Us</a></h4>
           
          </div>
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/about-us">About Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Information</h4>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

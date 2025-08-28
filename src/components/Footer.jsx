import React from 'react'
import '../Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Stars, Pilot, footerLogo, Pay } from '../assets';


const Footer = () => {
    const faColour = {
        color: "#f58634"
    };

    const hsix = {
        color: "white"
    }
  return (
    
    <footer className ="text-center text-lg-start text-muted mt-5">
        <section className  ="text-center p-4 border-bottom">
            <p className  ="fs-2 fw-bold text-light footer-h6">Excellent</p>
            <img src={Stars} alt=""/>
            <p className  ="fs-5 text-light mt-3">Based on <u>13,586 reviews</u></p>
            <img src= {Pilot} alt="" className  ="pb-lg-4" />
        </section>
        <section className  ="links">
            <div className  ="container text-center text-md-start mt-5">
                 <div className  ="row mt-3">
                    <div className  ="col-md-12 col-lg-3 col-xl-3 mx-auto mb-4">
                        <h6 className  ="fw-bold mb-4 fs-5">Customer Service</h6>
                        <p className  ="fs-5">Order Lookup</p>
                        <p className  ="fs-5">Bulk Order</p>
                        <p className  ="fs-5">Shipping & Delivery</p>
                        <p className  ="fs-5">Discounts</p>
                    </div>
                     <div className  ="col-md-12 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className  ="fw-bold mb-4 fs-5">About Us</h6>
                        <p>
                            <a href="#!" className  ="text-reset fs-5">News & Blog</a>
                        </p>
                        <p>
                            <a href="#!" className  ="text-reset fs-5">Suppliers</a>
                        </p>
                        <p>
                            <a href="#!" className  ="text-reset fs-5">Terms & Conditions</a>
                        </p>
                        <p>
                            <a href="#!" className  ="text-reset fs-5">Privacy Policy</a>
                        </p>
                        </div>
                        <div className  ="col-md-12 col-lg-2 col-xl-2 mx-auto mb-4 fs-5">
                        
                        <h6 className  =" fw-bold mb-4 fs-5">
                            Need Help?
                        </h6>
                        <p>
                            <a href="#!" className  ="text-reset">Contact Us</a>
                        </p>
                        <p>
                            <a href="#!" className  ="text-reset">FAQs</a>
                        </p>
                    </div>
                        <div className  ="col-md-12 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4 fs-5">
                        <h6 className  ="fw-bold mb-4 fs-5">Privacy Policy</h6>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        </div>
         <div className  ="col-md-12 col-lg-3 col-xl-3 mx-auto fs-5">
          <h6 className  ="fw-bold mb-4 fs-5">Follow Us</h6>
          <div>
            <FontAwesomeIcon icon={faFacebookSquare} style={faColour} size='2x' />
            <FontAwesomeIcon icon={faLinkedin} style={faColour} size='2x' className='ms-4' />
            <FontAwesomeIcon icon={faTwitterSquare} style={faColour} size='2x' className='ms-4'/>                 
          </div>
         </div>
      </div>
    </div>
  </section>
  <div className  ="text-center p-4" style={{backgroundColor: "#D9D9D9"}}>
   <div className  ="row">
    <div className  ="col-sm-12 col-md-12 col-lg-4 col-xl-4">
      <img src= {footerLogo} alt=""/>
    </div>
    <div className  ="col-sm-12 col-md-12 col-lg-4 col-xl-4">
      <img src= {Pay} alt="" className  ="mt-4"/>
    </div>
    <div className  ="col-sm-12 col-md-12 col-lg-4 col-xl-4">
      <p className  ="text-dark mt-4">Copyright © 2024 FoodieAmazon. All Rights Reserved</p>
    </div>
   </div>
  </div>
</footer>
  )
}

export default Footer

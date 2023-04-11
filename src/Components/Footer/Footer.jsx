import React from 'react'
import './Footer.css'
import emailImg from '../../Assets/Email.svg'
import phoneImg from '../../Assets/Phone.svg'
import mapImg from '../../Assets/Map.svg'

const Footer = () => {
  return (
    <div className='footer-bg'>
    <div className="container">
<div className="row py-4">
  {/* <div className="col-3">
<div className="brand-name-footer">
<h1 className="footer-brand-heading pb-2 fw-bold ">MOMIN TRADERS</h1>
<p className='text-white brand-detail-footer'><strong>Momin Traders </strong>general order supplier is located in Lahore. The firm came into existence in 2018. The firm has a unique approach to various fields of stationery, IT & general order supplies according to requirement of client.The firm is committed to attain excellence in all areas of its operation. Therefor all effort are made for continuous quality control and improvement through well-coordinated schedule and effective feedback.
We believe that <strong>“Only quality has the future” </strong>

</p>
</div>
  </div> */}
  <div className="col-6 col-md-3">
    <div className="links">
    <h6>LINKS</h6>
    <ul className='unorderlist-navlinks'>
      <li className='footer-links-list'>
        <a href="#" className='footer-navlink'>
          <span>Home</span>
        </a>
      </li>
      <li className='footer-links-list'>
        <a href="#" className='footer-navlink'>
          <span>About Us</span>
        </a>
      </li>
      <li className='footer-links-list'>
        <a href="#" className='footer-navlink'>
          <span>Contact Us</span>
        </a>
      </li>
    </ul>
    </div>
    
  </div>
  <div className=" col-6 col-md-4">
  <div className="links">
    <h6>INFORMATION</h6>
    <ul className='unorderlist-navlinks'>
      <li className='footer-links-list'>
        <a href="#" className='footer-navlink'>
          <span>Terms & Conditions</span>
        </a>
      </li>
      <li className='footer-links-list'>
        <a href="#" className='footer-navlink'>
          <span>Privacy Policy</span>
        </a>
      </li>
      <li className='footer-links-list'>
        <a href="#" className='footer-navlink'>
          <span>FAQs</span>
        </a>
      </li>
    </ul>
    </div>
  </div>
  <div className="col-12 col-md-5">
  <div className="links">
    <h6>CONTACT INFORMATION</h6>
    <ul className='unorderlist-navlinks'>
      <li className='footer-links-list'>
        <a href="#" className='footer-navlink'>
        <span className="contact-us-image ">
          <img src={emailImg} alt="" />
        </span> 
        </a>
        <span className='footer-contact-us-info'>info@momin-traders.com
</span>
      </li>
      {/* <li className='footer-links-list'>
        <a href="#" className='footer-navlink'>
          <span>Privacy Policy</span>
        </a>
      </li>
      <li className='footer-links-list'>
        <a href="#" className='footer-navlink'>
          <span>FAQs</span>
        </a>
      </li> */}
      <li className='footer-links-list'>
        <a href="#" className='footer-navlink'>
        <span className="contact-us-image pe-1">
          <img src={phoneImg} alt="" />
        </span> 
        </a>
        <span className='footer-contact-us-info'>0321-4201136</span>
      </li>
      <li className='footer-links-list'>
        <a href="#" className='footer-navlink'>
        <span className="contact-us-image pe-1">
          <img src={mapImg} alt="" />
        </span> 
        </a>
        <span className='footer-contact-us-info'>14-Ds-4 Main Band Road, Lahore.</span>
      </li>
    </ul>
    </div>
  </div>
  <hr className='footer-hr '/>
  <div className='text-white  '>Copyright © 2023 Momin Traders | All Rights Reserved</div>
</div>

    </div>
   
    </div>
  )
}

export default Footer
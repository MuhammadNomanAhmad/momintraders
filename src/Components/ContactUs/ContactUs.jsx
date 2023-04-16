import React from 'react'
import './Contact.css'

const ContactUs = () => {
  return (
    <div className='contact-us-bgclr pb-5' id='contactUs'>
      <div className="container py-3" data-aos="fade-up">
      <div className="row pt-5">
     <div className="col">
     <h1 className='aboutus-heading pb-3 mx-auto  '  >CONTACT US</h1>
     </div>
     </div>
    <div className="row justify-content-center py-5 ">
      <div className="col-8">
      <form class="row g-3">

<div class="col-md-6">
    <label for="inputFirstName" class="form-label">First Name</label>
    <input type="text" class="form-control" id="inputFirstName" placeholder="First Name"  />
  </div>
  <div class="col-md-6">
    <label for="inputLastName" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="inputLastName" placeholder="Last Name"  />
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"  />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    {/* <button type="submit" class="btn btn-primary">Sign in</button> */}
    <div className="row justify-content-center">
            <div className="button text-center">
              <button className="contact-btn">
              <a href="#" className="contact-btn-link">Send Message</a>
              </button>
            </div>
          </div>
  </div>
</form>
      </div>
    </div>

      </div>
    </div>
  )
}

export default ContactUs
import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="">
          <h2 className='company-profile-heading text-center'>COMPANY PROFILE</h2>
          <p>We Deal In All Kinds of Stationery items, Printings Letter Heads, Envelope, Business Cards, Annual Reports, Catalogue, Flyers, Broacher, Poster, Note Book, Calendars, Safety equipment, Computer Hardware and IT equipment.</p>
          <h2><span className='basic-color'>Basic</span> <span className='profile-color'>Profile:</span> </h2>

          <p className='profile-info'>Company Name: <span className='profile-detail'>Momin Traders</span></p>
          <p className='profile-info'>Principal Activities: <span className='profile-detail'>Stationery, Printing, IT Equipments & General Order Supplies
</span> </p>
          <p className='profile-info'>NTN Number: <span className='profile-detail'>4045781-8 </span> </p>
          <p className='profile-info'>Address: <span className='profile-detail'>14-Ds-4 Main Band Road, Lahore.</span> </p>
          <p className='profile-info'>Mobile:	<span className='profile-detail'>	 0321-4201136</span> </p>
          <p className='profile-info'>E-mail:	<span className='profile-detail'>info@momin-traders.com</span> </p>
          <p className='profile-info'>Web Site:	<span className='profile-detail'>www.momin-traders.com </span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
import React from 'react'
import './Products.css'

const Products = ({productData}) => {
  return (
    <div className='product-container py-3 py-lg-5' id='products'>
      <div className="container" data-aos="fade-up">
      <h1 className='aboutus-heading pb-3 '  >OUR PRODUCTS</h1>
        <div className="row py-5 g-5 " >
          {productData.map((currElement)=>{
            const {id,image,title,description}=currElement;
            return(
           <div className="col-md-6 col-lg-4" >
           <div class="card h-100" key={id}>
           <div className="card-image-container">
           <img src={image} class="card-img-top" alt="..." />
           </div>
 
  <div class="card-body bg-dark text-white">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    
  </div>
</div>
           </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products
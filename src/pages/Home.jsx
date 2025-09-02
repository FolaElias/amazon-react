import React from 'react'
import Products from '../components/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { Base, Base2, HomeImg, Rating, RatingText } from '../assets';

const Home = () => {
  const roboto = {
    fontFamily: "Roboto, san-serif"
  };

  const shopbtn = {
    backgroundColor: "#F58634",
    border: "none",
    outline: "none",
    cursor: "pointer",
    borderRadius: '7px',
  }
  return (
      <>
      <div className='hero mt-lg-0 mt-5'>
        <div className='base1'>
          <img src= {Base} alt="" />
        </div>
        {/* text and button  */}
        <div className='text-section ps-lg-5 px-3'>
          <p>Discover the Pure Taste of Nature</p>
          <h1 style={{...roboto, color: "#00A859", fontSize: "80px"}}>Organic Snacks <br />Made with Love, <br />Just for You!</h1>
          <button className='text-light px-4 py-3 mt-4 mb-5 fs-5' style={shopbtn}>Shop Now <FontAwesomeIcon icon={faShop}/></button>
        </div>
        {/* image section  */}
        <div className='text-center pe-lg-5'>
          <div className='homeimgWrapper'>
            <img src = {HomeImg} alt="" />
          </div>
          <div className='rating'>
            <img src= {Rating} alt="" />
          </div>
          <div className='ratintxt'>
            <img src= {RatingText} alt="" />
          </div>
        </div>
      </div> 
      <div className='base2 mt-2'>
        <img src= {Base2} alt="" />
      </div>

      <Products />
    </>
  )
}

export default Home

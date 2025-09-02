import React from 'react'
import { Almond } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Products = () => {
  return (
      <>
          <div className='px-lg-5 px-3'>
              <div className="carousel">
              <div className="card">
                    <div className='prodimg'>
                      <img src= {Almond} alt="" />
                      </div>
                      <div className='d-flex justify-content-between mt-4'>
                          <div>
                              <p>Coconut Flakes</p>
                          </div>
                          <div>
                              <FontAwesomeIcon icon={faHeart} size='2x'/>
                          </div>
                      </div>
              </div>
              <div className="card">card 2</div>
              <div className="card">card 3</div>
              <div className="card">card 4</div>
              <div className="card">card 5</div>
              <div className="card">card 6</div>
              <div className="card">card 7</div>
              <div className="card">card 8</div>
              <div className="card">card 9</div>
              <div className="card">card 10</div>
              <div className="card">card 11</div>
              <div className="card">card 12</div>
          </div>
          </div>
      </>
  )
}

export default Products

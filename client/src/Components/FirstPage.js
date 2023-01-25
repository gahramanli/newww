import React from 'react'
import './FirstPage.css';
import {Link} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

function FirstPage() {
  return (
    <>
    <div className='navbar'>
        <div className='logo'>Floral Studio</div>
        <div className='list'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about-us">About Us</Link></li>
                <li><Link to="portfolio">Portfolio</Link></li>
                <li>Pricing</li>
                <li>Contacts</li>
            </ul>
        </div>
    </div>
    <div className='carousel'>
      <Carousel>
        <div>
          <img src="assets/1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
    </>
  )
}

export default FirstPage
import React from "react";
import "./Footer.css";

import ImageComponent from "../ImageComponent";

const Footer = () => {
  return (
    <footer>
      <div className='topFooter'>
        <div className='topFooter1'>
          <div className='footerLogo'>
            <ImageComponent src='afrihealth.png' />
            <h2>afrihealth</h2>
          </div>
          <p>
            Providing personalized, high-quality healthcare necessary to take
            control of your health with a plethora of patient resources from the
            comfort of a smartphone.
          </p>
          <div className='social'>
            <ImageComponent src='Facebook.png' className='socialimg' />
            <ImageComponent src='Instagram.png' className='socialimg' />
            <ImageComponent src='Twitter.png' className='socialimg' />
          </div>
        </div>
        <div className='topFooter2'>
          <h6>Links</h6>
          <ul>
            <li>Solution</li>
            <li>Resouces</li>
            <li>Company</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='topFooter2'>
          <h6>Resources</h6>
          <ul>
            <li>Partners</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Community</li>
          </ul>
        </div>
        <div className='topFooter2'>
          <h6>Our Office</h6>
          <p className='topFooter3p'>
            United Kingdom Dept 1973, 196 Highroad, Wood Green, London. N22 8HH
            United Kingdom.
          </p>
          <p className='topFooter3p'>Nigeria</p>
          <p className='topFooter3p'>12e Admiralty way. Lekki Phase 1 Lagos</p>
        </div>
      </div>
      <div className='bottomFooter'>
        <div className='africontainer'>
          <p>© 2022 FleetCare All rights reserved.</p>
        </div>

        <div className='privacy'>
          <a href='/privacy'>Privacy</a>
          <a href='/terms'>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

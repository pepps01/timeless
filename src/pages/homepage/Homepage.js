import React, { useEffect } from "react";
import "./Homepage.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <>
      {/* navbar goes here */}
      <div className='homepage-container relative'>
        <img
          src='/images/Afrihealth (1).png'
          alt=''
          className='absolute top-16'
        />
        <img
          src='/images/Vector Lines.png'
          alt=''
          className='absolute top-60'
        />
        <div className='homepage-top-div'>
          <div className='homepage-left' data-aos='fade-right'>
            <div className='home-image'>
              <img
                src='/images/shape 2.png'
                alt=''
                className='absolute top-0 left-0 md:-top-10 md:-left-10 w-[90px] h-[90px]'
              />
              <img
                src='/images/doctor-pics.svg'
                alt=''
                className='home-image-img'
              />
            </div>
            <div className='mobile-our-patners'>
              <p>Our Partners:</p>
              <div className='m-patners'>
                <div className='m-patner-image'>
                  <img src='/images/guardian.svg' alt='Afrihealth Patners' className='w-48 h-16 mr-14' />
                </div>
                <div className='patner-image'>
                  <img src='/images/stroll.svg' alt='Afrihealth Patners' className='w-48 h-16 mr-14' />
                </div>
                <div className='patner-image'>
                  <img src='/images/nafdac.svg' alt='Afrihealth Patners' />
                </div>
              </div>
            </div>
          </div>
          <div className='homepage-right' data-aos='fade-left'>
            <div className='hidden md:flex flex-col justify-center items-center absolute z-100 -bottom-16 -right-16'>
              <img src='/images/scroller.png' alt='scroller' className='' />
              <p>Scroll Down</p>
            </div>
            <div className='head-content'>
              <h3>
                Empathetic and convenient <span>healthcare</span> for you and
                your loved ones.
              </h3>
              <p>
                At Afrihealth we aim to increase the quality of life regardless
                of location or socially determined barriers. While delivering
                better results, we ensure cost is never a basis to be denied
                premium healthcare
              </p>
            </div>
            <div className='action-buttons'>
              <div className='watch-video'>
                <button>
                  <p>Watch Video</p>
                  <svg
                    width='23'
                    height='22'
                    viewBox='0 0 23 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22.5 11C22.5 16.7783 17.5963 21.5 11.5 21.5C5.40369 21.5 0.5 16.7783 0.5 11C0.5 5.22172 5.40369 0.5 11.5 0.5C17.5963 0.5 22.5 5.22172 22.5 11Z'
                      stroke='white'
                    />
                    <path
                      d='M9.12914 15.6423C8.46247 16.0272 7.62914 15.5461 7.62914 14.7763L7.62914 6.98202C7.62914 6.21222 8.46247 5.7311 9.12914 6.116L15.8791 10.0131C16.5458 10.398 16.5458 11.3603 15.8791 11.7452L9.12914 15.6423Z'
                      fill='white'
                    />
                  </svg>
                </button>
              </div>
              <div className='learn-more'>
                <p>Learn More</p>
                <svg
                  width='87'
                  height='7'
                  viewBox='0 0 87 7'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 5.20681C15.5 2.27627 48.5 -0.724516 86 5.20669'
                    stroke='#6B5DD3'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
            </div>

            <div className='our-patners'>
              <p>Our Partners:</p>
              <div className='patners'>
                <div className='patner-image'>
                  <img
                    src='/images/guardian.svg'
                    alt='Afrihealth Patners'
                    className='w-48 h-16 mr-14'
                  />
                </div>
                <div className='patner-image'>
                  <img
                    src='/images/stroll.svg'
                    alt='Afrihealth Patners'
                    className='w-48 h-16 mr-14'
                  />
                </div>
                <div className='patner-image'>
                  <img src='/images/nafdac.svg' alt='Afrihealth Patners' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='homepage-feature-div'>
          <div className='feature-top'>
            <h3>Features we deliver</h3>
            <p>
              See all the features we offer to cater for all you need to deliver
              adequate Tele-care.
            </p>
          </div>

          <div className='feature-body'>
            <div className='feature-item' data-aos='fade-up'>
              <h3>01</h3>
              <div className='feature-box white-bg'>
                <h5>Ambulance Service</h5>
                <p>
                  Get access to swift and safe emergency medical attention with
                  the widest array of medical personnel, ambulance vehicles and
                  emergency response centres, we provide premium crisis response
                  for whatever emergency you or your loved ones are facing
                  through our rigour+ app.
                </p>
                <div className='learn-more-feature'>
                  <p>Learn more</p>
                  <img src='/images/learn-more.svg' alt='' />
                </div>
              </div>
            </div>
            <div className='feature-item mt4' data-aos='fade-down'>
              <h3>02</h3>
              <div className='feature-box blue-bg'>
                <h5>Purchase Health Insurance</h5>
                <p>
                  Get access to premium health insurance for you and your family
                  through strategic partnerships with hmos & hospitals, rigour+
                  provides the opportunity to purchase health insurance while
                  making sure our plans do not break the bank.
                </p>
                <div className='learn-more-feature'>
                  <p>Learn more</p>
                  <img src='/images/learn-more.svg' alt='' />
                </div>
              </div>
            </div>
            <div className='feature-item mt8' data-aos='fade-up'>
              <h3>03</h3>
              <div className='feature-box white-bg'>
                <h5>Picon</h5>
                <p>
                  A cloud-based track and trace system that aims to eliminate
                  the spread of counterfeit drugs through alliances with major
                  stakeholders in the pharmaceutical industry, we enable
                  compliance with regional and international standards right
                  from the production line to the retailing of drugs.
                </p>
                <div className='learn-more-feature'>
                  <p>Learn more</p>
                  <img src='/images/learn-more.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='homepage-customers'>
          <div className='customers-left' data-aos='zoom-in-right'>
            <div className='customer-item trans-14'>
              <div className='customer-img'>
                <img src='/images/img2.3.png' alt='' className='rotate-14 md:rotate-12' />
              </div>
              <div className='customer-comment'>
                <p>
                  Afrihealth has helped getting access to medical professionals
                  seamless and easy.
                </p>
                <h5>Collins Gabriel</h5>
                <p>Rigour+ Customer</p>
              </div>
            </div>
            <div className='customer-item mL8 ml-2 md:ml-0'>
              <div className='customer-img'>
                <img src='/images/person2.png' alt='' />
              </div>
              <div className='customer-comment'>
                <p>
                  Afrihealth creates a seamless connection between all the
                  players in the healthcare space.
                </p>
                <h5>Martins Aremu</h5>
                <p>Medical Personnel</p>
              </div>
            </div>
            <div className='customer-item ml-4 md:ml-0'>
              <div className='customer-img'>
                <img src='/images/person.png' alt='' />
              </div>
              <div className='customer-comment'>
                <p>
                  As a pharmacy, seeing the smooth onboarding process of
                  pharmachain has made them the right partner
                </p>
                <h5>James Ndonga</h5>
                <p>Medical Professional</p>
              </div>
            </div>
          </div>
          <div className='customers-right' data-aos='zoom-in-left'>
            <h3>What Our Customers Say</h3>
            <p>
              We believe that the best way to provide the best support to our
              partners and users is by listening to them, hear are what some of
              our partners and users have said.
            </p>
          </div>
        </div>
      </div>

      {/* footer goes here */}
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;

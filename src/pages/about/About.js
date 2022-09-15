import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      {/* navbar goes here */}
      <div className='about-container'>
        <div className='about-top-div'>
          <div className='about-top-left' data-aos='fade-right'>
            <h3>Reimagining healthcare Completely</h3>
            <p>
              A team of individuals with an aim to increase the quality of life
              regardless of location or socially determined barriers.
            </p>
          </div>
          <div className='about-top-right' data-aos='fade-left'>
            <img src='/images/avatar.png' alt='avatar' className='what-we-do' />
            <p>
              Afrihealth is on a mission to positively change healthcare from
              the ground up by redesigning the healthcare space through a direct
              harmony between the doctor and the patient. <br />
              We believe that universal access to healthcare is only possible
              through the synergy between the best of science and humanities.
            </p>
          </div>
        </div>

        <div className='about-gallery'>
          <div className="gallery-images">
            <img src='/images/galleryd.png' alt='gallery' />
          </div>
        </div>

        <div className='stand-out'>
          <div className="stand-out-header">
          <img src='/images/avatar2.png' alt='avatar' className='why-us' />
          <h3>What Makes Us Outstanding</h3>
          </div>
          <p>
            At afrihealth, we are dedicated to improving your life through
            modern medicine and innovative technology built around your comfort.
            We have built a healthcare platform that offers full-spectrum care,
            from diagnosis to medication therapy. With the widest network of
            medical resources and avant-garde software engineering, Afrihealth
            seamlessly connects telemedicine, diagnostics, pharmacy services, &
            Insurance to provide better, affordable healthcare. Our goal is to
            break down the obstacles between primary care and socially
            determined barriers to create a nigh-perfect experience in
            healthcare. Your convenience means care whenever, wherever, and
            however you need it - immediate virtual professional consults,
            stable access to medical service providers, obtainability to safe
            medications & coverage through HMOs without an intimidating heap of
            paperwork.
          </p>
          <p>
            We have leveraged advances in Artificial Intelligence and network
            security to augment the reach of physicians and provide on-demand
            access whilst ensuring that you get the best and safest access to
            our platform.
          </p>
          <p>
            We are strongly committed to protecting the confidentiality and
            privacy of your personal information, building services that are
            wholly inclusive and free from every form of discrimination. Also
            ensuring completely transparency with our processes and how we use
            your data and offering round the clock availability of all our
            services.
          </p>
          <p>
            The result is a reimagined healthcare not limited by economics or
            location run by a team of world-class medical personnel and software
            engineers to deliver empathy-driven virtual primary care just for
            you.
          </p>
        </div>

        <div className='mission-vision-div' data-aos='zoom-in-down'>
          <div className='mission'>
            <div className='mission-vision-head'>
              <h3>Our Mission</h3>
              <div>
                <p>Our Mission</p>
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
              <p className='mission-vision-text'>
                To create the most advanced, affordable and complete care model
                for everyone through applications of cutting-edge technology &
                universal access to medical resources providing healthcare
                solutions to everyone’s convenience through the passion and
                commitment.
              </p>
            </div>
          </div>
          <div className='our-values'>
            <p>Our Values</p>
            <img src='/images/avatar.svg' alt='' />
          </div>
          <div className='vision'>
            <div className='mission-vision-head'>
              <h3>Our Vision</h3>
              <div>
                <p>Our Vision</p>
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
              <p  className='mission-vision-text'>
                To become the ultimate healthcare solutions provider that gives
                complete control over health related concerns in a personalized,
                transparent and empathetic manner across Africa and ultimately
                worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className='team'>
          <div className='team-header'>
            <h3>Meet the Advisory Board</h3>
          </div>
          <div className='board-contents'>
            <div className='board-img'>
              <img src='/images/founder.png' alt='Afri-health founder' />
              <div className='name-position'>
                <h5>Chinedu Nwobodo</h5>
                <p>Founder</p>
              </div>
            </div>
            <div className='board-img'>
              <img src='/images/dr-philip-ekpe.png' alt='Advisory board' />
              <div className='name-position'>
                <h5>Dr. Philip Ekpe</h5>
                <p>Advisory Board</p>
              </div>
            </div>
            <div className='board-img'>
              <img src='/images/dr-adetunji.png' alt='Advisory board' />
              <div className='name-position'>
                <h5>Dr. Adetnuji Adenekan</h5>
                <p>Advisory Board</p>
              </div>
            </div>
          </div>

          <div className='team-header'>
            <h3>Our Team</h3>
            <p>
              Meet the individuals whose inspiration, passion, hardwork and
              drive has <br /> brought Afrihelath’s Vision to fruition.
            </p>
          </div>

          <div className='team-contents flex-row-reverse md:flex-row'>
            <div className='team-img'>
              <img src='/images/coo.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Chikezie Jude</h5>
                <p>Chief Operating Officer</p>
              </div>
            </div>
            <div className='team-img tM'>
              <img src='/images/cto.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Michael Falade</h5>
                <p>Chief Technology Officer</p>
              </div>
            </div>
            <div className='team-img'>
              <img src='/images/growth.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Emmanuel Afolabi</h5>
                <p>Growth Marketing Executive</p>
              </div>
            </div>
            <div className='team-img tM'>
              <img src='/images/engineer1.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Phillip Olalere</h5>
                <p>Senior Software Engineer</p>
              </div>
            </div>
            <div className='team-img'>
              <img src='/images/backend1.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Paul Joshua</h5>
                <p>Backend Engineer</p>
              </div>
            </div>
            <div className='team-img tM'>
              <img src='/images/designer.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Samuel Yusuf</h5>
                <p>Lead Designer</p>
              </div>
            </div>
            <div className='team-img'>
              <img src='/images/analyst.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Temitope <br/> Okewande</h5>
                <p>Quality Assurance Analyst <br/> / Tester</p>
              </div>
            </div>
            <div className='team-img tM'>
              <img src='/images/backend2.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Precious Ani</h5>
                <p>Backend Engineer</p>
              </div>
            </div>
            <div className='team-img'>
              <img src='/images/devops.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Jesse Ejegi-Memeh</h5>
                <p>Dev-Ops Engineer</p>
              </div>
            </div>
            <div className='team-img tM'>
              <img src='/images/product-manager.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Abudiaro Idowu</h5>
                <p>Product Manager</p>
              </div>
            </div>
            <div className='team-img'>
              <img
                src='/images/product-operations.png'
                alt='Afri-health Team'
              />
              <div className='name-position'>
                <h5>Blessing Akuma</h5>
                <p>Product Operations <br/> Associate</p>
              </div>
            </div>
            <div className='team-img tM'>
              <img src='/images/frontend1.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Ozuem Will</h5>
                <p>Frontend Engineer</p>
              </div>
            </div>
            <div className='team-img'>
              <img src='/images/hr.png' alt='Afri-health Team' />
              <div className='name-position'>
                <h5>Happiness Paul</h5>
                <p>Human Resource Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer goes here */}
    </>
  );
};

export default About;

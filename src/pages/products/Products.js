import React from "react";
import "./Products.css";
import ImageComponent from "../../components/ImageComponent";

const Products = () => {
  return (
    <div className='px-8 md:px-16'>
      <div className='flex flex-col py-12 md:py-28'>
        <h2 className='text-4xl font-bold text-afriTextHeader text-center'>
          Our Products
        </h2>
        <p className='text-center px-0 pt-4 md:px-14 md:py-4'>
          Get thrust into the future of health care today. Our unique approach
          to improving universal access to healthcare is reinforced by our
          expertise in leveraging our clinical and technological assets so they
          work in perfect sync for you.
        </p>
      </div>
      <div className='flex py-16 flex-col-reverse md:flex-row'>
        <div className='md:w-1/2'>
          <h6 className='text-afriSubHeader'>MOBILE APP</h6>
          <h3 className='font-bold text-3xl text-afriTextHeader py-4'>
            Rigour Plus
          </h3>
          <p className='afriText py-2'>
            RigourPlus is everything you need to elevate your health experience
            at your fingertips. Specifically made with you in mind, we guarantee
            a very user-friendly design and experience.
          </p>
          <p className='afriText py-2'>
            Rigour+ connects you to a broad network of medical service providers
            and services ensuring you are delivered personalized treatment
            whenever and wherever you need it.
          </p>
          <p className='afriText py-2'>
            Rigour+ goes beyond your imaginations to offer you a truly holistic
            suite of services that ensures you have fewer things to worry about.{" "}
            <br />
          </p>
          <div>
            <div>
              <h5 className='font-bold text-lg text-afriTextHeader py-4'>
                Features
              </h5>
            </div>

            <div className='md:flex'>
              <div className='flex flex-col'>
                <div className='flex items-center py-1'>
                  <ImageComponent src='check.png' />
                  <p className='ml-2'>Purchase Medication</p>
                </div>
                <div className='flex items-center py-1'>
                  <ImageComponent src='check.png' />
                  <p className='ml-2'>Book Appointments</p>
                </div>
                <div className='flex items-center py-1'>
                  <ImageComponent src='check.png' />
                  <p className='ml-2'>Check nearby medical facilities</p>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex items-center py-1'>
                  <ImageComponent src='check.png' />
                  <p className='ml-2'>Book Ambulance</p>
                </div>
                <div className='flex items-center py-1'>
                  <ImageComponent src='check.png' />
                  <p className='ml-2'>Purchase Health Insurance</p>
                </div>
              </div>
            </div>

            <div className="md:flex py-8">
              <div className="flex py-2 px-4 md:mb-0 mb-4 bg-afriTextHeader items-center rounded-lg">
                <ImageComponent src='android.png' />
                <div className="pl-4">
                  <h6 className="text-white text-sm">GET IT ON</h6>
                  <p className="text-white text-sm">Google Play</p>
                </div>
              </div>
              <div className="flex py-2 px-4 bg-afriTextHeader items-center md:ml-8 rounded-lg">
                <ImageComponent src='apple.png' />
                <div className="pl-4">
                  <h6 className="text-white text-sm">Download On The</h6>
                  <p className="text-white text-sm">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='md:w-1/2'>
          <ImageComponent src='img2.1.png' />
        </div>
      </div>

      <div className='md:flex py-16'>
        <div className='md:w-1/2'>
          <ImageComponent src='img2.2.png' />
        </div>

        <div className='md:w-1/2'>
          <h6 className='text-afriSubHeader'>WEB APP</h6>
          <h3 className='font-bold text-3xl text-afriTextHeader py-4'>Picon</h3>
          <p className='afriText py-2'>
            Our service provider platform enables through our polaris platform,
            medical practitioners interested in shaping the future of primary
            care are blended into the afrihealth ecosystem as part of our
            physicians responsible for dispensing patient care both virtually
            and in person.
          </p>
          <p className='afriText py-2'>
            with polaris, your practice is simplified as we have integrated
            everything you need to deliver telecare at your best including
            telemedicine, electronic medical records, automated billing. 
          </p>
          <p className='afriText py-2'>
            Polaris allows you to increase your revenue drastically, expand your
            clientele by practising beyond borders, leaping over administrative
            hurdles while improving your operational competence. <br />
          </p>
          <div className="flex">
            <a href='#' className='text-afriSubHeader'>Learn more</a>
            <ImageComponent src='arrow-up.png' />
          </div>
        </div>
      </div>

      <div className='md:flex py-16'>
        <div className='md:w-1/2'>
          <h6 className='text-afriSubHeader'>WEB APP</h6>
          <h3 className='font-bold text-3xl text-afriTextHeader py-4'>Polaris</h3>
          <p className='afriText py-2'>
            Our service provider platform enables we believe in re-enforcing
            your trust in the manufacturing & distribution of drugs through
            technology-enabled transparency. in collaboration with the national
            agency for food and drug administration and control (nafdac), we
            have developed a software solution to guarantee product integrity in
            value chain standards. picon is a cloud-based holistic track and
            trace system that aims to eliminate the spread of counterfeit drugs.
            </p>
            <p className='afriText py-2'>
            picon generates, stores, and aggregates serialization data for
            uniquely identifying every product at all levels of the value chain.
            our software also generates unique scannable gs1 barcodes & qr codes
            that ensure complete verifiability by the customers. through
            partnerships with major stakeholders in the pharmaceutical
            production industry, we enable compliance with regional and
            international standards right from the production line to the
            retailing of drugs.
          </p>
          <div className='flex'>
            <a href='#' className='text-afriSubHeader'>Learn more</a>
            <ImageComponent src='arrow-up.png' />
          </div>
        </div>

        <div className='md:w-1/2 relative'>
          <ImageComponent src='macbook.png' className="absolute mt-8 md:ml-24 md:mt-44 md:w-96" />
          <ImageComponent src='background.png'/>
        </div>
      </div>
    </div>
  );
};

export default Products;

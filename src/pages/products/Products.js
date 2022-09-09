import React from "react";
import "./Products.css";
import ImageComponent from "../../components/ImageComponent";
const Products = () => {
  return (
    <div>
      <div>
        <h2>Our Products</h2>
        <p>
          Get thrust into the future of health care today. Our unique approach
          to improving universal access to healthcare is reinforced by our
          expertise in leveraging our clinical and technological assets so they
          work in perfect sync for you.
        </p>
      </div>

      <div>
        <div>
          <h6>MOBILE APP</h6>
          <h3>Rigour Plus</h3>
          <p>
            RigourPlus is everything you need to elevate your health experience
            at your fingertips. Specifically made with you in mind, we guarantee
            a very user-friendly design and experience. <br />
            Rigour+ connects you to a broad network of medical service providers
            and services ensuring you are delivered personalized treatment
            whenever and wherever you need it. <br />
            Rigour+ goes beyond your imaginations to offer you a truly holistic
            suite of services that ensures you have fewer things to worry about.{" "}
            <br />
          </p>
          <div>
            <div>
              <h5>Features</h5>
            </div>
            <div>
              <div>
                <ImageComponent src='check.png' />
                <p>Purchase Medication</p>
              </div>
              <div>
                <ImageComponent src='check.png' />
                <p>Book Ambulance</p>
              </div>
            </div>
            <div>
              <div>
                <ImageComponent src='check.png' />
                <p>Book Appointments</p>
              </div>
              <div>
                <ImageComponent src='check.png' />
                <p>Purchase Health Insurance</p>
              </div>
            </div>
            <div>
              <div>
                <ImageComponent src='check.png' />
                <p>Check nearby medical facilities</p>
              </div>
            </div>
            <div>
              <div>
                <ImageComponent src='check.png' />
                <div>
                  <h6>GET IT ON</h6>
                  <p>Google Play</p>
                </div>
              </div>
              <div>
                <ImageComponent />
                <div>
                  <h6>Download On The</h6>
                  <p>App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ImageComponent src='img2.1.png' />
        </div>
      </div>

      <div>
        <div>
          <ImageComponent src='img2.2.png' />
        </div>

        <div>
          <h6>WEB APP</h6>
          <h3>Picon</h3>
          <p>
            Our service provider platform enables through our polaris platform,
            medical practitioners interested in shaping the future of primary
            care are blended into the afrihealth ecosystem as part of our
            physicians responsible for dispensing patient care both virtually
            and in person.
            <br />
            with polaris, your practice is simplified as we have integrated
            everything you need to deliver telecare at your best including
            telemedicine, electronic medical records, automated billing. <br />
            Polaris allows you to increase your revenue drastically, expand your
            clientele by practising beyond borders, leaping over administrative
            hurdles while improving your operational competence. <br />
          </p>
          <div>
            <a href='#'>Learn more</a>
            <ImageComponent src='arrow-up.png' />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h6>WEB APP</h6>
          <h3>Polaris</h3>
          <p>
            Our service provider platform enables we believe in re-enforcing
            your trust in the manufacturing & distribution of drugs through
            technology-enabled transparency. in collaboration with the national
            agency for food and drug administration and control (nafdac), we
            have developed a software solution to guarantee product integrity in
            value chain standards. picon is a cloud-based holistic track and
            trace system that aims to eliminate the spread of counterfeit
            drugs.
            <br/>
            picon generates, stores, and aggregates serialization data
            for uniquely identifying every product at all levels of the value
            chain. our software also generates unique scannable gs1 barcodes &
            qr codes that ensure complete verifiability by the customers.
            through partnerships with major stakeholders in the pharmaceutical
            production industry, we enable compliance with regional and
            international standards right from the production line to the
            retailing of drugs.
          </p>
          <div>
            <a href='#'>Learn more</a>
            <ImageComponent src='arrow-up.png' />
          </div>
        </div>

        <div>
          <ImageComponent src='macbook.png' />
          <ImageComponent src='background.png' />
        </div>
      </div>
    </div>
  );
};

export default Products;

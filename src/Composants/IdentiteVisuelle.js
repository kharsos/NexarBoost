import React from 'react';
import Header from './Header';
import Footer from './Footer';
const IdentiteVisuelle = () => {
  return (
    <div>
      <Header/>
      <div className="container my-5">
        <div className="row">
          {/* Text Section */}
          <div className="col-md-6">
            <h1 className="service-title">IDENTITÉ VISUELLE</h1>
            <p className="service-description mt-4">
              Avec une identité visuelle unique, nous changeons la manière dont vos clients voient votre marque 
              et consolidons votre position sur le marché.
            </p>
            <div className="services-list mt-5">
              <p>LOGO</p>
              <p>BRANDING</p>
              <p>WEB DESIGN</p>
              <p>MONTAGE DE VIDÉOS</p>
              <p>AFFICHES</p>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="col-md-6 text-center">
            <img
              src="/vec4.jpg"
              alt="Illustration"
              className="img-fluid" // Bootstrap class for responsive images
            />
            {/* Replace the placeholder with your illustration */}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default IdentiteVisuelle;

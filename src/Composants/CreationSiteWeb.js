import React from 'react';
import Header from './Header';
import Footer from './Footer';
const CreationSiteWeb = () => {
  return (
    <div>
      <Header/>
      <div className="container my-5">
        <div className="row">
          {/* Text Section */}
          <div className="col-md-6">
            <h1 className="service-title">Création des sites web</h1>
            <p className="service-description mt-4">
            Améliorez votre présence enligne grâce à notre service de création de sites web sur mesure,élaboré pour s'adapter
            à vos besoins uniques et séduire vos clients!
            </p>
            <div className="services-list mt-5">
              <p>Création de site w eb</p>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="col-md-6 text-center">
            <img
              src="/vec3.jpg"
              alt="Illustration"
              className="img-fluid" // Bootstrap class for responsive images
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CreationSiteWeb;

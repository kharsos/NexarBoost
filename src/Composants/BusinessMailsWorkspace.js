import React from 'react';
import Header from './Header';
import Footer from './Footer';
const BusinessMailsWorkspace = () => {
  return (
    <div>
      <Header/>
      <div className="container my-5">
        <div className="row">
          {/* Text Section */}
          <div className="col-md-6">
            <h1 className="service-title">Business Mails Workspace</h1>
            <p className="service-description mt-4">
            Simplifier la communication de votre entreprise grâce à notre service de gestion des emails professionnels,
            qui assure une gestion sécurisée et efficace de vos échanges pour optimiser votre productivité
            </p>
            <div className="services-list mt-5">
              <p>Gestion des réseaux sociaux</p>
              <p>business mails et w orkspace</p>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="col-md-6 text-center">
            <img
              src="/vec2.jpg"
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

export default BusinessMailsWorkspace;

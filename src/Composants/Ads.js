import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Ads = () => {
  return (
    <div>
      <Header/>
      <div className="container my-5">
        <div className="row">
          {/* Text Section */}
          <div className="col-md-6">
            <h1 className="service-title">gestion des compagne publicitaire</h1>
            <p className="service-description mt-4">
            Augmentez votre visibilité enligne avec notre service de publicité ciblée,
            conçu pour vous connecter aux clients idéaux au moment opportun
            grâce à des campagnes publicitaires efficaces et sur mesure
            </p>
            <div className="services-list mt-5">
              <p>Affiches</p>
              <p>Montage de vidéos</p>
              <p>tik tok ads</p>
              <p>facebook ads</p>
              <p>instagram ads</p>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="col-md-6 text-center">
            <img
              src="/vec1.jpg"
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

export default Ads;

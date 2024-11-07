import React, {  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ScrollSection = () => {
  

  return (
    <div className="container">
      {/* Première Section */}
      <div className="row align-items-center my-4">
        <div className="col-12 col-md-6">
          <div className="image-container">
            <img src="/marketing5.png" alt="Exemple 1" className="img-fluid" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h2>Marketing sur les réseaux sociaux</h2>
          <p>
            Notre équipe des réseaux sociaux dynamise ces plateformes pour créer des communautés
            vibrantes, renforcer votre présence en ligne et établir des liens solides avec les clients.
            Que cela signifie plus de buzz ou des ventes plus élevées, notre approche crée un groupe de champions
            qui représentent votre marque.
          </p>
        </div>
      </div>

      {/* Deuxième Section */}
      <div className="row align-items-center my-4 flex-md-row-reverse">
        <div className="col-12 col-md-6">
          <div className="image-container">
            <img src="/marketing6.png" alt="Exemple 2" className="img-fluid" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h2>Création de contenu</h2>
          <p>
            Nous créons du contenu de haute qualité qui résonne avec votre audience et
            construit la voix de votre marque. Notre équipe veille à ce que votre contenu se distingue dans le marché encombré.
          </p>
        </div>
      </div>

      {/* Troisième Section */}
      <div className="row align-items-center my-4">
        <div className="col-12 col-md-6">
          <div className="image-container">
            <img src="/marketing3.png" alt="Exemple 3" className="img-fluid" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h2>Stratégie de marque</h2>
          <p>
            Nous aidons à élaborer et maintenir une stratégie de marque solide qui soutient vos objectifs,
            assure la cohérence des messages, et crée une impression durable dans votre secteur.
          </p>
        </div>
      </div>

      {/* Quatrième Section */}
      <div className="row align-items-center my-4 flex-md-row-reverse">
        <div className="col-12 col-md-6">
          <div className="image-container">
            <img src="/marketing7.png" alt="Exemple 4" className="img-fluid" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h2>Partenariats avec des influenceurs</h2>
          <p>
            Profitez de notre vaste réseau d'influenceurs pour amplifier votre message et renforcer les relations
            avec votre audience cible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;

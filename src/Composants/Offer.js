import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
export default function Offer() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact'); 
  };
  return (
    <div className="Offer">
      <Header />
      <div className="container my-5">
      <div class="offer_h1 d-flex justify-content-center align-items-center" >
          <h1 class="text-primary font-weight-bold text-center">Quelles sont vos attentes ou vos besoins ?</h1>
      </div>
        <div className="services row text-center">
          {/* Identité Visuelle Section */}
          <div className="col-md-3">
          <Link to="/identite-visuelle">
            <img src="/vec4.jpg" alt="Identité Visuelle" className=" img-fluid"/>
            <h5 className="mt-3">Identité visuelle</h5>
            </Link>
          </div>

          {/* ADS Section */}
          <div className="col-md-3">
          <Link to="/ads">
            <img src="/vec1.jpg" alt="ADS" className="img-fluid" />
            <h5 className="mt-3">gestion des compagne publicitair</h5>
          </Link>
          </div>

          {/* Business Mails and Workspace Section */}
          <div className="col-md-3">
          <Link to="/business-mails-workspace">
            <img src="/vec2.jpg" alt="Business Mails and Workspace" className="img-fluid" />
            <h5 className="mt-3">Business mails et workspace</h5>
          </Link>
          </div>

          {/* Création de Site Web Section */}
          <div className="col-md-3">
          <Link to="/creation-site-web">
            <img src="/vec3.jpg" alt="Création de site web" className="img-fluid"/>
            <h5 className="mt-3">Création de site web</h5>
          </Link>
          </div>
        </div>
      </div>
      <div class="contact-container text-center my-5 py-5" >
          <h3 class="font-weight-bold text-primary mb-4">Prêt à Lancer Votre Nouveau Projet Avec Nous ? Contactez-Nous Dès Maintenant !</h3>
          <p class="mb-4">N’hésitez pas à nous joindre si vous souhaitez dynamiser votre entreprise ou si vous envisagez de lancer un nouveau projet.</p>
          <button onClick={goToContact} className="btn btn-warning btn-lg font-weight-bold text-uppercase col-12 col-sm-6 col-md-4 col-lg-3"
>
  Contactez-nous
</button>

      </div>
      <Footer />
    </div>
  );
}

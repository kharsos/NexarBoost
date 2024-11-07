import Header from "./Header";
import Footer from "./Footer";
export default function AboutUs(){
    return(
    <div>
    <Header/>
    <div className="container my-5">
        <div className="row">
        {/* Illustration Section */}
          <div className="col-md-4 text-center">
            <img
              src="/vec5.jpg"
              alt="Illustration"
              className="img-fluid" 
            />
          </div>
          {/* Text Section */}
          <div className="about-text col-md-8">
            
            <hp className=" mt-4">
            Vous souhaitez donner un coup de boost à votre visibilité enligne? <br></br>
            Nexar Boost est là pou vous!<br></br>
            Nous proposons des solutions sur mesure pour développer votre image demarque:
            création de visuels(affiches,cartesdevisite...),gestion de vos réseaux sociaux,
            campagnes publicitaires ciblées...<br></br>
            Ensemble,faisons de votre entreprise un succès.
            </hp>
            
          </div>

         
        </div>
      </div>
    <Footer/>
    </div>
    );
}
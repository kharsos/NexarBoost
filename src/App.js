import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Landing from './Composants/Landing';
import Offer from './Composants/Offer';
import IdentiteVisuelle from './Composants/IdentiteVisuelle'; // Detail page for Identité visuelle
import Ads from './Composants/Ads'; // Detail page for ADS
import BusinessMailsWorkspace from './Composants/BusinessMailsWorkspace'; // Detail page for Business mails et workspace
import CreationSiteWeb from './Composants/CreationSiteWeb'; // Detail page for Création de site web
import AboutUs from './Composants/AboutUs';
import ContactUS from './Composants/ContactUs';
export default function App(){
   
    
    return(
       
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}></Route>
                <Route path='/offer' element={<Offer/>}></Route>
                <Route path='/about' element={<AboutUs/>}></Route>
                <Route path='/contact' element={<ContactUS/>}></Route>

                <Route path="/identite-visuelle" element={<IdentiteVisuelle />} />
                <Route path="/ads" element={<Ads />} />
                <Route path="/business-mails-workspace" element={<BusinessMailsWorkspace />} />
                <Route path="/creation-site-web" element={<CreationSiteWeb />} />
            </Routes>  
        </BrowserRouter>
       
    );
} 
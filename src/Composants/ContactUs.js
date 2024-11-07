import Header from "./Header";
import Footer from "./Footer";
import './ContactUs.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUS() {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false); // État pour le message de succès

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_irhu87j', 'template_fuf3guj', form.current, 'UTLQKkKQztiaEUVtN')
            .then(
                () => {
                    console.log('SUCCÈS!');
                    setIsSubmitted(true); // Afficher le message de succès
                    e.target.reset(); // Réinitialiser les champs du formulaire

                    // Masquer le message de succès après 5 secondes
                    setTimeout(() => {
                        setIsSubmitted(false);
                    }, 5000);
                },
                (error) => {
                    console.log('ÉCHEC...', error.text);
                },
            );
    };

    return (
        <div>
            <div className="contact-bg">
                <Header/>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h2 className="heading-section">Contactez-nous</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="wrapper">
                                    <div className="row no-gutters">
                                        <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                            <div className="contact-wrap w-100 p-md-5 p-4">
                                                <h3 className="mb-4">Entrer en contact</h3>
                                                {isSubmitted && (
                                                    <div className="alert alert-success mb-4">
                                                        Votre message a été envoyé avec succès!
                                                    </div>
                                                )}
                                                <form name="contactForm" className="contactForm" ref={form} onSubmit={sendEmail}>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="label" htmlFor="name">Nom complet</label>
                                                                <input type="text" className="form-control" name="user_name" id="name" placeholder="Nom" required></input>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6"> 
                                                            <div className="form-group">
                                                                <label className="label" htmlFor="email">Adresse e-mail</label>
                                                                <input type="email" className="form-control" name="user_email" id="email" placeholder="Email" required></input>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="label" htmlFor="subject">Sujet</label>
                                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" required></input>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="label" htmlFor="#">Message</label>
                                                                <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message" required></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="submit" value="Envoyer le message" className="btn btn-primary"></input>
                                                                <div className="submitting"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                                            <div className="info-wrap w-100 p-md-5 p-4">
                                                <h3>Entrons en contact</h3>
                                                <p className="mb-4">Nous sommes toujours à la recherche de nouveaux clients. Si vous êtes intéressé à travailler avec nous, n'hésitez pas à nous contacter de l'une des façons suivantes.</p>
                                                <div className="dbox w-100 d-flex align-items-center justify-content-center mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-telephone mr-3" viewBox="0 0 16 16">
                                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z"/>
                                                    </svg>
                                                    <div className="text text-center">
                                                        <p className="mb-0"><span>Téléphone :</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                                    </div>
                                                </div>

                                                <div className="dbox w-100 d-flex align-items-center justify-content-center mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-envelope mr-3" viewBox="0 0 16 16">
                                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                                    </svg>
                                                    <div className="text text-center">
                                                        <p className="mb-0"><span>Email :</span> <a href="mailto:info@nexar.com">info@nexar.com</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    );
}

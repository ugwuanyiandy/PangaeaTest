import React from 'react'
import * as Unicons from "@iconscout/react-unicons";
import insta1 from "../assets/images/insta1.png"
import insta2 from "../assets/images/insta2.png"
import insta3 from "../assets/images/insta3.png"
import insta4 from "../assets/images/insta4.png"
import insta5 from "../assets/images/insta5.png"

const Footer = (props) => {
    return (
        <footer>
            <div className="pre-footer-div">
                <section className="container-fluid">
                    <h2 className="pre-footer-heading fw-400">Join the #ManCareMovement <Unicons.UilArrowRight/></h2>
                    
                    <div className="insta-reel">
                        <div className="insta-reel-item">
                            <img src={insta1} className="w-100"/>
                        </div>
                        
                        <div className="insta-reel-item">
                            <img src={insta2} className="w-100"/>
                        </div>
                        
                        <div className="insta-reel-item">
                            <img src={insta3} className="w-100"/>
                        </div>
                        
                        <div className="insta-reel-item">
                            <img src={insta4} className="w-100"/>
                        </div>
                        
                        <div className="insta-reel-item d-none d-lg-inline-block">
                            <img src={insta5} className="w-100"/>
                        </div>
                    </div>
                    
                </section>
            </div>

            <div className="footer-div">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-xl-3">
                            <h4 className="fw-400 text-light">Let's stay in touch</h4>
                            
                            <p className="text-light pt-3">
                                We’ll give you a heads up on new Lumin products, deals, and events, plus tips & tricks
                                on how to keep your skin looking its damned finest.
                            </p>
    
                            <input type="text" className="footer-input" placeholder="EMAIL ADDRESS"/>
                        </div>
                        
                        <div className="col-xl-2 d-none d-xl-block"></div>
                        
                        <div className="col-md-6 col-lg-7 col-xl-7">
                            <div className="row">
                                <div className="col-6 col-lg-3 mt-4 mt-lg-0">
                                    <h5 className="sans-serif text-light">Shop</h5>
                                    
                                    <p className="text-light">Skin</p>
                                    <p className="text-light">Hair</p>
                                    <p className="text-light">Body</p>
                                </div>
                                
                                <div className="col-6 col-lg-3 mt-4 mt-lg-0">
                                    <h5 className="sans-serif text-light">About</h5>
                                    
                                    <p className="text-light">Blog</p>
                                    <p className="text-light">How To</p>
                                    <p className="text-light">Ingredients</p>
                                    <p className="text-light">Reviews</p>
                                    <p className="text-light">FAQ</p>
                                </div>
                                
                                <div className="col-6 col-lg-3 mt-4 mt-lg-0">
                                    <h5 className="sans-serif text-light">More</h5>
                                    
                                    <p className="text-light">Jobs</p>
                                    <p className="text-light">Wholesale</p>
                                    <p className="text-light">Heroes Program</p>
                                    <p className="text-light">Request Personal Data</p>
                                </div>
    
                                <div className="col-6 col-lg-3 mt-4 mt-lg-0">
                                    <Unicons.UilInstagram className="me-2 text-light"/>
                                    <Unicons.UilFacebook className="me-2 text-light"/>
                                    <Unicons.UilTwitter className="me-2 text-light"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <h5 className="text-light sans-serif">Need help?</h5>
                        <p className="small text-light">Contact us through our <span className="text-decoration-underline">Support Concierge</span></p>
                        <p className="small text-light">Or email us at <span className="text-decoration-underline">support@luminskin.com</span></p>
                        
                        <p className="small text-light mt-4">&copy; , Lumin </p>
                        
                        <p className="small text-light mt-4">
                            <span className="text-decoration-underline">Privacy Policy,</span> &nbsp;
                            <span className="text-decoration-underline">Return Policy,</span> &nbsp;
                            <span className="text-decoration-underline">Terms of Service</span>
                        </p>
                        
                        <p className="small text-light mt-4">3600 Wilshire Boulevard, Suite 1700, Los Angeles, CA 90010</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer

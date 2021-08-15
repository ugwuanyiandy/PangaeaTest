import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom";
// import {connect} from "react-redux";
// import {mapDispatchToProps, mapStateToProps} from "../redux/actions";
import Logo from "../assets/images/lumin.png";
import * as Unicons from "@iconscout/react-unicons";
import {Col, Row} from "react-bootstrap";
import {SideCartContext} from "../contexts/SideCartContext"

const FrontHeader = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [state, setState] = useState(false);
    
    const toggleCartOpen = () => {
    
    };
    
    const clearCart = () => {
    
    };
    
    return (
        <SideCartContext.Consumer>{(context) => {
            const {toggleSideCart, toggleMenuCart} = context;
        
            return (
                <header>
                    <nav className="navbar navbar-expand-lg fixed-top d-flex justify-content-between pl-2 py-0 align-items-center bg-custom-light border-bottom">
                        <div className="container-fluid">
                            <button className="navbar-toggler d-lg-none px-1" onClick={toggleMenuCart}>
                                <Unicons.UilBars/>
                            </button>
                            
                            <Link className="logo d-none d-lg-inline-block" to="#">
                                <img src={Logo} alt="logo" className="nav-logo"/>
                            </Link>
                            
                            <div className="d-none d-lg-flex justify-content-between me-auto">
                                <p className="icon-stack p-3 align-text-top mb-0">
                                    Shop
                                </p>
                                
                                <p className="icon-stack p-3 align-text-top mb-0">
                                    About
                                </p>
                                
                                <p className="icon-stack p-3 align-text-top mb-0">
                                    Support
                                </p>
                                
                                <p className="icon-stack p-3 align-text-top mb-0">
                                    Blog
                                </p>
                            </div>
            
                            <div className="d-flex justify-content-between">
                                <p className="icon-stack p-3 align-text-top mb-0">
                                    Account
                                </p>
            
                                <p className="icon-stack p-3 ps-0 align-text-top mb-0" data-count="2"
                                   onClick={toggleSideCart}>
                                    <Unicons.UilShoppingCart size="30" color="#000" className="cartIcon"/>
                                </p>
            
                                <select className="form-control my-auto br-0">
                                    <option>AR</option>
                                    <option>FR</option>
                                    <option selected>EN</option>
                                </select>
                            </div>
                        </div>
                        
                    </nav>
                </header>
            )
        }}
        </SideCartContext.Consumer>
    )
};

export default FrontHeader;

import React, {useEffect} from 'react';
import * as Unicons from "@iconscout/react-unicons";

import {SideCartContext} from "../../contexts/SideCartContext"

import {gql} from "@apollo/client";
import {graphql} from "@apollo/client/react/hoc";
import {useMergeState} from "../../utils/helpers";
import ProductList from "../Products/ProductList";

const getCurrencyQuery = gql`
        {
          currency
        }
    `;

const CartSidebar = (props) => {
	const [state, setState] = useMergeState({
		products: props,
		currencies: [],
		loading: true,
	});
	
	const displayCartItems = () => {
		let data = props.data;
		if (data.loading) {
			return (
				<p className="text-center"> Loading </p>
			);
		} else {
			return (
				
				
				props.data.currency && props.data.currency.length > 0 ?
					props.data.currency.map((currency, index) => {
						return (
							<option key={index}>{currency}</option>
						)
					})
					: null
					
			);
		}
	};
	
	useEffect(() => {
	
	}, []);
	
	return (
		<SideCartContext.Consumer>{(context) => {
			const {cart, cartTotal, sideCartOpen, openOverlayClass, closeOverlayClass, openCartClass, closeCartClass,
				toggleSideCart, incrementItemQty, decrementItemQty, setCurrentCurrency, currentCurrency} = context;
			
			return (
				<div className={sideCartOpen ? openOverlayClass : closeOverlayClass}>
					<div className={sideCartOpen ? openCartClass : closeCartClass}>
						<div className="cart-header row align-items-center">
							<div className="col-4">
								<div className="close-icon">
									<p className="text-center mb-0" onClick={toggleSideCart}><Unicons.UilAngleRight/></p>
								</div>
							</div>
							
							<div className="col-4">
								<p className="tiny text-muted mb-0 cart-heading">YOUR CART</p>
							</div>
						</div>
						
						<div className="cart-curr">
							<div className="row">
								<div className="col-4 col-md-3">
									<select className="form-control br-0 py-1" onChange={(e) => setCurrentCurrency(e.target.value)}>
										{displayCartItems()}
									</select>
								</div>
							</div>
						</div>
						
						<div className="cart-body">
							
							{
								cart && cart.length>0 ?
									cart.map((item, index) => {
										return (
											<div className="cart-single" key={index}>
												<div className="d-flex justify-content-between">
													<div className="item-details">
														<div className="remove-item me-2">X</div>
														
														<h6>{item.title}</h6>
														<p>One time purchase of Two Month supply</p>
														
														<div className="d-flex justify-content-between qty-amt">
															<div className="item-amount">
																<div className="qty-change" onClick={() => decrementItemQty(item)}>-</div>
																<div className="qty">{item.qty}</div>
																<div className="qty-change" onClick={() => incrementItemQty(item)}>+</div>
															</div>
															
															<div className="item-price">{currentCurrency}{item.price * item.qty}</div>
														</div>
													</div>
													
													<div className="item-img">
														<img src={item.image_url}/>
													</div>
												</div>
											</div>
										)
									})
									: <p className="text-center">There are no items in you cart.</p>
							}
							
						</div>
						
						{
							cart && cart.length > 0 ?
								<div className="checkout-div">
									<div className="total-div">
										<p className="small">Subtotal</p>
										
										<p className="small">{currentCurrency}{cartTotal}</p>
									</div>
									
									<div className="pay-div">
										<button className="btn btn-block btn-subscribe">
											MAKE THIS A SUBSCRIPTION (SAVE 20%)
										</button>
										
										<button className="btn btn-block btn-checkout">
											PROCEED TO CHECKOUT
										</button>
									</div>
								</div>
								: null
						}
					</div>
				</div>
			)
		}}
		</SideCartContext.Consumer>
	)
};

export default graphql(getCurrencyQuery) (CartSidebar);
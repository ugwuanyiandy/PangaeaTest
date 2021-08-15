import React, {useEffect} from 'react';
import * as Unicons from "@iconscout/react-unicons";

import {SideCartContext} from "../../contexts/SideCartContext"

import {useMergeState} from "../../utils/helpers";


const MenuSidebar = (props) => {
	const [state, setState] = useMergeState({
		activeTab: 'shop',
	});
	
	const setActiveTab = (tabName) => {
		setState({activeTab: tabName})
	};
	
	useEffect(() => {
	
	}, []);
	
	return (
		<SideCartContext.Consumer>{(context) => {
			const {sideMenuOpen, openOverlayClass, closeOverlayClass, openMenuClass, closeMenuClass, toggleMenuCart,} = context;
			
			return (
				<div className={sideMenuOpen ? openOverlayClass : closeOverlayClass}>
					<div className={sideMenuOpen ? openMenuClass : closeMenuClass}>
						<div className="cart-header row align-items-center">
							<div className="col-9">
								<div className="px-3">
									<div className="d-flex justify-content-around">
										<p className={state.activeTab === 'shop' ? "menu-active" : ''} onClick={() => setActiveTab('shop')}>Shop</p>
										<p className={state.activeTab === 'about' ? "menu-active" : ''} onClick={() => setActiveTab('about')}>About</p>
										<p className={state.activeTab === 'support' ? "menu-active" : ''} onClick={() => setActiveTab('support')}>Support</p>
									</div>
								</div>
							</div>
							
							<div className="col-3">
								<div className="close-icon ms-auto">
									<p className="text-center mb-0" onClick={toggleMenuCart}><Unicons.UilAngleLeft/></p>
								</div>
							</div>
						</div>
						
						<div className="cart-body">
							
							<div className="cart-curr">
								{
									state.activeTab === 'shop' ?
										<>
											<h5 className="serif my-4">Skin</h5>
											<h5 className="serif my-4">Hair & Body</h5>
											<h5 className="serif my-4">Sets</h5>
											<h5 className="serif my-4">Accessories</h5>
											<h5 className="serif my-4">Accessories</h5>
										</>
										: null
								}
								
								{
									state.activeTab === 'about' ?
										<>
											<h5 className="serif my-4">How To</h5>
											<h5 className="serif my-4">Ingredients</h5>
											<h5 className="serif my-4">Reviews</h5>
										</>
										: null
								}
								
								{
									state.activeTab === 'support' ?
										<>
											<h5 className="serif my-4">FAQ</h5>
											<h5 className="serif my-4">Heroes Program</h5>
											<h5 className="serif my-4">Lumin Influencer</h5>
											<h5 className="serif my-4">Return & Refund Policy</h5>
										</>
										: null
								}
								
							</div>
						</div>
					</div>
				</div>
			)
		}}
		</SideCartContext.Consumer>
	)
};

export default MenuSidebar;
import React, {createContext, Component} from 'react';

export const SideCartContext = createContext();

class SideCartContextProvider extends Component {
	state = {
		sideCartOpen: false,
		openOverlayClass: "cart-overlay",
		closeOverlayClass: "cart-overlay d-none",
		openCartClass: "cart-div bg-custom-light",
		closeCartClass: "cart-div bg-custom-light no-sidebar-l",
		
		sideMenuOpen: false,
		openMenuClass: "menu-div bg-custom-light",
		closeMenuClass: "menu-div bg-custom-light no-sidebar-l",
		
		cart: [],
		cartTotal: 0,
		
		productList: [],
		
		currentCurrency: "USD",
	};
	
	toggleSideCart = () => {
		this.setState({sideCartOpen: !this.state.sideCartOpen});
	};
	
	toggleMenuCart = () => {
		console.log('toggle');
		this.setState({sideMenuOpen: !this.state.sideMenuOpen});
	};
	
	itemExists = (arr, name) => {
		return arr.some(el => el.id === name);
	};
	
	addCartItem = (item) => {
		let oldCart = JSON.parse(localStorage.getItem('cart')) || [];
		
		if (!this.itemExists(oldCart, item.id)) {
			let newItem = { ...item };
			if (!newItem.qty) {
				newItem.qty = 1;
			}
			
			oldCart.push(newItem);
			localStorage.setItem('cart', JSON.stringify(oldCart));
			
			let totalCart = newItem.qty * newItem.price;
			
			this.setState({cart: JSON.parse(localStorage.getItem('cart')), cartTotal: this.state.cartTotal + newItem.price});
			
			this.setState({sideCartOpen: true});
		} else {
			let thisCart = JSON.parse(localStorage.getItem('cart'));
			
			thisCart.forEach(function (obj) {
				if (obj.id === item.id) {
					obj.qty = obj.qty+1
				}
			});
			
			let totalCart = thisCart.reduce(function(prev, cur) {
				return prev + (cur.price * cur.qty);
			}, 0);
			
			localStorage.setItem('cart', JSON.stringify(thisCart));
			this.setState({cart: thisCart, cartTotal: totalCart});
			
			this.setState({sideCartOpen: true});
		}
		
	};
	
	updateCart = (item) => {
		let oldCart = JSON.parse(localStorage.getItem('cart')) || [];
		
			let newItem = {...item};
			if (!newItem.qty) {
				newItem.qty = 1;
			}
			
			oldCart.push(newItem);
			localStorage.setItem('cart', JSON.stringify(oldCart));
			
			let totalCart = this.state.cartTotal + (newItem.qty * newItem.price);
			
			console.log(newItem.qty)
			console.log(newItem.price)
			console.log(this.state.cartTotal)
			
			this.setState({cart: JSON.parse(localStorage.getItem('cart')), cartTotal: totalCart});
			
			this.setState({sideCartOpen: true});
	};
	
	incrementItemQty = (item) => {
		let oldCart = JSON.parse(localStorage.getItem('cart')) || [];
		
		if (this.itemExists(oldCart, item.id)) {
			oldCart.forEach(function (obj) {
				if (obj.id === item.id) {
					obj.qty = obj.qty+1
				}
				// console.log(obj)
			});
			
			let totalCart = oldCart.reduce(function(prev, cur) {
				return prev + (cur.price*cur.qty);
			}, 0);
			
			localStorage.setItem('cart', JSON.stringify(oldCart));
			this.setState({cart: oldCart, cartTotal: totalCart});
		}
	};
	
	decrementItemQty = (item) => {
		let oldCart = JSON.parse(localStorage.getItem('cart')) || [];
		
		if (this.itemExists(oldCart, item.id)) {
			oldCart.forEach(function (obj) {
				if (obj.id === item.id && obj.qty > 1) {
					obj.qty = obj.qty-1
				} else if (obj.id === item.id && obj.qty === 1) {
					const indx = oldCart.findIndex(v => v.id === item.id);
					oldCart.splice(indx, 1);
				}
			});
			
			let totalCart = oldCart.reduce(function(prev, cur) {
				return prev + (cur.price*cur.qty);
			}, 0);
			
			localStorage.setItem('cart', JSON.stringify(oldCart));
			this.setState({cart: oldCart, cartTotal: totalCart});
		}
	};
	
	setCurrentCurrency = (currencies) => {
		this.setState({currentCurrency: currencies});
		let currentCart = this.state.cart;
		let newCart = [];
		console.log(currentCart);
		
		setTimeout(() => {
			let current = this;
			console.log('changing cart...' );
			// console.log(this.state.productList);
			
			let products = this.state.productList.props.products;
			
			for (let i=0; i<currentCart.length; i++) {
				products.forEach(function (product) {
					if (product.id === currentCart[i].id) {
						let qtyProduct = Object.assign({}, product);
						
						qtyProduct["qty"] = currentCart[i].qty;
						
						newCart.push(qtyProduct)
					}
					
				});
				localStorage.removeItem('cart');
				this.setState({cartTotal: 0});
				newCart.forEach(function (item) {
					current.updateCart(item);
				});
			}
			
		}, 3000);
	};
	
	getCurrentCurrency = () => {
		console.log(this.state.currentCurrency);
		return this.state.currentCurrency;
	};
	
	setProductList = (products) => {
		this.setState({productList: products})
	};
	
	componentDidMount() {
		let cart = JSON.parse(localStorage.getItem('cart'));
		let totalCart = 0;
		if (cart) {
			totalCart = cart.reduce(function(prev, cur) {
				return prev + (cur.price*cur.qty);
			}, 0);
		}
		
		this.setState({
			cart: JSON.parse(localStorage.getItem('cart')),
			cartTotal: totalCart
		})
	}
	
	render () {
		return (
			<SideCartContext.Provider value={{...this.state, toggleSideCart: this.toggleSideCart, toggleMenuCart: this.toggleMenuCart,
				addCartItem: this.addCartItem, incrementItemQty: this.incrementItemQty , decrementItemQty: this.decrementItemQty,
				setCurrentCurrency: this.setCurrentCurrency, getCurrentCurrency: this.state.getCurrentCurrency, setProductList: this.setProductList}}>
				{this.props.children}
			</SideCartContext.Provider>
		)
	}
}

export default SideCartContextProvider;
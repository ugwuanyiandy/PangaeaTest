import React, {useContext, useEffect} from 'react';

import {SideCartContext} from "../../contexts/SideCartContext";

const ProductList = (props) => {
	const contextValue = useContext(SideCartContext);
	
	useEffect(() => {
		contextValue.setProductList(props);
	}, []);
	
	return (
		<SideCartContext.Consumer>{(context) => {
			const {addCartItem, currentCurrency, setProductList} = context;
			
			return (
				<div className="products-div bg-custom">
					<div className="container">
						<div className="row">
							{/*{() => setProductList(props)}*/}
							
							{
								props.props.products.map( (product, index) => {
									return (
										<div className="col-6 col-lg-4" key={product.id}>
											{/*{setProductList(props)}*/}
											<div className="px-3 py-4">
												<div className="text-center">
													<img src={product.image_url} className="product-img"/>

													<h6 className="my-2 fw-500 sans-serif small">{product.title}</h6>
													<h6 className="my-1 fw-500 sans-serif small">{currentCurrency}{product.price}</h6>

													<button className="btn btn-custom mt-1" onClick={() => addCartItem(product)}>
														Add to Cart
													</button>
												</div>
											</div>
										</div>
									)}
								)
							}
						</div>
					</div>
				</div>
			)
		}}
		</SideCartContext.Consumer>
	)
};

export default ProductList;
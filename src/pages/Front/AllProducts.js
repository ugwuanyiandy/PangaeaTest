import React, {useRef, useState, useEffect, Component, useContext} from 'react';
// import {connect} from "react-redux";
// import {mapDispatchToProps, mapStateToProps, stateKeys} from "../../redux/actions";
import Endpoint from "../../utils/endpoint";
import {useMergeState} from "../../utils/helpers";
import ProductList from "../../components/Products/ProductList";

import {gql, useQuery} from "@apollo/client";
import {graphql} from "@apollo/client/react/hoc";
// import {ApolloClient as client} from "@apollo/client/core/ApolloClient";

import {getProductsQueryBuilder, graphQlApi} from "../../utils/queries";
import {SideCartContext} from "../../contexts/SideCartContext";

// import {gql} from 'apollo-boost';
// import {graphql} from 'react-apollo';

//
// const getProductsQuery = gql`
//     {
//         products {
//             id
//             image_url
//             title
//             price(currency: USD)
//         }
//     }
// `;


const Products = (props) => {
    const [state, setState] = useMergeState({
        dbData: [],
        loading: true,
        loadedProps: [],
        currencies: [],
        products: [],
        
        currentCurrency: 'USD',
    });
    
    const contextValue = useContext(SideCartContext);
    
    const { loading, error, data } = useQuery(getProductsQueryBuilder(contextValue.currentCurrency));
    
    const displayProducts = () => {
        if (loading) {
            return (
                <p className="text-center"> Loading </p>
            );
        } else {
            return (
                <ProductList props={data}/>
            );
        }
        
        // let data = props.data;
        // if (data.loading) {
        //     return (
        //         <p className="text-center"> Loading </p>
        //     );
        // } else {
        //     return (
        //         <ProductList props={props.data}/>
        //     );
        // }
    };
    
    
    useEffect(() => {
    
    }, []);
    
    
        return (
            <>
                <div className="pt-nav container">
                    <div className="page-head">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <h1 className="page-heading">All Products</h1>
                                <p className="small fw-400">A 360<sup>o</sup> look at Lumin</p>
                            </div>
                            <div className="col-lg-5 offset-lg-3 mt-lg-0 mt-3">
                                <select className="form-control br-0 py-3">
                                    <option selected disabled>Filter By</option>
                                    <option>All Products</option>
                                    <option>New Products</option>
                                    <option>Sets</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            
                {displayProducts()}
                
                {/*{*/}
                {/*    this.state.loading ?*/}
                {/*        <div className="text-center">Loading...</div>*/}
                {/*        : <ProductList props={this.state.loadedProps}/>*/}
                
                {/*}*/}
            </>
        )
};

export default graphql(getProductsQueryBuilder())(Products);

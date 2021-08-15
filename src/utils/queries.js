import React, {useRef, useState, useEffect, Component} from 'react';
import {SideCartContext} from "../contexts/SideCartContext";

// import {gql} from "@apollo/client";
import {graphql} from "@apollo/client/react/hoc";

import gql from 'graphql-tag';

// import { graphql, compose } from 'react-apollo';

const graphQlApi = "https://pangaea-interviews.now.sh/api/graphql";

const getCurrenciesQuery = gql`
	{
		currency
	}
`;

const getProductsQuery = gql `
    {
        products {
            id,
            image_url,
            title,
            price(currency: USD)
        }
    }
`;

const getProductsQueryBuilder = (currency) => {
	let built =
	"{" +
		"products {" +
		"id," +
		"image_url," +
		"title," +
		"price(currency: " + currency + ")" +
		"}" +
		"}";
	
	return gql `${built}`
};
// const getProductsQuery = gql `query getProductsByCurrency($currency: Currency!)
//     {
//         products {
//             id,
//             image_url,
//             title,
//             price(currency: $currency)
//         },
//         currency
//     }
// `;


export {getProductsQuery, getProductsQueryBuilder, graphQlApi, getCurrenciesQuery};
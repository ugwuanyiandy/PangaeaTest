import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './assets/css/App.css';
import App from './App';

// import {
//     ApolloClient,
//     InMemoryCache,
//     ApolloProvider,
//     useQuery,
//     gql
// } from "@apollo/client";

//
// const client = new ApolloClient({
//     uri: 'https://pangaea-interviews.now.sh/api/graphql',
//     cache: new InMemoryCache()
// });
//
// client
//     .query({
//         query: gql`
//             query GetCurrencies {
//                 currency
//             }
//     `
//     })
//     .then(result => console.log(result));
//
// client
//     .query({
//         query: gql`
//             query GetProducts {
//                 products {
//                     id
//                     image_url
//                     title
//                     price(currency: USD)
//                 }
//             }
//     `
//     })
//     .then(result => console.log(result));

ReactDOM.render(
    <App/>, document.getElementById('root')
);

// ReactDOM.render(
//     <ApolloProvider client={client}>
//         <App/>
//     </ApolloProvider>, document.getElementById('root')
// );

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


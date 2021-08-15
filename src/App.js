import React, {Component} from 'react';
import "./assets/css/App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FrontBody from "./layouts/FrontBody";
import Cart from "./components/Cart/CartSideBar";
import Menu from "./components/Menu/MenuSideBar";
import SideCartContextProvider from "./contexts/SideCartContext";

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql
} from "@apollo/client";

const client = new ApolloClient({
	uri: 'https://pangaea-interviews.now.sh/api/graphql',
	cache: new InMemoryCache()
});

// import ApolloClient from 'apollo-boost';
// import {ApolloProvider} from 'react-apollo';

//apollo client setup
// const client = new ApolloClient({
// 	uri: 'https://pangaea-interviews.now.sh/api/graphql'
// });

export class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<Switch>
						<SideCartContextProvider>
						
							<Route component={FrontBody}/>
							<Cart/>
							<Menu/>
						
						</SideCartContextProvider>
					</Switch>
				</Router>
			</ApolloProvider>
		)
	}
}

export default App

import React, {Component} from 'react';
import Footer from "./Footer";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import {Route, Switch} from "react-router-dom";

import Products from "../pages/Front/AllProducts";
import PageNotFound from "../pages/PageNotFound";

// import {connect} from "react-redux";
// import {mapDispatchToProps, mapStateToProps, stateKeys} from "../redux/actions";
// import Dialog from "../components/Dialog/Dialog";
import FrontHeader from "./FrontHeader";
import SideCartContextProvider from "../contexts/SideCartContext";
import {ApolloProvider} from "@apollo/client";

export class FrontBody extends Component {
    render() {
        return (
            <>
                {/*<SideCartContextProvider>*/}
                <FrontHeader/>
                <main>
                    <ErrorBoundary>
                        <Switch>
                            <Route path={'/'} component={Products} exact={true}/>
                            <Route path={'/services'} component={Products}/>
                            <Route component={PageNotFound}/>
                        </Switch>
                    </ErrorBoundary>
                    {/*<Dialog/>*/}
                </main>
                <Footer/>
                {/*</SideCartContextProvider>*/}
            </>
        )
    }
}

export default FrontBody;

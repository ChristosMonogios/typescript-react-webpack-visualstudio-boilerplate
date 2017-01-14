import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";

import store from "./Store";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Main from "./layouts/MainLayout";

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home} />
                <Route path="/aboutus" component={AboutUs} />
            </Route>
        </Router>
    </Provider>),
    document.getElementById("app")
);
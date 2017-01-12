import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Main from "./layouts/MainLayout"

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/aboutus" component={AboutUs} />
        </Route>
    </Router>),
    document.getElementById("app")
);
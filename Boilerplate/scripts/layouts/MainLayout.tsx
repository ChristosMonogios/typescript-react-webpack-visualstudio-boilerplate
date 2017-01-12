import * as React from "react";
import { Link } from "react-router";

export interface MainProps {
}

export class Main extends React.Component<MainProps, undefined> {
    render() {
        return (
            <div className="main">
                <div id="navigation">
                    Navigation
                    <ul>
                        <li><Link to="/" activeClassName="active">Home</Link></li>
                        <li><Link to="/aboutus" activeClassName="active">About us</Link></li>
                    </ul>
                </div>
                <div>
                    { this.props.children }
                </div>
                <div id="footer">Footer</div>
            </div>
        );
    }
}

export default Main;
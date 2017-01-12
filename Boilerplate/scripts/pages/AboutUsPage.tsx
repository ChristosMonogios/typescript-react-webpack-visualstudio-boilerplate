import * as React from "react";
import { FirstComponentContainer } from "../components/FirstComponentContainer";

export interface AboutUsProps {
}

export class AboutUs extends React.Component<AboutUsProps, undefined> {
    render() {
        return (
            <div>
                <h1>About us page</h1>
                <FirstComponentContainer />
            </div>
        );
    }
}

export default AboutUs;
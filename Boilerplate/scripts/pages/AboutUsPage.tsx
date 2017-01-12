import * as React from "react";
import { FirstComponent} from "../components/FirstComponent"

export interface AboutUsProps {
}

export class AboutUs extends React.Component<AboutUsProps, undefined> {
    render() {
        return (
            <div>
                <h1>About us page</h1>
                <FirstComponent />
            </div>
        );
    }
}

export default AboutUs;
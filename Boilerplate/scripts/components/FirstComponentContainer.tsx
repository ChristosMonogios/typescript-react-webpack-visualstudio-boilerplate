import * as React from "react";

import { FirstComponent } from "./FirstComponent";

export interface FirstComponentContainerProps
{
}

export class FirstComponentContainer extends React.Component<FirstComponentContainerProps, undefined> {   
    clickButton(): void {
        alert("The button was clicked");
    }

    render() {
        return <FirstComponent firstProp="First Property" firstButtonEvent={this.clickButton} />;
    }
}
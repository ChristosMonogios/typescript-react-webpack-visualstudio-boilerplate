import * as React from "react";

export interface FirstComponentProps
{
    firstProp: string
    firstButtonEvent?: any
}

export class FirstComponent extends React.Component<FirstComponentProps, undefined> {
    render() {
        return (
            <div>
                <h1>{this.props.firstProp}</h1>
                <button onClick={this.props.firstButtonEvent}>Click me!</button>
            </div>);
    }
}
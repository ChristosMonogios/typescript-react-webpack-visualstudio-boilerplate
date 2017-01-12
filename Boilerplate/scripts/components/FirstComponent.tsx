import * as React from "react";

export interface FirstComponentProps
{
}

export class FirstComponent extends React.Component<FirstComponentProps, undefined> {
    render() {
        return <h1>First component</h1>;
    }
}